<img alt="Banner" src="docs/screens/banner.png"/>

[English](README.md) | **简体中文**

<p align="center">
  <strong>DSH_PlanFlow：面向专注型个人工作的待办清单、时间追踪与每日规划器。隐私优先、离线可用、开源。</strong>
</p>

<p align="center">
  <a href="https://lbesson.mit-license.org"><img alt="MIT license" src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square"/></a>
</p>

> 本文档是 [super-productivity/super-productivity](https://github.com/super-productivity/super-productivity) 英文 README 的简体中文翻译。
> 原项目与本文档均以 **MIT 许可证**发布，版权归原作者所有（Copyright © 2018 Johannes Millan，见 [LICENSE](LICENSE) 与 [NOTICE](NOTICE)）。
> 译文仅供方便阅读；如与英文版 [README.md](README.md) 有出入，一律以英文版为准。

## 本仓库与上游的差异

本仓库（DSH_PlanFlow）是 Super Productivity 的**个人工作副本**，不是官方仓库，也不发布任何安装包。

| 项 | 上游 [super-productivity/super-productivity](https://github.com/super-productivity/super-productivity) | 本仓库 |
|---|---|---|
| 定位 | 官方项目，发布各平台安装包 | 个人使用与本地实验 |
| 代码 | 持续开发中 | 从上游 `f68f812`（2026-11-06）导入，可能滞后若干提交 |
| 文档 | 英文 README | 额外提供本文 [README.zh.md](README.zh.md) 与 [docs/README.zh.md](docs/README.zh.md) |
| 安装包 | Flathub / Snap / Microsoft Store / Play / F-Droid / App Store | 不提供，需从源码运行（`npm ci && npm start`，Node 22+） |
| 问题反馈 | 上游 issue 或 discussions | 请提到[本仓库 issues](https://github.com/4478sc/DSH_PlanFlow/issues) |
| 应用 ID / 名称 | Super Productivity / com.super-productivity.app | **DSH_PlanFlow** / com.dshplanflow.app |
| 用户数据目录 | `superProductivity` | `DSH_PlanFlow`（首次启动自动迁移旧数据） |

- **下载与使用**：本仓库不提供安装包，请从源码构建运行；上游的[官方下载渠道](https://super-productivity.com/download/)安装的是原版 Super Productivity。
- **与上游同步**：本仓库可能落后上游若干提交，功能与行为以**上游为准**，但本仓库的产品名、应用 ID 与用户数据目录已独立。
- **许可与署名**：代码与文档均以 MIT 许可证发布，版权归原作者所有（见 [LICENSE](LICENSE)）；中英文内容如有出入，以英文 [README.md](README.md) 为准。
- **独立运维**：改名、应用 ID、更新源、商店与 CI 的解绑清单见 [INDEPENDENCE.md](INDEPENDENCE.md)，版权与出处声明见 [NOTICE](NOTICE)。

## :heavy_check_mark: 功能特性

- **保持条理、保持专注！** 用子任务、项目和标签规划与分类任务，并可自由配色。
- **提前规划**：用**规划表（Planner）**展望未来，在**日程（Schedule）**时间线上把一天铺开，并与日历事件并排查看。
- 在**看板**上可视化排序任务，内置 **Kanban** 与 **艾森豪威尔矩阵**，也可以自定义。
- 用**时间盒（timeboxing）**安排工作并**追踪时间**。轻松生成工时表与工作总结，导出到你公司的工时系统。
- 帮助你**养成健康且高效的习惯**：
  - **休息提醒**会在该起身走走时提示你。
  - **防拖延**功能在你真正需要时帮你换个视角。
  - 需要更专注？**专注模式**提供 **Pomodoro（番茄钟）**、**Flowtime** 与**倒计时**会话。
  - **收集个人指标**，看清哪些工作习惯需要调整。
- 可集成 **Jira**、**Trello**、**GitHub**、**GitLab**、**Gitea**、**OpenProject**、**Linear**、**ClickUp**、**Redmine**、**Nextcloud Deck** 与 **Azure DevOps**。自动导入分配给你的任务、在本地规划细节、自动生成工时记录，并在发生变化时立刻收到通知。
- 基础的 **CalDAV** 集成。
- 通过 **SuperSync**、**Dropbox** 和 **WebDAV** 在多台设备间备份与同步数据。SuperSync 是官方提供的同步服务，端到端加密且密码只在你手里，也可以[自行搭建](https://github.com/super-productivity/super-productivity/tree/master/packages/super-sync-server)。
- 为任务和项目附加上下文信息：创建**笔记**、附加**文件**，或建立项目级**书签**（链接、文件，甚至命令）。
- Super Productivity **尊重你的隐私**，**不收集任何数据**。无需账号、无需注册。**数据存在哪里由你决定！**
- 用**[插件](https://github.com/super-productivity/super-productivity/wiki/2.15-Develop-a-Plugin)**与**[自定义主题](https://github.com/super-productivity/super-productivity/wiki/3.09-Theming)**扩展和换肤。
- 支持 **Linux**、**macOS**、**Windows**、**Android**、**iOS** 以及**浏览器**。
- **免费**且**开源**，并且永远如此。

还有更多功能！

> [!NOTE]
> 网页版存在一些限制：详见 **[Web 版与桌面版对比](https://github.com/super-productivity/super-productivity/wiki/3.05-Web-App-vs-Desktop)**。

## :book: 文档与指南

<!-- Getting Started -->
<h3>快速上手</h3>
<ul>
  <li><a href="https://dev.to/johannesjo/getting-started-with-super-productivity-2791">上手指南</a>（文章）</li>
  <li><a href="https://www.youtube.com/watch?v=VoF2_RSdNXA">视频演示</a>（YouTube）</li>
  <li><a href="https://dev.to/johannesjo/the-prioritising-scheme-how-to-eat-the-frog-with-super-productivity-mlk">“吃掉那只青蛙”优先级方法</a></li>
</ul>
<p><strong>Wiki 起点：</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/1.01-First-Steps">第一步</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.00-Reference">参考手册</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.00-How_To">操作指南</a>
</p>
<p><strong>效率技巧：</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.03-Keyboard-Shortcuts">键盘快捷键</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.04-Short-Syntax">简短语法</a>
</p>
<p><strong>需要帮助？</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/discussions">访问讨论区</a>
</p>
<p>更多文档信息见本 README 末尾。</p>

<!-- Advanced Topics -->
<h3>进阶主题</h3>
<p>
  <a href="https://github.com/super-productivity/super-productivity/wiki">官方 Wiki</a>还涵盖以下主题：
</p>
<p><strong>开发：</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.11-Run-the-Development-Server">运行开发服务器</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.12-Package-the-App">打包应用</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.14-Build-for-Android">构建 Android 版</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.13-Run-with-Docker">用 Docker 运行</a>
</p>
<p><strong>数据管理：</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/4.23-Managing-Your-Data">用户数据</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.07-Issue-Integration-Comparison">任务来源对比</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.08-Sync-Integration-Comparison">同步方案对比</a>
</p>
<p><strong>自定义：</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.15-Develop-a-Plugin">插件</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.09-Theming">主题</a>
</p>
<p><strong>API：</strong><br>
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.01-API#1-sync-server-rest-api">同步服务端</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.01-API#2-plugin-api">插件</a> •
  <a href="https://github.com/super-productivity/super-productivity/wiki/3.01-API#3-local-rest-api">本地 REST</a>
</p>

## 社区

Super Productivity 的开发由出色的用户与贡献者社区推动。非常感谢大家的支持！

<p>
  :eyes:
  <a href='https://github.com/super-productivity/awesome-super-productivity'>
    看看我们精选的社区资源列表
  </a>
</p>

### :hearts: 参与贡献

你不需要会编程也能帮忙：帮忙宣传、[回答问题](https://github.com/super-productivity/super-productivity/discussions)、[报告问题](https://github.com/super-productivity/super-productivity/issues/new)、[贡献翻译](https://github.com/super-productivity/super-productivity/wiki/2.18-Contribute-Translations)、开发[插件](https://github.com/super-productivity/super-productivity/wiki/2.15-Develop-a-Plugin)或[主题](https://github.com/super-productivity/super-productivity/wiki/3.09-Theming)，或者[赞助这个项目](https://github.com/sponsors/johannesjo)。

提交 Pull Request 之前，请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，并遵循[提交信息格式](.github/CONTRIBUTING.md#commit-message-format)。

[//]: # '[![inlang status badge](https://badge.inlang.com/?url=github.com/super-productivity/super-productivity)](https://fink.inlang.com/github.com/super-productivity/super-productivity?ref=badge)'
[//]: #
[//]: # 'You can use the Fink Localization Editor to edit, lint, and add translations for different languages. [Contribute via fink Guide](https://inlang.com/g6ddyhpoi).'

### 特别感谢我们的赞助商

感谢所有赞助商！

- **[SignPath.io](https://signpath.io?utm_source=foundation&utm_medium=github&utm_campaign=super-productivity)**：为我们的 Windows 二进制文件提供免费的代码签名，证书由 [SignPath Foundation](https://signpath.org?utm_source=foundation&utm_medium=github&utm_campaign=super-productivity) 签发。
- **[Blacksmith](https://www.blacksmith.sh)**：承担了我们 GitHub Actions 的全部 CI 运行时长。

  <a href="https://www.blacksmith.sh"><img alt="CI powered by Blacksmith" src="docs/screens/blacksmith-powered-wob.png" height="60"/></a>

_(如果你已经是、打算成为或曾经是赞助商，并希望展示在这里，[请告诉我](mailto:contact@super-productivity.com)！)_

## 文档：人工维护与自动生成

这里有两种文档：GitHub 上托管的官方 Wiki，以及用 [DeepWiki.com](https://deepwiki.com/super-productivity/super-productivity) 自动生成的版本。人工维护的版本更稳定、更易读，面向的是“人如何理解并使用这个应用”；而 DeepWiki 专注于讲解代码本身，基本不提供上下文。

<!-- Official Wiki -->
<h3>官方 Wiki</h3>
<p>
  相比依赖外部服务，我们更倾向于维护本地文档；
  也倾向于让文档与代码改动同步更新，例如
  <a href="https://github.com/super-productivity/super-productivity/commit/7a51d4b06e414fdcc48e4999197a93eee9cd09da">这次提交</a>。
</p>
<p>
  <code>./docs/wiki</code> 下文件的改动会先在 CI 里做检查，然后自动同步到本仓库由 GitHub 托管的官方 Wiki。
</p>
<p>
  长期目标是在 Wiki 的内容与结构成熟、遗留文档被重构或移除之后迁移到 Docusaurus。目前正在开发一些自动化手段，以缩小“已发布文档”与“代码现状”之间的差距，同时保留人工把关环节。
</p>

<!-- DeepWiki -->
<h3>DeepWiki.com</h3>
<p>
  如果你对代码如何运作、或某个 bug 为何产生特定信息有非常具体的问题，可以问
  <a href="https://deepwiki.com/super-productivity/super-productivity">
    <img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki">
  </a>。在讨论你尚未完全理解的功能与代码、或在写功能请求与 bug 报告时，它能帮你“给出出处”。
</p>
<p>
  这份自动生成的
  <a href="https://diataxis.fr/reference/#reference">参考</a>
  也有一些明显缺点：
</p>
<ol>
  <li><strong>意图缺失：</strong>它会说明代码做了什么，但不解释为什么这样取舍。</li>
  <li><strong>时效性：</strong>它*总是*滞后于代码。</li>
  <li><strong>只看代码：</strong>它不提供指南或概念性说明。</li>
  <li><strong>成本：</strong>未来可能产生费用，且资源占用高于静态文档。</li>
</ol>
