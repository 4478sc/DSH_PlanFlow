import { GlobalConfigService } from '../global-config.service';
import {
  GlobalConfigFormModel,
  GlobalConfigState,
  GlobalSectionConfig,
} from '../global-config.model';
import { DEFAULT_GLOBAL_CONFIG } from '../default-global-config.const';
import { updateGlobalConfigSection } from './global-config.actions';
import { OpType } from '../../../op-log/core/operation.types';

// Compiled by the normal Angular spec program, but never executed: invalid
// calls must stay compiler errors, not become runtime test fixtures (#37).
const checkTypeContracts = (service: GlobalConfigService): void => {
  const sections: GlobalSectionConfig[] = [
    DEFAULT_GLOBAL_CONFIG.appFeatures,
    DEFAULT_GLOBAL_CONFIG.localization,
    DEFAULT_GLOBAL_CONFIG.shortSyntax,
    DEFAULT_GLOBAL_CONFIG.evaluation,
    DEFAULT_GLOBAL_CONFIG.idle,
    DEFAULT_GLOBAL_CONFIG.takeABreak,
    DEFAULT_GLOBAL_CONFIG.sound,
    DEFAULT_GLOBAL_CONFIG.timeTracking,
    DEFAULT_GLOBAL_CONFIG.dominaMode,
    DEFAULT_GLOBAL_CONFIG.focusMode,
    { txt: 'summary' } satisfies NonNullable<GlobalConfigState['dailySummaryNote']>,
    { imagePath: null } satisfies NonNullable<GlobalConfigState['clipboardImages']>,
  ];
  void sections;
  const localForm: GlobalConfigFormModel = { isNotifyOnSessionEnd: true };
  void localForm;

  updateGlobalConfigSection({
    sectionKey: 'timeTracking',
    sectionCfg: { isParallelTimersEnabled: true },
  });
  updateGlobalConfigSection({
    sectionKey: 'dailySummaryNote',
    sectionCfg: { txt: 'summary' },
  });
  updateGlobalConfigSection({
    sectionKey: 'clipboardImages',
    sectionCfg: { imagePath: null },
  });
  service.updateSection('idle', { minIdleTime: 60000 }, true);

  // @ts-expect-error A misspelled section must not become a persistent entity ID.
  updateGlobalConfigSection({ sectionKey: 'timeTrackng', sectionCfg: {} });
  // @ts-expect-error EMPTY is a form placeholder, never a persisted section.
  updateGlobalConfigSection({ sectionKey: 'EMPTY', sectionCfg: {} });
  updateGlobalConfigSection({
    // @ts-expect-error Local widget settings must not enter the global state action.
    sectionKey: 'taskWidget',
    sectionCfg: {},
  });
  updateGlobalConfigSection({
    // @ts-expect-error Local focus settings must not enter the global state action.
    sectionKey: 'focusModeLocal',
    sectionCfg: {},
  });
  updateGlobalConfigSection({
    sectionKey: 'timeTracking',
    // @ts-expect-error Unknown fields remain errors even alongside a valid field.
    sectionCfg: { isParallelTimersEnabled: true, isParallelTimersEnabeld: true },
  });
  updateGlobalConfigSection({
    sectionKey: 'timeTracking',
    // @ts-expect-error Known fields from another section must not typecheck here.
    sectionCfg: { minIdleTime: 60000 },
  });
  updateGlobalConfigSection({
    sectionKey: 'focusMode',
    // @ts-expect-error Local-only fields must not widen the state payload union.
    sectionCfg: { isNotifyOnSessionEnd: true },
  });
  updateGlobalConfigSection({
    sectionKey: 'timeTracking',
    // @ts-expect-error Field values retain their own types.
    sectionCfg: { isParallelTimersEnabled: 'yes' },
  });
  // @ts-expect-error The positional service API must also correlate key and payload.
  service.updateSection('timeTracking', { minIdleTime: 60000 });
  // @ts-expect-error The service must reject local-only section keys too.
  service.updateSection('taskWidget', { isEnabled: true });
};
void checkTypeContracts;

describe('updateGlobalConfigSection', () => {
  it('preserves the persistent action shape for a previously omitted section', () => {
    expect(
      updateGlobalConfigSection({
        sectionKey: 'timeTracking',
        sectionCfg: { isParallelTimersEnabled: false },
        isSkipSnack: true,
      }),
    ).toEqual({
      type: '[Global Config] Update Global Config Section',
      sectionKey: 'timeTracking',
      sectionCfg: { isParallelTimersEnabled: false },
      isSkipSnack: true,
      meta: {
        isPersistent: true,
        entityType: 'GLOBAL_CONFIG',
        entityId: 'timeTracking',
        opType: OpType.Update,
      },
    });
  });

  it('supports optional state sections without treating their payload as undefined', () => {
    const action = updateGlobalConfigSection({
      sectionKey: 'dailySummaryNote',
      sectionCfg: { txt: 'summary' },
    });
    expect(action.sectionCfg).toEqual({ txt: 'summary' });
    expect(action.meta.entityId).toBe('dailySummaryNote');
  });
});
