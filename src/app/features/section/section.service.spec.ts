import { TestBed } from '@angular/core/testing';
import { provideStore, Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { SectionService } from './section.service';
import { Section } from './section.model';
import { addSection, updateSection } from './store/section.actions';
import { sectionReducer } from './store/section.reducer';
import { TODAY_TAG } from '../tag/tag.const';
import { WorkContextType } from '../work-context/work-context.model';
import { OpType } from '../../op-log/core/operation.types';

const TITLES = [
  'Morning (before 12:00)',
  'Afternoon (before 18:00)',
  'Evening (before 24:00)',
] as const;

describe('SectionService Today daypart template', () => {
  let service: SectionService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore({ section: sectionReducer })],
    });
    service = TestBed.inject(SectionService);
    store = TestBed.inject(Store);
  });

  const todaySections = (): Promise<readonly Section[]> =>
    firstValueFrom(service.getSectionsByContextId$(TODAY_TAG.id));

  it('creates three ordinary empty Today sections in order using existing single-entity actions', async () => {
    const dispatch = spyOn(store, 'dispatch').and.callThrough();
    service.createTodayDaypartSections(TITLES);
    const sections = await todaySections();
    expect(sections.map((s) => s.title)).toEqual([...TITLES]);
    expect(
      sections.every(
        (s) =>
          s.contextId === TODAY_TAG.id &&
          s.contextType === WorkContextType.TAG &&
          s.isExpanded &&
          s.taskIds.length === 0,
      ),
    ).toBeTrue();
    expect(dispatch.calls.count()).toBe(3);
    for (const [action] of dispatch.calls.allArgs()) {
      expect(action).toEqual(jasmine.objectContaining({ type: addSection.type }));
      expect(action).toEqual(
        jasmine.objectContaining({
          meta: jasmine.objectContaining({
            entityType: 'SECTION',
            opType: OpType.Create,
          }),
        }),
      );
    }
  });

  it('does not duplicate or overwrite renamed sections after another click or language change', async () => {
    service.createTodayDaypartSections(TITLES);
    const morning = (await todaySections())[0];
    store.dispatch(
      updateSection({
        section: {
          id: morning.id,
          changes: { title: 'My morning', taskIds: ['existing-task'], isExpanded: false },
        },
      }),
    );
    const before = await todaySections();
    const dispatch = spyOn(store, 'dispatch').and.callThrough();
    service.createTodayDaypartSections(['上午', '下午', '晚上']);
    service.createTodayDaypartSections(TITLES);
    expect(await todaySections()).toEqual(before);
    expect(dispatch).not.toHaveBeenCalled();
  });

  it('preserves existing sections and tasks and creates only missing template sections', async () => {
    store.dispatch(
      addSection({
        section: {
          id: 'custom',
          contextId: TODAY_TAG.id,
          contextType: WorkContextType.TAG,
          title: 'Custom',
          taskIds: ['keep-task'],
        },
      }),
    );
    store.dispatch(
      addSection({
        section: {
          id: 'today-daypart-morning',
          contextId: TODAY_TAG.id,
          contextType: WorkContextType.TAG,
          title: 'Renamed morning',
          taskIds: ['morning-task'],
        },
      }),
    );
    const before = await todaySections();
    service.createTodayDaypartSections(TITLES);
    const after = await todaySections();
    expect(after.slice(0, 2)).toEqual(before);
    expect(after.map((s) => s.title)).toEqual([
      'Custom',
      'Renamed morning',
      TITLES[1],
      TITLES[2],
    ]);
  });

  it('reuses an existing exact matching Today title without moving its tasks', async () => {
    const id = service.addSection(TITLES[0], TODAY_TAG.id, WorkContextType.TAG)!;
    store.dispatch(
      updateSection({ section: { id, changes: { taskIds: ['keep-task'] } } }),
    );
    service.createTodayDaypartSections(TITLES);
    const sections = await todaySections();
    expect(sections.length).toBe(3);
    expect(sections[0].id).toBe(id);
    expect(sections[0].taskIds).toEqual(['keep-task']);
  });

  it('does not reuse a matching title from a different project', async () => {
    service.addSection(TITLES[0], 'project', WorkContextType.PROJECT);
    service.createTodayDaypartSections(TITLES);
    expect((await todaySections()).length).toBe(3);
  });
});
