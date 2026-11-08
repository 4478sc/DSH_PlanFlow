import { DEFAULT_GLOBAL_CONFIG } from '../../config/default-global-config.const';
import { isParallelTimersSupported } from './parallel-timers';

describe('isParallelTimersSupported (#29)', () => {
  it('is off by default', () => {
    expect(DEFAULT_GLOBAL_CONFIG.timeTracking.isParallelTimersEnabled).toBeFalse();
  });

  it('follows the setting where the platform supports it', () => {
    expect(isParallelTimersSupported(false)).toBe(false);
    expect(isParallelTimersSupported(true)).toBe(true);
  });
});
