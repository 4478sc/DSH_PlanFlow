const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

require('ts-node/register/transpile-only');

const {
  migrateLegacyUserData,
  LEGACY_USER_DATA_DIR_NAMES,
  USER_DATA_MIGRATION_MARKER,
} = require('./legacy-user-data-migration.ts');

const makeRoot = () => fs.mkdtempSync(path.join(os.tmpdir(), 'dsh-userdata-'));

const fakeApp = (appData, userData) => ({
  getPath: (name) => {
    if (name === 'appData') return appData;
    if (name === 'userData') return userData;
    throw new Error('unexpected getPath: ' + name);
  },
});

const seedLegacy = (appData, name) => {
  const legacy = path.join(appData, name);
  fs.mkdirSync(path.join(legacy, 'backups'), { recursive: true });
  fs.writeFileSync(path.join(legacy, 'config.json'), '{"sync":true}');
  return legacy;
};

test('copies the legacy folder into the renamed userData folder once', () => {
  const root = makeRoot();
  const appData = path.join(root, 'appData');
  const target = path.join(root, 'DSH_PlanFlow');
  const legacy = seedLegacy(appData, LEGACY_USER_DATA_DIR_NAMES[0]);

  const result = migrateLegacyUserData(fakeApp(appData, target), {});

  assert.equal(result.migrated, true);
  assert.equal(result.from, legacy);
  assert.equal(fs.readFileSync(path.join(target, 'config.json'), 'utf8'), '{"sync":true}');
  assert.ok(fs.existsSync(path.join(target, 'backups')));
  assert.ok(fs.existsSync(path.join(target, USER_DATA_MIGRATION_MARKER)));
});

test('does not run twice', () => {
  const root = makeRoot();
  const appData = path.join(root, 'appData');
  const target = path.join(root, 'DSH_PlanFlow');
  seedLegacy(appData, LEGACY_USER_DATA_DIR_NAMES[0]);
  migrateLegacyUserData(fakeApp(appData, target), {});

  const second = migrateLegacyUserData(fakeApp(appData, target), {});

  assert.equal(second.migrated, false);
  assert.equal(second.reason, 'already-migrated');
});

test('never overwrites data the user already produced under the new name', () => {
  const root = makeRoot();
  const appData = path.join(root, 'appData');
  const target = path.join(root, 'DSH_PlanFlow');
  seedLegacy(appData, LEGACY_USER_DATA_DIR_NAMES[0]);
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, 'config.json'), '{"new":true}');

  const result = migrateLegacyUserData(fakeApp(appData, target), {});

  assert.equal(result.migrated, false);
  assert.equal(fs.readFileSync(path.join(target, 'config.json'), 'utf8'), '{"new":true}');
});

test('reports no legacy dir on a fresh install', () => {
  const root = makeRoot();
  const appData = path.join(root, 'appData');
  fs.mkdirSync(appData, { recursive: true });

  const result = migrateLegacyUserData(fakeApp(appData, path.join(root, 'DSH_PlanFlow')), {});

  assert.equal(result.migrated, false);
  assert.equal(result.reason, 'no-legacy-dir');
});

test('honours the opt-out env var', () => {
  const root = makeRoot();
  const appData = path.join(root, 'appData');
  const target = path.join(root, 'DSH_PlanFlow');
  seedLegacy(appData, LEGACY_USER_DATA_DIR_NAMES[0]);

  const result = migrateLegacyUserData(fakeApp(appData, target), {
    DSH_SKIP_USER_DATA_MIGRATION: '1',
  });

  assert.equal(result.migrated, false);
  assert.equal(result.reason, 'disabled');
  assert.equal(fs.existsSync(target), false);
});

test('accepts the legacy folder name with a space', () => {
  const root = makeRoot();
  const appData = path.join(root, 'appData');
  const target = path.join(root, 'DSH_PlanFlow');
  seedLegacy(appData, 'Super Productivity');

  const result = migrateLegacyUserData(fakeApp(appData, target), {});

  assert.equal(result.migrated, true);
  assert.ok(fs.existsSync(path.join(target, 'config.json')));
});
