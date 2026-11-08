import { IS_TOUCH_ONLY } from '../../../util/is-touch-only';

/**
 * Whether several tasks may be timed at once (#29). The setting is opt-in and
 * desktop/web only for now: the mobile builds have no parallel background
 * tracking story yet, so they ignore the switch even if a synced config has it on.
 */
export const isParallelTimersSupported = (isEnabledInConfig: boolean): boolean =>
  isEnabledInConfig && !IS_TOUCH_ONLY;
