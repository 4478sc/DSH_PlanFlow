# Running this repository as an independent project

This repository (`DSH_PlanFlow`) is a derivative of [Super Productivity](https://github.com/super-productivity/super-productivity),
which is MIT licensed. The MIT license already grants everything needed to keep
developing this copy, publish your own builds, and even sell them. What it does
**not** grant is the upstream brand: the name, logos and store identifiers stay
with the upstream author.

This document lists the concrete steps, in order, to detach the code from the
upstream author's identity, and the things you must keep so the result stays
license-clean.

## 0. What the license requires (do not remove these)

- `LICENSE` keeps the original MIT text and the upstream copyright line
  (`Copyright (c) 2018 Johannes Millan`). A line for your own modifications is
  appended below it - never replace the original.
- `NOTICE` states what the work is, where it came from, and what changed.
  Keep it in every source and binary distribution (electron-builder can ship it
  in `extraResources`).
- Show the attribution to a user somewhere visible: an "About" dialog entry, a
  README section, or a line in the release notes.
- Do **not** reuse the upstream logo as your application icon, and do not call
  your build "Super Productivity" on a store page, website or social profile.
  A line such as "based on Super Productivity (MIT)" is the right way to credit.

## 1. Decide the identity first

Changing these after you publish is expensive, because some of them move user
data or invalidate signatures.

| Decision | Example value | Consequence of changing it later |
|---|---|---|
| Product name | `PlanFlow` | Window title, installer name, user-data folder name |
| Application id | `com.example.planflow` | Signing, store listings, deep links, update feed identity |
| Website / download page | `https://example.com` | All in-app help links |
| Update feed | GitHub Releases or your own server | Installed clients stop updating |

Keep the product name and the Electron `name` stable once users install it:
the user-data directory is derived from it, so renaming moves every existing
user's data (see section 6).

## 2. Identity fields in the build

Renamed in this repository (verify with `git log -p -- electron-builder.yaml`):

| File | Field | New value |
|---|---|---|
| `electron-builder.yaml` | `appId` | `com.dshplanflow.app` |
| `electron-builder.yaml` | `productName` | `DSH_PlanFlow` |
| `electron-builder.yaml` | `linux.executableName` | `dsh-planflow` |
| `electron-builder.yaml` | `linux.desktop.entry.StartupWMClass` | `dsh-planflow` |
| `electron-builder.yaml` | `publish` | this repository's GitHub Releases |
| `capacitor.config.ts` | `appId` / `appName` | `com.dshplanflow.app` / `DSH_PlanFlow` |
| `package.json` | `name` | `dsh-planflow` |
| `src/index.html` | `<title>` | `DSH_PlanFlow` |
| `src/assets/i18n/*.json` | product name | `DSH_PlanFlow` (28 locales) |
| `electron/start-app.ts` | `APP_DISPLAY_NAME`, `LINUX_DESKTOP_NAME` | `DSH_PlanFlow`, `dsh-planflow.desktop` |
| `tools/afterPack.js` | `BIN_NAME`, `RENAMED` | `dsh-planflow`, `dsh-planflow-bin` |
| `build/linux/snap-wrapper.sh`, `build/linux/rpm-posttrans.sh` | snap/exec paths | `dsh-planflow` |
| `android/` | launcher label | `DSH_PlanFlow` (package id unchanged, see below) |
| `funding.json` | entity | `4478sc` |

Still upstream-owned, on purpose (changing them needs a platform SDK and a migration):

| Item | Current value | Why it is still like this |
|---|---|---|
| Android package id | `com.superproductivity.superproductivity` | Renaming a Java package moves every source directory and needs an Android SDK to verify; the launcher label is already `DSH_PlanFlow` |
| Android deep-link scheme | `com.super-productivity.app` | Must match `capacitor.config.ts` on both sides; do it together with the package id |
| iOS bundle id | `com.superproductivity.superproductivity` | Needs Xcode to re-sign |
| Snap store / Flathub / Play listing | upstream accounts | Register your own |
| Windows signing subject | `CN=___-___` placeholder | Put your certificate subject here |

## 3. Links shown to users and used at runtime

These are upstream URLs that become wrong (or misleading) the moment you call
this your own project. Decide per link: keep it as an attribution link, or point
it at your own page.

- `https://super-productivity.com` - website, download page, web app
- `https://github.com/super-productivity/super-productivity` - issues, discussions, wiki, releases
- `https://deepwiki.com/super-productivity/super-productivity`
- sponsor / donation links, `contact@super-productivity.com`

Keep **one** deliberate attribution link. A user who lands on your store page
should be able to see "based on Super Productivity (MIT)" within one click.

## 4. Updates, signing and stores

- `electron-builder.yaml` -> `publish`: your own repository or update server.
  Installed clients follow this feed; changing it later strands old installs.
- Code signing: Windows certificate (the upstream project gets one from SignPath
  as a sponsor - you need your own), Apple Developer ID plus notarization.
- Store identifiers (Microsoft Store, App Store, Play, Flathub, Snap Store) are
  registered to the upstream author and cannot be reused. Publish under your own
  account and app id.

## 5. CI and release automation

The workflows in `.github/workflows/` assume the upstream repository: their
secrets, their store credentials, their release branches, and in some cases
their wiki and Docker images.

1. Disable what you do not need (store publishing, nightly E2E, wiki sync).
2. Replace secrets with your own (Settings -> Secrets and variables -> Actions).
3. Check that release workflows no longer push to upstream-owned registries,
   stores or feeds.
4. Keep the test workflows - they are the cheapest protection you inherit.

## 6. Data, compatibility, and the rename trap

- **User-data folder.** Electron derives it from the app name. Today it is
  `~/.config/superProductivity` on Linux, `%APPDATA%\\superProductivity` on
  Windows, `~/Library/Application Support/superProductivity` on macOS. Renaming
  the Electron `name` creates a brand-new empty folder: existing users look like
  they lost their data. Either keep the folder name, or ship a migration that
  copies the old folder on first start.
- **Sync protocol.** If you keep the op-log/DB schema compatible, users can move
  between your build and upstream. If you fork the schema, you own the migration.
- **SuperSync.** `packages/super-sync-server` is self-hostable; decide whether
  your users point at your instance or at a compatible server.
- **Plugins and issue-provider registries** are fetched from configured URLs;
  check which ones the code defaults to.

## 7. Community files to rewrite

- `CONTRIBUTING.md` - your review rules, your commit conventions
- `SECURITY.md` - how to report vulnerabilities **to you**
- `.github/` - issue templates, `FUNDING.yml`, `CODEOWNERS`, PR template
- Wiki / docs links inside the app

## 8. Promotion checklist

- Remove badges for stores you are not listed on (Flathub, Snap, Microsoft
  Store, Play, F-Droid, App Store) from the README; add your own.
- Screenshots and the demo GIF: reuse the code, not the upstream's marketing
  assets, and make sure no upstream logo or account name is visible.
- Write your own release notes and pick a versioning scheme. Keep the upstream
  commit hash you synced from in each release note - it is the only honest way to
  say "this build contains upstream fix X".
- Say clearly what your build adds or changes relative to upstream, and where
  users should report bugs (that is the fastest way to avoid being mistaken for
  an official channel).

## 9. Staying in sync with upstream (recommended)

```bash
git remote add upstream https://github.com/super-productivity/super-productivity.git
git fetch upstream master
git merge upstream/master     # or rebase your own commits on top
```

Merge regularly: the longer you wait, the more conflicts pile up in the files
you rebrand (`package.json`, `electron-builder.yaml`, i18n, README). Keeping the
rebranding in as few files as possible - and listing them here - makes every
future merge mechanical.

## 10. What this repository already does

- `NOTICE` records the derivation, the modifications and the trademark caveat.
- `LICENSE` keeps the upstream MIT notice and appends the copyright line for
  modifications.
- Rebranded to **DSH_PlanFlow**: app id `com.dshplanflow.app`, executable
  `dsh-planflow`, window class, installer identity, i18n product name, index
  title, Linux wrapper paths.
- **User data moved** from `superProductivity` to `DSH_PlanFlow`, with a one-time
  copy on first start (`electron/legacy-user-data-migration.ts`, opt out with
  `DSH_SKIP_USER_DATA_MIGRATION=1`).
- **CI trimmed** to `.github/workflows/ci.yml` (install, main-process tests, unit
  tests) plus `docs-links.yml`; 38 inherited pipelines (stores, nightly E2E,
  wiki sync, previews, release automation) were removed.
- **README badges removed**: no store listings, no upstream social accounts; the
  page now states it is an independent copy and points at `INDEPENDENCE.md`.
- `SECURITY.md`, `CODEOWNERS`, `FUNDING.yml`, issue templates and
  `package.json` metadata point at this repository.
