import type { App } from 'electron';
import { cpSync, existsSync, mkdirSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Directory names used by releases that were still called "Super Productivity".
 * The userData folder is derived from the app name, so renaming the app to
 * DSH_PlanFlow moves it; without a migration an existing installation looks
 * empty after the upgrade.
 */
export const LEGACY_USER_DATA_DIR_NAMES = [
  'superProductivity',
  'Super Productivity',
] as const;

export const USER_DATA_MIGRATION_MARKER = '.migrated-from-legacy-user-data';

export type UserDataMigrationReason =
  | 'disabled'
  | 'already-migrated'
  | 'no-legacy-dir'
  | 'copy-failed';

export interface UserDataMigrationResult {
  migrated: boolean;
  from?: string;
  to?: string;
  reason?: UserDataMigrationReason;
}

const hasEntries = (dir: string): boolean => {
  try {
    return existsSync(dir) && readdirSync(dir).length > 0;
  } catch {
    return false;
  }
};

/**
 * Copies the previous app-name userData folder into the current one, once.
 *
 * Runs before the single-instance lock (which is created inside userData), so a
 * migrated installation behaves like a normal one from the first start. The
 * copy never overwrites: once the target folder has any content, it is left
 * alone, which makes a failed or partial migration safe to re-run.
 */
export const migrateLegacyUserData = (
  app: Pick<App, 'getPath'>,
  env: NodeJS.ProcessEnv = process.env,
): UserDataMigrationResult => {
  if (env.DSH_SKIP_USER_DATA_MIGRATION === '1') {
    return { migrated: false, reason: 'disabled' };
  }

  const target = app.getPath('userData');
  if (hasEntries(target)) {
    return { migrated: false, to: target, reason: 'already-migrated' };
  }

  const appData = app.getPath('appData');
  const legacy = LEGACY_USER_DATA_DIR_NAMES.map((name) => join(appData, name)).find(
    (candidate) => hasEntries(candidate),
  );
  if (!legacy) {
    return { migrated: false, to: target, reason: 'no-legacy-dir' };
  }

  try {
    mkdirSync(target, { recursive: true });
    cpSync(legacy, target, { recursive: true, force: false, errorOnExist: false });
    writeFileSync(
      join(target, USER_DATA_MIGRATION_MARKER),
      `from=${legacy}\nat=${new Date().toISOString()}\n`,
    );
    return { migrated: true, from: legacy, to: target };
  } catch {
    return { migrated: false, from: legacy, to: target, reason: 'copy-failed' };
  }
};
