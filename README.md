<img alt="Banner" src="docs/screens/banner.png"/>

**English** | [简体中文](README.zh.md)

<p align="center">
  <strong>DSH_PlanFlow — a to-do list, time tracker and daily planner for focused personal work. Private, offline-first and open source.</strong>
</p>

<p align="center">
  <a href="https://lbesson.mit-license.org"><img alt="MIT license" src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square"/></a>
</p>

> **This is an independent copy, not an official release.** DSH_PlanFlow is a
> personal working copy of [Super Productivity](https://github.com/super-productivity/super-productivity)
> (MIT, © 2018 Johannes Millan and contributors); see [NOTICE](NOTICE) for
> attribution and [INDEPENDENCE.md](INDEPENDENCE.md) for what still points at
> upstream. It publishes no installers — run it from source
> (`npm ci && npm start`, Node 22+) and report bugs
> [here](https://github.com/4478sc/DSH_PlanFlow/issues), not upstream.

<p align="center">
  <a href="https://youtu.be/_mvMXWLsL-8"><img src="docs/screens/reel.gif" alt="DSH_PlanFlow: capture a task, plan it on the schedule, then focus on it"/></a>
</p>

## :heavy_check_mark: Features

- **Keep organized and focused!** Plan and categorize your tasks using sub-tasks, projects and tags and color code them as needed.
- **Plan ahead** with the **planner** and see your day laid out on the **schedule** timeline, next to your calendar events.
- Sort tasks visually on **boards**, like the built-in **Kanban** and **Eisenhower Matrix**, or build your own.
- Use **timeboxing** and **track your time**. Create time sheets and work summaries in a breeze to easily export them to your company's time tracking system.
- Helps you to **establish healthy & productive habits**:
  - A **break reminder** reminds you when it's time to step away.
  - The **anti-procrastination feature** helps you gain perspective when you really need to.
  - Need some extra focus? **Focus mode** offers **Pomodoro**, **Flowtime** and **countdown** sessions.
  - **Collect personal metrics** to see, which of your work routines need adjustments.
- Integrate with **Jira**, **Trello**, **GitHub**, **GitLab**, **Gitea**, **OpenProject**, **Linear**, **ClickUp**, **Redmine**, **Nextcloud Deck** and **Azure DevOps**. Auto import tasks assigned to you, plan the details locally, automatically create work logs, and get notified immediately, when something changes.
- Basic **CalDAV** integration.
- Back up and synchronize your data across multiple devices with **SuperSync**, **Dropbox** and **WebDAV** support. SuperSync is our own sync service, end-to-end encrypted with a password only you hold, which you can also [host yourself](https://github.com/super-productivity/super-productivity/tree/master/packages/super-sync-server).
- Attach context information to tasks and projects. Create **notes**, attach **files** or create **project-level bookmarks** for links, files, and even commands.
- Super Productivity **respects your privacy** and **does NOT collect any data**. No account or registration is required. **You decide where you store your data!**
- Extend and restyle the app with **[plugins](https://github.com/super-productivity/super-productivity/wiki/2.15-Develop-a-Plugin)** and **[custom themes](https://github.com/super-productivity/super-productivity/wiki/3.09-Theming)**.
- Runs on **Linux**, **macOS**, **Windows**, **Android**, **iOS** and in the **browser**.
- It's **free** and **open source** and always will be.

And much more!

> [!NOTE]
> The web version has some limitations: See the **[Web App vs Desktop comparison](https://github.com/super-productivity/super-productivity/wiki/3.05-Web-App-vs-Desktop)** for more details.

## :book: Documentation and Guides

<!-- Getting Started -->
<h3>Getting Started</h3>
<ul>
  <li><a href="https://dev.to/johannesjo/getting-started-with-super-productivity-2791">Getting started guide</a> (article)</li>
  <li><a href="https://www.youtube.com/watch?v=VoF2_RSdNXA">Video walkthrough</a> (YouTube)</li>
  <li><a href="https://dev.to/johannesjo/the-prioritising-scheme-how-to-eat-the-frog-with-super-productivity-mlk">Eat the frog prioritizing scheme</a></li>
</ul>
<p><strong>Starting Point in Wiki:</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/1.01-First-Steps">First steps</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.00-Reference">Reference</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.00-How_To">How-To</a>
</p>
<p><strong>Productivity Tips:</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.03-Keyboard-Shortcuts">Keyboard Shortcuts</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.04-Short-Syntax">Short Syntax</a>
</p>
<p><strong>Need Help?</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/discussions">Visit the discussions page</a>
</p>
<p>See the bottom of the README for more information on the documentation.</p>

<!-- Advanced Topics -->
<h3>Advanced Topics</h3>
<p>Here are some other topics covered in the
  <a href="https://github.com/super-productivity/super-productivity/wiki">official wiki</a>:
</p>
<p><strong>Development:</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.11-Run-the-Development-Server">Run dev server</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.12-Package-the-App">Package the app</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.14-Build-for-Android">Build for Android</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.13-Run-with-Docker">Run with Docker</a>
</p>
<p><strong>Data Management:</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/4.23-Managing-Your-Data">User Data</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.07-Issue-Integration-Comparison">Issue Providers</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.08-Sync-Integration-Comparison">Sync Providers</a>
</p>
<p><strong>Customization:</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.15-Develop-a-Plugin">Plugins</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.09-Theming">Themes</a>
</p>
<p><strong>APIs:</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.01-API#1-sync-server-rest-api">Sync Server</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.01-API#2-plugin-api">Plugins</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.01-API#3-local-rest-api">REST</a>
</p>

## Community

The development of Super Productivity is driven by a wonderful community of users and contributors. Thank you all so much for your support!

<p>
  :eyes:
  <a href='https://github.com/super-productivity/awesome-super-productivity'>
    Check out our awesome curated list of community-created resources about Super Productivity
  </a>
</p>

### :hearts: Contributing

You don't have to be a programmer to help: spread the word, [answer questions](https://github.com/super-productivity/super-productivity/discussions), [report bugs](https://github.com/super-productivity/super-productivity/issues/new), [contribute translations](https://github.com/super-productivity/super-productivity/wiki/2.18-Contribute-Translations), build [plugins](https://github.com/super-productivity/super-productivity/wiki/2.15-Develop-a-Plugin) or [themes](https://github.com/super-productivity/super-productivity/wiki/3.09-Theming), or [sponsor the project](https://github.com/sponsors/johannesjo).

Before opening a pull request, read [CONTRIBUTING.md](CONTRIBUTING.md) and follow the [commit message format](.github/CONTRIBUTING.md#commit-message-format).

[//]: # '[![inlang status badge](https://badge.inlang.com/?url=github.com/super-productivity/super-productivity)](https://fink.inlang.com/github.com/super-productivity/super-productivity?ref=badge)'
[//]: #
[//]: # 'You can use the Fink Localization Editor to edit, lint, and add translations for different languages. [Contribute via fink Guide](https://inlang.com/g/6ddyhpoi).'

### Special Thanks to our Sponsors

A big thank you to all our sponsors!

- **[SignPath.io](https://signpath.io?utm_source=foundation&utm_medium=github&utm_campaign=super-productivity)**: free code signing for our Windows binaries, with a certificate by [SignPath Foundation](https://signpath.org?utm_source=foundation&utm_medium=github&utm_campaign=super-productivity).
- **[Blacksmith](https://www.blacksmith.sh)**: covers all our CI runner minutes for GitHub Actions.

  <a href="https://www.blacksmith.sh"><img alt="CI powered by Blacksmith" src="docs/screens/blacksmith-powered-wob.png" height="60"/></a>

_(If you are, intend to or have been a sponsor and want to be shown here, [please let me know](mailto:contact@super-productivity.com)!)_

## Documentation: Manual versus Automated

There are two wikis: the official one hosted by GitHub and the autonomously generated variant using [DeepWiki.com](https://deepwiki.com/super-productivity/super-productivity). The manually curated version is a more stable and approachable resource designed to help you understand the app from a more human-focused perspective whereas DeepWiki is optimized for explaining the code itself with little regard for context beyond that.

<!-- Official Wiki -->
<h3>Official Wiki</h3>
<p>
  It is preferable to maintain local documentation rather than rely on an external service.
  It is also preferable that the documentation is updated in tandem with the code changes as
  demonstrated in
  <a href="https://github.com/super-productivity/super-productivity/commit/7a51d4b06e414fdcc48e4999197a93eee9cd09da">this commit</a>.
</p>
<p>
  Changes to files within <code>./docs/wiki</code> are linted in CI before being automatically
  sync'd to the repository's official Wiki hosted by GitHub.
</p>
<p>
  Migrating to Docusaurus is a long-term goal once the content and structure of the wiki has matured
  and the remaining "legacy docs" have either been reworked or removed. There are some automations in development to help reduce the difference between the published docs and the state of the code while retaining a human-in-the-loop.
</p>

<!-- DeepWiki -->
<h3>DeepWiki.com</h3>
<p>
  If you have very specific questions about how the code works or why a bug might be producing
  a particular message it might be useful to
  <a href="https://deepwiki.com/super-productivity/super-productivity">
    <img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki">
  </a>. It can help "cite your sources" when discussing functionality and code that you don't fully
  understand as part of feature requests or bug reports.
</p>
<p>
  This automated
  <a href="https://diataxis.fr/reference/#reference">reference</a>
  does come with some significant drawbacks:
</p>
<ol>
  <li><strong>Intent:</strong> Describes what code does, not why decisions or tradeoffs were made.</li>
  <li><strong>Staleness:</strong> Will *always* lag behind the code.</li>
  <li><strong>Code-Focused:</strong> Does not provide guides or conceptual explanations.</li>
  <li><strong>Cost:</strong> Potential future cost and higher resource usage than static docs.</li>
</ol>
