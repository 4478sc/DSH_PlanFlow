import { Task } from '../tasks/task.model';

/**
 * Which tasks get the idle span back when the user says they were working
 * (issue #29). With parallel timers every timer that was running at the idle
 * edge earns the same span, so the refund goes to all of them - but only when
 * the answer is about the main task. Picking a different task in the dialog
 * means "that was the work", and only that task gets it.
 */
export const getIdleRefundTasks = (
  chosenTask: Task,
  isFullIdleSpan: boolean,
  mainTaskIdAtIdleStart: string | null,
  trackedTasksAtIdleStart: Task[],
): Task[] =>
  isFullIdleSpan &&
  trackedTasksAtIdleStart.length > 1 &&
  chosenTask.id === mainTaskIdAtIdleStart
    ? trackedTasksAtIdleStart
    : [chosenTask];
