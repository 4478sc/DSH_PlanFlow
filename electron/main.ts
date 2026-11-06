import { app } from 'electron';
import { PROTOCOL_PREFIX } from './protocol-handler';
import { APP_DISPLAY_NAME, startApp } from './start-app';
import { applySnapUserDataDir } from './user-data-dir';
import { migrateLegacyUserData } from './legacy-user-data-migration';

const IS_MAC = process.platform === 'darwin';

// The app name decides the userData folder, so it is set before anything reads
// a userData path (including the single-instance lock, #11049).
app.setName(APP_DISPLAY_NAME);
applySnapUserDataDir(app);

// One-time copy from the old "Super Productivity" userData folder. Must run
// after the name/path are final and before the lock below.
const migration = migrateLegacyUserData(app);
if (migration.migrated) {
  console.log(`Migrated user data from ${migration.from} to ${migration.to}`);
}

if (!IS_MAC) {
  // make it a single instance by closing other instances but allow for dev mode
  // because of https://github.com/electron/electron/issues/14094
  const isLockObtained = app.requestSingleInstanceLock();
  if (!isLockObtained) {
    const hasProtocolUrl = process.argv.some((arg) => arg.startsWith(PROTOCOL_PREFIX));
    if (!hasProtocolUrl) {
      console.log('Another instance is already running. Exiting.');
    }
    // Force immediate exit without waiting for graceful shutdown
    process.exit(0);
  } else {
    console.log('Start app...');
    startApp();
  }
} else {
  startApp();
}
