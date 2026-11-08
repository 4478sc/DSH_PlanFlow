import { Task } from '../task.model';
import { TODAY_TAG } from '../../tag/tag.const';

export interface UnsyncedTimeTrackingContext {
  contextType: 'TAG' | 'PROJECT';
  contextId: string;
  date: string;
}

/**
 * Records the project/TAG contexts that need a TIME_TRACKING session sync for
 * this tick. Keyed so repeated ticks on the same context/date stay one entry.
 * Extracted from TaskService to keep that file inside its line cap.
 */
export const trackContextsForSync = (
  unsyncedContexts: Map<string, UnsyncedTimeTrackingContext>,
  task: Task,
  date: string,
): void => {
  // Track project context
  if (task.projectId) {
    const key = `PROJECT:${task.projectId}:${date}`;
    unsyncedContexts.set(key, {
      contextType: 'PROJECT',
      contextId: task.projectId,
      date,
    });
  }

  // Track tag contexts (including TODAY_TAG)
  for (const tagId of [TODAY_TAG.id, ...task.tagIds]) {
    const key = `TAG:${tagId}:${date}`;
    unsyncedContexts.set(key, {
      contextType: 'TAG',
      contextId: tagId,
      date,
    });
  }
};
