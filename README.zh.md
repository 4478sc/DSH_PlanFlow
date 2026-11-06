<a href="https://super-productivity.com/"><img alt="Banner" src="docs/screens/banner.png"/></a>

<p align="center">
  <strong>English</strong> | <a href="README.zh.md">简体中文</a>
</p>

> 本文档是 [super-productivity/super-productivity](https://github.com/super-productivity/super-productivity) 英文 README 的简体中文翻译。
> 原项目与本文档均以 **MIT 许可证**发布，版权归原作者所有（Copyright © 2018 Johannes Millan，见 [LICENSE](LICENSE)）。
> 译文仅供方便阅读；如与英文版 [README.md](README.md) 有出入，一律以英文版为准。

## 本仓库与上游的差异

本仓库（DSH_PlanFlow）是 Super Productivity 的**个人工作副本**，不是官方仓库，也不发布任何安装包。

| 项 | 上游 [super-productivity/super-productivity](https://github.com/super-productivity/super-productivity) | 本仓库 |
|---|---|---|
| 定位 | 官方项目，发布各平台安装包 | 个人使用与本地实验 |
| 代码 | 持续开发中 | 从上游 `f68f812`（2026-11-06）导入，可能滞后若干提交 |
| 文档 | 英文 README | 额外提供本文 [README.zh.md](README.zh.md) 与 [docs/README.zh.md](docs/README.zh.md) |
| 安装包 | Flathub / Snap / Microsoft Store / Play / F-Droid / App Store | 不提供 |
| 问题反馈 | 提 issue 或到 discussions 讨论 | 仅作个人记录，请勿在此报告 bug |

- **下载与使用**：请通过上游的[官方下载渠道](https://super-productivity.com/download/)获取，本仓库的 release 页面不会有可用安装包。
- **与上游同步**：本仓库可能落后上游若干提交，功能、行为与 bug 一律**以上游为准**。
- **许可与署名**：代码与文档均以 MIT 许可证发布，版权归原作者所有（见 [LICENSE](LICENSE)）；中英文内容如有出入，以英文 [README.md](README.md) 为准。
- **独立运维**：改名、应用 ID、更新源、商店与 CI 的解绑清单见 [INDEPENDENCE.md](INDEPENDENCE.md)，版权与出处声明见 [NOTICE](NOTICE)。

<p align="center">
  <strong>
    面向专注型个人工作的待办清单、时间追踪与每日规划器。隐私优先、离线可用、开源。
  </strong>
</p>

<p align="center">
  :globe_with_meridians: <a href="https://app.super-productivity.com">打开网页版</a> 或 :computer: <a href="https://super-productivity.com/download/">下载安装</a>
</p>

<br/>

<!-- The <a> and <img> elements are intentionally made without space.
     Because of the extra whitespace characters in <a>, makes blue underline lines appear for them.
     Please do not change this formatting, so as not to make them.
-->
<p align="center">
  <a href="https://lbesson.mit-license.org"><img alt="MIT license" src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square"/></a>
  &nbsp;
  <a href="https://github.com/super-productivity/super-productivity/discussions"><img alt="GitHub Discussions" src="https://img.shields.io/badge/Community-Discussions-blue?style=flat-square&logo=github"/></a>
</p>

<p align="center">
  <a href="https://www.reddit.com/r/superProductivity/"><img alt="Reddit Community" src="https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=Reddit&logoColor=white" width="85"/></a>
  &nbsp;
  <a href="https://mastodon.social/@superproductivity"><img alt="Super Productivity on Mastodon" src="https://img.shields.io/badge/-MASTODON-%232B90D9?style=for-the-badge&logo=mastodon&logoColor=white" width="105"/></a>
  &nbsp;
  <a href="https://x.com/intent/post?text=Super%20Productivity%20%20https%3A%2F%2Fsuper-productivity.com"><img alt="Tweet" src="https://img.shields.io/badge/TWEET-%23000000.svg?style=for-the-badge&logo=X" width="90"/></a>
</p>

<p align="center">
  <a href="https://youtu.be/_mvMXWLsL-8"><img src="docs/screens/reel.gif" alt="Super Productivity：记录任务、在日程上规划、然后专注执行"/></a>
</p>

## :computer: 下载与安装

<p align="center">
  <a href='https://flathub.org/apps/com.super_productivity.SuperProductivity' target="_blank"><img alt='Get it on Flathub' src='https://flathub.org/api/badge?locale=en' height="30"/></a>
  <a href="https://snapcraft.io/superproductivity" target="_blank"><img alt="Get it from the Snap Store" src="https://snapcraft.io/static/images/badges/en/snap-store-black.svg" height="30"/></a>
  <a href='//www.microsoft.com/store/apps/9NHFVG8361TW?cid=storebadge&ocid=badge' target="_blank"><img src='https://developer.microsoft.com/store/badges/images/English_get-it-from-MS.png' alt='Get it from Microsoft Store' height="30"/></a>
  <a href='https://play.google.com/store/apps/details?id=com.superproductivity.superproductivity&amp;referrer=utm_source%3Dgithub%26utm_medium%3Downed%26utm_campaign%3Dreadme' target="_blank"><img src='docs/screens/google-play-badge.svg' alt='Play Store Badge' height="30"/></a>
  <a href='//f-droid.org/en/packages/com.superproductivity.superproductivity' target="_blank"><img src='https://f-droid.org/assets/fdroid-logo-text_S0MUfk_FsnAYL7n2MQye-34IoSNm6QM6xYjDnMqkufo=.svg' alt="F-Droid Badge" height="30"/></a>
  <a href='https://apps.obtainium.imranr.dev/redirect?r=obtainium%3A%2F%2Fadd%2Fhttps%3A%2F%2Fgithub.com%2Fsuper-productivity%2Fsuper-productivity%2Freleases'><img src='https://raw.githubusercontent.com/ImranR98/Obtainium/main/assets/graphics/badge_obtainium.png' alt='Get it on Obtainium' height="30"/></a>
  <a href='//apps.apple.com/app/super-productivity/id1482572463?l=en' target="_blank"><img src='docs/screens/app-store-badge.svg' alt='App Store Badge' height="30"/></a>
</p>

<p align="center">
  <strong>全部下载方式、各平台安装包与平台专属说明，请看
    <a href="https://github.com/super-productivity/super-productivity/wiki/2.01-Downloads-and-Install" target="_blank">
      Wiki
    </a>
  </strong><br/>
  <a href="https://github.com/super-productivity/super-productivity/wiki/2.01-Downloads-and-Install" target="_blank">
    <img
      src="docs/screens/get-it-on-github.webp"
      alt="从 GitHub 获取"
      height="120"
    />
  </a>
</p>

<hr>

<p align="center">
  <a href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi" target="_blank">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"
      alt="Ukraine Flag"
      height="120"
    /><br/>
    <strong>乌克兰人道主义援助</strong><br/>
    可通过乌克兰国家银行官方账户支持人道主义救援。
  </a>
</p>

<hr>

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
