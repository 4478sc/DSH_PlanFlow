# 维护者文档

本目录包含用户文档、维护者操作手册、架构指引、进行中的计划与研究记录。它们的权威性不同：计划或研究笔记不能推翻当前代码、测试或已接受的决策。

**English** | [简体中文](README.zh.md)

## 长期维护的指南

当它们描述的行为或流程发生变化时，请同步更新：

- [仓库内容地图](repository-map.md)：任务关键词 → 代码入口、相关约束与针对性测试；从这里开始决定要读什么
- [`src/app` 分层地图](../src/app/README.md)：代码放在哪里、依赖朝哪个方向、哪些方向由 lint 强制
- [文档指南](documentation-guide.md)
- [开发环境变量](ENV_SETUP.md)
- [插件开发](plugin-development.md)
- [新增任务来源集成](add-new-integration.md)
- [功能与 PR 评审指南](feature-review-guide.md)
- [市场定位](market/README.md)：SP 必须在哪些方面做到最好、竞品集合与每月刷新；其中的[评分卡](market/scorecard.md)是带日期的快照，由刷新流程更新
- [样式指南](styling-guide.md)与[主题契约](theming-contract.md)
- [Android 边到边显示与键盘行为](android-edge-to-edge-keyboard.md)
- [Android 主屏幕小组件](android-home-screen-widget.md)
- [发布与分发操作手册](release-and-publishing.md)
- [Apple 发布自动化](apple-release-automation.md)
- [翻译指南](TRANSLATING.md)与 [i18n 脚本用法](i18n-script-usage.md)

面向用户的文档位于 [`wiki/`](wiki/)。同步与操作日志架构位于 [`sync-and-op-log/`](sync-and-op-log/)。

## 决策记录

已接受的决策描述了那些在实现工作完成之后依然成立的约束：

[`../ARCHITECTURE-DECISIONS.md`](../ARCHITECTURE-DECISIONS.md) 是所有这些决策的索引。编号记录直接内联在其中，而[记录在别处的决策](../ARCHITECTURE-DECISIONS.md#decisions-recorded-elsewhere)表指向那些单独成文或作为贡献者规则存在的决策——例如[SuperSync 静态数据加密](supersync-encryption-at-rest-decision.md)。即使决策写在别的文件里，也必须在索引中列出。

每条决策都要写明状态与日期、最终选择的结果、选择它的原因，以及什么情况会促使重新审视。被取代的决策保留为历史，但必须链接到替代它的决策，并保留原编号。

## 进行中的计划

[`plans/`](plans/) 与 [`long-term-plans/`](long-term-plans/) 存放的是提案，不是当前行为。每个进行中的计划都应以以下内容开头：

- 状态（`Proposed`、`Planned`、`In progress` 或 `Deferred`）；
- 负责人以及跟踪用的 issue 或 pull request；
- 最近一次对照代码核验的日期；
- 完成或移除的条件。

描述用户可感知交互的计划还需要一节 **Prior art（先行方案）** → 见[功能评审指南 § 先行方案](feature-review-guide.md#prior-art)。

当实现落地后，把长期有效的契约或限制迁移到维护中的指南、包 README、代码注释或决策记录里，然后删除已完成的计划。不要把交接笔记或“后续步骤”文档当作长期文档留下来。

## 研究与审计

[`research/`](research/) 记录在某个时间点收集的证据。除非维护中的指南或已接受的决策采纳了它的结论，否则它不具规范性。研究记录应写明快照日期与跟踪 issue。大型审计产物可以在结论归类期间保留，但已确认的工作应转入 issue，长期有效的安全约束应转入维护中的文档。

当研究结论已经迁移到维护中的指南、决策记录或已跟踪的 issue 后，请删除该研究笔记。Git 历史仍可找回它。

针对过去某个提交得出的结论会随时间悄悄失效，所以要写明什么情况下它会不成立：任何关于“哪些版本包含某个改动”的断言，都必须用 `git tag --contains` 重新推导，绝不能凭记忆，因为下一个 tag 就可能在不改任何代码的情况下把它反转。

- [重复事件实现计划](research/recurring-events-implementation-plan.md)
- [Snap Wayland GPU 根因与已发布的修复](research/snap-wayland-gpu-fix-research.md)
  —— 之所以在其研究生命周期之后仍然保留，是因为 `electron-builder.yaml`、
  `tools/afterPack.js` 和 `build/linux/snap-wrapper.sh` 都引用它来说明其防御性代码为何存在

## 评审清单

改动行为或运维流程时：

1. 在同一次改动中更新相关的维护中指南。
2. 对照代码仓库核实命令、路径、API 名称、workflow 触发器与 secret 名称，而不是从旧计划里复制。
3. 从本索引、某个包的 README 或另一份权威文档链接到新文档，确保它可被发现。
4. 移除或标记那些与新事实相矛盾的过期文档。
5. 绝不要在文档里放凭据、用户数据或生产环境专用的密钥值。
6. 运行 `npm run docs:check-links`。
