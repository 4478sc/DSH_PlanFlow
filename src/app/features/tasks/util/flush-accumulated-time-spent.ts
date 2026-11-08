import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { syncTimeTracking } from '../../time-tracking/store/time-tracking.actions';
import { selectTimeTrackingState } from '../../time-tracking/store/time-tracking.selectors';
import { TaskTimeSyncService } from '../task-time-sync.service';
import { UnsyncedTimeTrackingContext } from './track-contexts-for-sync';

/**
 * Flushes accumulated time-spent deltas to sync and emits the TIME_TRACKING
 * session data collected since the last flush. Extracted from TaskService to
 * keep that file inside its line cap.
 */
export const flushAccumulatedTimeSpent = (
  store: Store,
  taskTimeSync: TaskTimeSyncService,
  unsyncedContexts: Map<string, UnsyncedTimeTrackingContext>,
): void => {
  taskTimeSync.flush();

  if (unsyncedContexts.size === 0) {
    return;
  }
  store.pipe(select(selectTimeTrackingState), take(1)).subscribe((timeTrackingState) => {
    unsyncedContexts.forEach(({ contextType, contextId, date }) => {
      const prop = contextType === 'TAG' ? 'tag' : 'project';
      const data = timeTrackingState?.[prop]?.[contextId]?.[date];
      if (data) {
        store.dispatch(syncTimeTracking({ contextType, contextId, date, data }));
      }
    });
    unsyncedContexts.clear();
  });
};
