import { Task } from '../tasks/task.model';
import { getIdleRefundTasks } from './idle-refund.util';

const task = (id: string): Task => ({ id }) as Task;

describe('getIdleRefundTasks (#29)', () => {
  it('refunds only the tracked task when a single timer ran', () => {
    expect(
      getIdleRefundTasks(task('a'), true, 'a', [task('a')]).map((t) => t.id),
    ).toEqual(['a']);
  });

  it('refunds every timer that was running when the answer is about the main task', () => {
    expect(
      getIdleRefundTasks(task('a'), true, 'a', [task('a'), task('b')]).map((t) => t.id),
    ).toEqual(['a', 'b']);
  });

  it('refunds only the picked task when another task was chosen', () => {
    expect(
      getIdleRefundTasks(task('b'), true, 'a', [task('a'), task('b')]).map((t) => t.id),
    ).toEqual(['b']);
  });

  it('does not fan out a split entry that is not the whole idle span', () => {
    expect(
      getIdleRefundTasks(task('a'), false, 'a', [task('a'), task('b')]).map((t) => t.id),
    ).toEqual(['a']);
  });
});
