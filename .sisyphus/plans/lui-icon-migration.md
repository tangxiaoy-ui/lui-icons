# LUI-icon 品牌迁移计划

## TL;DR

> **目标**: 将项目从 "Lucide" 完全迁移到 "LUI-icon" 品牌
>
> **范围**: 12 个包 + 3 个内部工具 + 文档站点 + 构建配置
>
> **影响文件**: 11,213 处匹配，4,275 个文件
>
> **交付物**:
>
> - 所有包名统一为 `lui-icon-*` / `@lui-icon/*`
> - 所有 CSS 类名统一为 `lui-icon-*`
> - 所有 API 统一为 LUI 命名空间
> - 完整文档替换
>
> **预估工作量**: Large (大型)
> **并行执行**: YES - 3 个波次
> **关键路径**: 内部工具 → 核心包 → 框架包 → 文档

---

## 上下文

### 原始需求

用户要求彻查项目中遗留的 Lucide 相关内容，并统一替换为 LUI-icon 品牌。

### 现状调查结果

- **根目录**: 已更名为 "Tubiao"
- **子包**: 所有 12 个包仍使用 `lucide-*` 命名
- **内部工具**: 仍使用 `@lucide/*` 命名空间
- **代码**: 11,213 处 "lucide" 匹配
- **CSS 类名**: 硬编码 `lucide-*` 类名生成
- **文档**: 完整的 Lucide 品牌文档站点

### 用户决策记录

| 决策项      | 用户选择                      | 备注                                        |
| ----------- | ----------------------------- | ------------------------------------------- |
| GitHub 仓库 | `https://github.com/lui-icon` | 将更新所有 package.json 中的 repository URL |
| 文档域名    | 暂不处理                      | 简化任务 18，仅做基本替换，不配置新域名     |
| 向后兼容    | 选项 A - 纯迁移               | 不保留旧包名兼容层，完全替换                |

### 品牌映射关系

| 原名称                 | 新名称                   | 类型              |
| ---------------------- | ------------------------ | ----------------- |
| lucide                 | lui-icon                 | 核心包            |
| lucide-react           | lui-icon-react           | React 包          |
| lucide-vue-next        | lui-icon-vue-next        | Vue 3 包          |
| lucide-vue             | lui-icon-vue             | Vue 2 包 (legacy) |
| lucide-svelte          | @lui-icon/svelte         | Svelte 包         |
| lucide-angular         | lui-icon-angular         | Angular 包        |
| lucide-solid           | lui-icon-solid           | SolidJS 包        |
| lucide-static          | lui-icon-static          | 静态资源包        |
| lucide-react-native    | lui-icon-react-native    | React Native 包   |
| lucide-preact          | lui-icon-preact          | Preact 包         |
| @lucide/astro          | @lui-icon/astro          | Astro 包          |
| @lucide/shared         | @lui-icon/shared         | 共享工具          |
| @lucide/build-icons    | @lui-icon/build-icons    | 构建工具          |
| @lucide/helpers        | @lui-icon/helpers        | 辅助工具          |
| @lucide/rollup-plugins | @lui-icon/rollup-plugins | Rollup 插件       |

---

## 工作目标

### 核心目标

将所有 Lucide 品牌标识统一替换为 LUI-icon，包括包名、API、CSS 类名和文档。

### 具体交付物

1. 重命名所有 `packages/lucide-*` 目录为 `packages/lui-icon-*`
2. 更新所有 `package.json` 中的 `name` 字段
3. 替换所有 CSS 类名生成逻辑（`lucide-*` → `lui-icon-*`）
4. 重命名核心函数（`createLucideIcon` → `createLUIIcon`）
5. 重命名类型（`LucideProps` → `LUIIconProps`）
6. 更新所有内部依赖引用（`@lucide/*` → `@lui-icon/*`）
7. 更新所有导入语句
8. 替换或更新文档站点
9. 更新构建脚本和 CI/CD 配置
10. 更新测试文件和快照

### 完成标准

- [ ] `grep -r "lucide" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.json" .` 返回 0 结果（排除 node_modules）
- [ ] 所有包名以 `lui-icon` 或 `@lui-icon` 开头
- [ ] 所有 CSS 类名以 `lui-icon` 开头
- [ ] 所有测试通过
- [ ] 所有包构建成功
- [ ] 文档站点正常运行

### 必须包含

- 所有 12 个框架包的迁移
- 所有 3 个内部工具包的迁移
- CSS 类名系统的完整替换
- 文档站点的品牌替换

### 必须不包含（边界）

- 不修改 icons/ 目录下的 SVG 文件名（保持向后兼容）
- 不修改功能逻辑（纯品牌替换）
- 不引入新功能

---

## 验证策略

### 测试基础设施评估

- **基础设施存在**: YES (Vitest + @testing-library)
- **测试框架**: Vitest
- **策略**: Tests-after (先迁移，后更新测试)

### 自动化验证

每个任务包含可执行的验证程序：

**验证命令示例：**

```bash
# 验证包名替换
grep -r "\"name\": \"lucide" packages/*/package.json
# 预期: 无匹配

# 验证 CSS 类名
grep -r "lucide-" packages/lui-icon-*/src/createLUIIcon.ts
# 预期: 无匹配 (应为 lui-icon-*)

# 验证导入路径
grep -r "from '@lucide/" packages/
# 预期: 无匹配 (应为 @lui-icon/)
```

---

## 执行策略

### 并行执行波次

```
波次 1 (立即开始) - 基础依赖:
├── 任务 1: 迁移 @lucide/shared → @lui-icon/shared
├── 任务 2: 迁移 @lucide/helpers → @lui-icon/helpers
└── 任务 3: 迁移 @lucide/rollup-plugins → @lui-icon/rollup-plugins

波次 2 (波次 1 完成后) - 构建工具 + 核心包:
├── 任务 4: 迁移 @lucide/build-icons → @lui-icon/build-icons
├── 任务 5: 迁移 lucide → lui-icon (vanilla JS 核心)
└── 任务 6: 迁移 lucide-static → lui-icon-static

波次 3 (波次 2 完成后) - 框架包:
├── 任务 7: 迁移 lucide-react → lui-icon-react
├── 任务 8: 迁移 lucide-vue-next → lui-icon-vue-next
├── 任务 9: 迁移 lucide-vue → lui-icon-vue
├── 任务 10: 迁移 @lucide/astro → @lui-icon/astro
├── 任务 11: 迁移 lucide-svelte → @lui-icon/svelte
├── 任务 12: 迁移 lucide-angular → lui-icon-angular
├── 任务 13: 迁移 lucide-solid → lui-icon-solid
├── 任务 14: 迁移 lucide-preact → lui-icon-preact
└── 任务 15: 迁移 lucide-react-native → lui-icon-react-native

波次 4 (波次 3 完成后) - 根配置 + 文档:
├── 任务 16: 更新根 package.json 和 pnpm-workspace.yaml
├── 任务 17: 更新构建脚本和 CI/CD
└── 任务 18: 迁移或更新文档站点
```

### 依赖矩阵

| 任务                         | 依赖    | 阻塞          | 可并行   |
| ---------------------------- | ------- | ------------- | -------- |
| 1 (@lui-icon/shared)         | 无      | 2, 3, 4, 5, 6 | 2, 3     |
| 2 (@lui-icon/helpers)        | 无      | 4             | 1, 3     |
| 3 (@lui-icon/rollup-plugins) | 无      | 4             | 1, 2     |
| 4 (@lui-icon/build-icons)    | 1, 2, 3 | 5, 6          | 无       |
| 5 (lui-icon vanilla)         | 1, 4    | 7-15          | 6        |
| 6 (lui-icon-static)          | 1, 4    | 无            | 5        |
| 7-15 (框架包)                | 1, 4, 5 | 16, 17        | 互相并行 |
| 16 (根配置)                  | 全部包  | 17            | 无       |
| 17 (CI/CD)                   | 16      | 18            | 无       |
| 18 (文档)                    | 全部    | 无            | 无       |

### 关键路径

内部工具 (1-4) → 核心包 (5) → 框架包 (7-15) → 根配置 (16) → CI/CD (17) → 文档 (18)

---

## TODOs

### 波次 1: 内部工具迁移

- [x] 1. 迁移 @lucide/shared → @lui-icon/shared

  **做什么**:

  - 重命名目录 `packages/shared` → 保持（已在 @lucide 下）
  - 更新 `package.json` 中的 `name`: `@lucide/shared` → `@lui-icon/shared`
  - 更新 `package.json` 中的 `repository` URL
  - 更新 `package.json` 中的 `homepage`/`bugs` 字段
  - 更新 `README.md` 中的品牌信息
  - 更新所有内部引用

  **必须不做**:

  - 不修改功能代码（mergeClasses, toKebabCase 等）
  - 不改变 API 签名

  **推荐 Agent 配置**:

  - **分类**: `quick`
  - **技能**: 无需特殊技能

  **并行化**:

  - **可并行**: YES
  - **并行组**: 波次 1
  - **阻塞**: 任务 2, 3, 4, 5, 6
  - **被阻塞**: 无

  **引用**:

  - `packages/shared/package.json` - 主要配置
  - `packages/shared/src/` - 源代码（需检查字符串）
  - `packages/shared/README.md` - 文档

  **验收标准**:

  ```bash
  # 验证
  cat packages/shared/package.json | grep '"name"'
  # 预期: "name": "@lui-icon/shared"

  grep -r "@lucide/shared" packages/shared/
  # 预期: 无匹配
  ```

  **提交**: YES

  - 消息: `refactor(shared): rename @lucide/shared to @lui-icon/shared`
  - 文件: `packages/shared/package.json`, `packages/shared/README.md`

- [x] 2. 迁移 @lucide/helpers → @lui-icon/helpers

  **做什么**:

  - 更新 `package.json` 中的 `name`: `@lucide/helpers` → `@lui-icon/helpers`
  - 更新所有内部字符串引用
  - 更新 `README.md`

  **推荐 Agent 配置**:

  - **分类**: `quick`

  **并行化**:

  - **可并行**: YES
  - **并行组**: 波次 1
  - **阻塞**: 任务 4

  **引用**:

  - `tools/build-helpers/package.json`
  - `tools/build-helpers/src/`

  **验收标准**:

  ```bash
  cat tools/build-helpers/package.json | grep '"name"'
  # 预期: "name": "@lui-icon/helpers"
  ```

  **提交**: YES

  - 消息: `refactor(helpers): rename @lucide/helpers to @lui-icon/helpers`

- [x] 3. 迁移 @lucide/rollup-plugins → @lui-icon/rollup-plugins

  **做什么**:

  - 更新 `package.json` 中的 `name`
  - 更新 `plugins.js` 中的正则匹配: `/^@lucide\/.*$/` → `/^@lui-icon\/.*$/`
  - 更新 `README.md`

  **推荐 Agent 配置**:

  - **分类**: `quick`

  **并行化**:

  - **可并行**: YES
  - **并行组**: 波次 1
  - **阻塞**: 任务 4

  **引用**:

  - `tools/rollup-plugins/package.json`
  - `tools/rollup-plugins/plugins.js:25`

  **验收标准**:

  ```bash
  cat tools/rollup-plugins/package.json | grep '"name"'
  cat tools/rollup-plugins/plugins.js | grep "resolveOnly"
  # 预期: resolveOnly: [/^@lui-icon\/.*$/]
  ```

  **提交**: YES

  - 消息: `refactor(rollup-plugins): rename to @lui-icon/rollup-plugins`

### 波次 2: 构建工具 + 核心包

- [x] 4. 迁移 @lucide/build-icons → @lui-icon/build-icons

  **做什么**:

  - 更新 `package.json` 中的 `name`
  - 更新所有内部依赖引用（@lucide/shared, @lucide/helpers）
  - 更新生成代码中的字符串（如 JSDoc 注释中的链接）
  - 更新 `README.md`

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: NO
  - **阻塞**: 任务 5, 6, 7-15
  - **被阻塞**: 任务 1, 2, 3

  **引用**:

  - `tools/build-icons/package.json`
  - `tools/build-icons/src/` - 所有构建脚本

  **验收标准**:

  ```bash
  cat tools/build-icons/package.json | grep '"name"'
  grep -r "@lucide" tools/build-icons/src/
  # 预期: 无 @lucide 引用
  ```

  **提交**: YES

  - 消息: `refactor(build-icons): rename to @lui-icon/build-icons`

- [x] 5. 迁移 lucide → lui-icon (Vanilla JS 核心)

  **做什么**:

  - 重命名目录: `packages/lucide` → `packages/lui-icon`
  - 更新 `package.json` 中的 `name`: `lucide` → `lui-icon`
  - 更新所有内部依赖（@lucide/_ → @lui-icon/_）
  - 更新 `src/` 中的所有字符串引用
  - 更新 `README.md`

  **重要**: 这是核心包，被所有框架包依赖

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: NO (依赖 1, 4)
  - **阻塞**: 任务 7-15

  **引用**:

  - `packages/lucide/package.json`
  - `packages/lucide/src/` - 全部源码
  - `packages/lucide/README.md`

  **验收标准**:

  ```bash
  ls packages/ | grep "^lui-icon$"
  cat packages/lui-icon/package.json | grep '"name"'
  # 预期: "name": "lui-icon"
  ```

  **提交**: YES

  - 消息: `refactor(lucide): rename package to lui-icon`

- [x] 6. 迁移 lucide-static → lui-icon-static

  **做什么**:

  - 重命名目录: `packages/lucide-static` → `packages/lui-icon-static`
  - 更新 `package.json`
  - 更新生成代码中的类名和注释
  - 更新 `README.md`

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: YES (依赖 1, 4)
  - **阻塞**: 无

  **引用**:

  - `packages/lucide-static/package.json`
  - `packages/lucide-static/src/icons/` - 所有生成的图标文件

  **注意**: 生成的图标文件包含 `class="lucide lucide-*"`，需要重新生成或批量替换

  **验收标准**:

  ```bash
  ls packages/ | grep "lui-icon-static"
  cat packages/lui-icon-static/src/icons/delete.ts | grep "class="
  # 预期: class="lui-icon lui-icon-delete"
  ```

  **提交**: YES

  - 消息: `refactor(lucide-static): rename to lui-icon-static`

### 波次 3: 框架包迁移

- [x] 7. 迁移 lucide-react → lui-icon-react

  **做什么**:

  - 重命名目录
  - 更新 `package.json`
  - 重命名 `createLucideIcon.ts` → `createLUIIcon.ts`
  - 更新函数名: `createLucideIcon` → `createLUIIcon`
  - 更新类型名: `LucideProps` → `LUIIconProps`
  - 更新 CSS 类名生成: `lucide-*` → `lui-icon-*`
  - 更新所有导入/导出
  - 更新 `README.md`

  **关键文件**:

  - `packages/lucide-react/src/createLucideIcon.ts` - 核心工厂函数
  - 类名生成逻辑:
    ```typescript
    // 旧:
    `lucide-${toKebabCase(toPascalCase(iconName))}` // 新:
    `lui-icon-${toKebabCase(toPascalCase(iconName))}`;
    ```

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: YES (依赖 1, 4, 5)
  - **阻塞**: 任务 16

  **引用**:

  - `packages/lucide-react/src/createLucideIcon.ts`
  - `packages/lucide-react/src/types.ts`

  **验收标准**:

  ```bash
  ls packages/ | grep "lui-icon-react"
  grep -r "createLucideIcon" packages/lui-icon-react/src/
  # 预期: 无匹配
  grep -r "lucide-" packages/lui-icon-react/src/createLUIIcon.ts
  # 预期: 无匹配
  ```

  **提交**: YES

  - 消息: `refactor(react): rename to lui-icon-react, update CSS classes`

- [x] 8. 迁移 lucide-vue-next → lui-icon-vue-next

  **做什么**:

  - 类似任务 7 的所有步骤
  - 更新 Vue 3 特定的类名绑定逻辑

  **关键差异**:

  - Vue 的类名在 `createLucideIcon.ts` 中定义为字符串模板

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: YES (依赖 1, 4, 5)
  - **阻塞**: 任务 16

  **验收标准**:

  ```bash
  cat packages/lui-icon-vue-next/src/createLUIIcon.ts | grep "default:"
  # 预期: 包含 `lui-icon-` 而非 `lucide-`
  ```

- [x] 9. 迁移 lucide-vue → lui-icon-vue (Vue 2 遗留)

  **做什么**:

  - 类似其他框架包
  - **注意**: 包内有弃用警告，可能需要更新

  **推荐 Agent 配置**:

  - **分类**: `quick`

  **并行化**:

  - **可并行**: YES

- [x] 10. 迁移 @lucide/astro → @lui-icon/astro

  **做什么**:

  - 更新 package.json
  - 更新所有字符串引用

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: YES

- [x] 11. 迁移 lucide-svelte → @lui-icon/svelte

  **做什么**:

  - 目录重命名
  - 包名更新
  - 注意：这个包已经有 `@lucide/svelte` 的命名

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: YES

- [x] 12. 迁移 lucide-angular → lui-icon-angular

  **做什么**:

  - 目录重命名
  - 更新 Angular 特定的选择器和指令名
  - 注意：Angular 包可能有 `lucide-angular` 选择器

  **关键变化**:

  ```typescript
  // 旧选择器:
  selector: 'lucide-angular, lucide-icon, i-lucide';
  // 新选择器:
  selector: 'lui-icon-angular, lui-icon, i-lui-icon';
  ```

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: YES

- [x] 13. 迁移 lucide-solid → lui-icon-solid

  **做什么**:

  - 标准框架包迁移

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: YES

- [x] 14. 迁移 lucide-preact → lui-icon-preact

  **做什么**:

  - 标准框架包迁移

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: YES

- [x] 15. 迁移 lucide-react-native → lui-icon-react-native

  **做什么**:

  - 标准框架包迁移

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: YES

### 波次 4: 根配置 + 文档

- [x] 16. 更新根 package.json 和 pnpm-workspace.yaml

  **做什么**:

  - 更新根 `package.json`:
    - `name`: 确保是 `lui-icon` (或 `@lui-icon/root`)
    - `scripts` 中的过滤器: `--filter=!@lucide/*` → `--filter=!@lui-icon/*`
    - `scripts` 中的包名引用: `lucide-react build` → `lui-icon-react build`
  - 更新 `pnpm-workspace.yaml` 中的包模式
  - 更新所有 cross-reference 的依赖

  **关键变更**:

  ```json
  // package.json
  {
    "scripts": {
      "build": "pnpm -r --filter=!@lui-icon/astro build",
      "build:react": "pnpm lui-icon-react build"
    }
  }
  ```

  **推荐 Agent 配置**:

  - **分类**: `quick`

  **并行化**:

  - **可并行**: NO
  - **被阻塞**: 任务 7-15
  - **阻塞**: 任务 17

  **引用**:

  - `/package.json`
  - `/pnpm-workspace.yaml`

  **验收标准**:

  ```bash
  cat package.json | grep "lucide-react"
  # 预期: 无匹配 (除非在描述中)

  cat package.json | grep "@lucide"
  # 预期: 无匹配
  ```

  **提交**: YES

  - 消息: `chore(root): update package.json for LUI-icon brand`

- [x] 17. 更新构建脚本和 CI/CD

  **做什么**:

  - 重命名 `.github/workflows/lucide-*.yml` 文件
  - 更新工作流文件中的任务名称
  - 更新工作流中的包名引用
  - 更新其他 CI 配置

  **文件列表**:

  - `.github/workflows/lucide-react.yml` → `.github/workflows/lui-icon-react.yml`
  - `.github/workflows/lucide-vue-next.yml` → `.github/workflows/lui-icon-vue-next.yml`
  - 等等...

  **推荐 Agent 配置**:

  - **分类**: `quick`

  **并行化**:

  - **可并行**: NO
  - **被阻塞**: 任务 16
  - **阻塞**: 任务 18

  **验收标准**:

  ```bash
  ls .github/workflows/ | grep "lucide"
  # 预期: 无匹配
  ```

  **提交**: YES

  - 消息: `ci: rename workflow files to LUI-icon`

- [x] 18. 迁移或更新文档站点（简化版）

  **做什么**:

  - 全局替换包名引用：`lucide-*` → `lui-icon-*`，`@lucide/*` → `@lui-icon/*`
  - 更新安装命令示例
  - 更新导入示例
  - 更新 docs/package.json 中的依赖名
  - **注意**：暂不配置新域名，保留现有文档结构

  **不做**:

  - 不替换 lucide.dev 域名链接（用户决策：暂不处理域名）
  - 不重建文档站点结构
  - 不修改 VitePress 配置中的站点标题/描述（除非包含 lucide 字样）

  **范围**:

  - `/docs/guide/installation.md` - 安装命令
  - `/docs/guide/packages/*.md` - 包名引用和导入示例
  - `/docs/package.json` - 依赖名更新
  - 所有代码示例中的 import 语句

  **推荐 Agent 配置**:

  - **分类**: `writing`

  **并行化**:

  - **可并行**: NO
  - **被阻塞**: 全部前置任务

  **验收标准**:

  ```bash
  grep -r "lucide-react" docs/guide/ --include="*.md"
  # 预期: 无匹配

  grep -r "pnpm add lucide" docs/guide/ --include="*.md"
  # 预期: 无匹配
  ```

  **提交**: YES (可分组)

  - 消息: `docs: update all documentation for LUI-icon brand`

- [ ] 19. 最终清理和验证

  **做什么**:

  - 运行全局搜索，确保无遗漏
  - 更新测试文件和快照
  - 运行构建验证所有包
  - 运行测试确保全部通过
  - 更新 AGENTS.md 中的示例和引用

  **命令**:

  ```bash
  # 搜索残留
  grep -r "lucide" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.json" . \
    --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=icons

  # 构建验证
  pnpm build

  # 测试验证
  pnpm test
  ```

  **推荐 Agent 配置**:

  - **分类**: `unspecified-high`

  **并行化**:

  - **可并行**: NO

  **验收标准**:

  - 全局搜索 lucide (排除 node_modules, icons) 返回空
  - `pnpm build` 成功
  - `pnpm test` 通过

  **提交**: YES

  - 消息: `chore: final cleanup and verification for LUI-icon migration`

---

## 提交策略

| 任务后 | 消息                                                             | 文件                                                          | 验证              |
| ------ | ---------------------------------------------------------------- | ------------------------------------------------------------- | ----------------- |
| 1      | `refactor(shared): rename @lucide/shared to @lui-icon/shared`    | packages/shared/\*                                            | package.json name |
| 2      | `refactor(helpers): rename @lucide/helpers to @lui-icon/helpers` | tools/build-helpers/\*                                        | package.json name |
| 3      | `refactor(rollup-plugins): rename to @lui-icon/rollup-plugins`   | tools/rollup-plugins/\*                                       | plugins.js regex  |
| 4      | `refactor(build-icons): rename to @lui-icon/build-icons`         | tools/build-icons/\*                                          | dependencies      |
| 5      | `refactor(lucide): rename package to lui-icon`                   | packages/lucide → packages/lui-icon                           | 目录存在          |
| 6      | `refactor(lucide-static): rename to lui-icon-static`             | packages/lucide-static → packages/lui-icon-static             | 目录存在          |
| 7      | `refactor(react): rename to lui-icon-react, update CSS classes`  | packages/lucide-react → packages/lui-icon-react               | 函数名、类名      |
| 8      | `refactor(vue-next): rename to lui-icon-vue-next`                | packages/lucide-vue-next → packages/lui-icon-vue-next         | 类名              |
| 9      | `refactor(vue): rename to lui-icon-vue`                          | packages/lucide-vue → packages/lui-icon-vue                   | 类名              |
| 10     | `refactor(astro): rename to @lui-icon/astro`                     | packages/astro/\*                                             | package.json name |
| 11     | `refactor(svelte): rename to @lui-icon/svelte`                   | packages/lucide-svelte → packages/svelte                      | package.json name |
| 12     | `refactor(angular): rename to lui-icon-angular`                  | packages/lucide-angular → packages/lui-icon-angular           | 选择器            |
| 13     | `refactor(solid): rename to lui-icon-solid`                      | packages/lucide-solid → packages/lui-icon-solid               | 类名              |
| 14     | `refactor(preact): rename to lui-icon-preact`                    | packages/lucide-preact → packages/lui-icon-preact             | 类名              |
| 15     | `refactor(react-native): rename to lui-icon-react-native`        | packages/lucide-react-native → packages/lui-icon-react-native | 类名              |
| 16     | `chore(root): update package.json for LUI-icon brand`            | package.json, pnpm-workspace.yaml                             | 无 lucide 引用    |
| 17     | `ci: rename workflow files to LUI-icon`                          | .github/workflows/\*                                          | 文件名            |
| 18     | `docs: update all documentation for LUI-icon brand`              | docs/\*                                                       | 无 lucide 引用    |
| 19     | `chore: final cleanup and verification`                          | 剩余文件                                                      | 构建+测试通过     |

---

## 成功标准

### 验证命令

```bash
# 1. 验证无 lucide 引用（排除 node_modules 和 icons）
grep -r "lucide" --include="*.ts" --include="*.tsx" --include="*.js" \
  --include="*.mjs" --include="*.json" --include="*.md" \
  --include="*.yml" --include="*.yaml" \
  . \
  --exclude-dir=node_modules \
  --exclude-dir=.git \
  --exclude-dir=icons \
  --exclude="*.md"  # 排除 AGENTS.md 等历史文件
# 预期: 空（或仅历史文件如 AGENTS.md）

# 2. 验证包名
cat packages/lui-icon/package.json | jq '.name'
# 预期: "lui-icon"

cat packages/lui-icon-react/package.json | jq '.name'
# 预期: "lui-icon-react"

cat packages/shared/package.json | jq '.name'
# 预期: "@lui-icon/shared"

# 3. 验证 CSS 类名
cat packages/lui-icon-react/src/createLUIIcon.ts | grep "lui-icon-"
# 预期: 包含 lui-icon-*

# 4. 验证构建
pnpm build
# 预期: 成功

# 5. 验证测试
pnpm test
# 预期: 全部通过
```

### 最终检查清单

- [ ] 所有 12 个框架包已重命名为 `lui-icon-*` 或 `@lui-icon/*`
- [ ] 所有 3 个内部工具已重命名为 `@lui-icon/*`
- [ ] 无 `lucide-*` 包名残留
- [ ] 无 `@lucide/*` 包名残留
- [ ] 所有 CSS 类名以 `lui-icon` 开头
- [ ] 所有核心函数名为 `createLUIIcon`
- [ ] 所有类型名为 `LUIIconProps` / `LUIIcon`
- [ ] 文档站点无 Lucide 品牌引用
- [ ] CI/CD 工作流文件已重命名
- [ ] 构建成功
- [ ] 测试通过
- [ ] AGENTS.md 已更新（如需要保留）

---

## 注意事项与风险

### ⚠️ 高优先级风险

1. **CSS 类名破坏**: 生成的图标 CSS 类名变化可能影响用户样式

   - **缓解**: 这是一个 breaking change，需要在 CHANGELOG 中明确说明

2. **导入路径破坏**: 用户代码中的 `import { X } from 'lucide-react'` 将失效

   - **缓解**: 发布新版本并更新文档

3. **依赖循环**: 包之间的依赖关系复杂，错误的顺序会导致构建失败
   - **缓解**: 严格按照波次顺序执行

### ⚠️ 中优先级风险

4. **测试快照失效**: 所有包含 CSS 类名的快照测试需要更新

   - **缓解**: 包含在每个框架包任务中

5. **文档链接失效**: 如果保留 docs/，内部链接可能指向错误的包名
   - **缓解**: 全局替换脚本

### ℹ️ 已接受的变更

- **Breaking Change**: 这是一个破坏性的品牌迁移，不保证向后兼容
- **图标文件名**: 保留 `icons/*.svg` 的文件名（不涉及品牌）
- **AGENTS.md**: 可能需要更新或移除其中的 Lucide 示例

---

## 快速命令参考

```bash
# 批量重命名目录（示例）
mv packages/lucide packages/lui-icon
mv packages/lucide-react packages/lui-icon-react
# ... 等等

# 全局替换包名（谨慎使用）
find packages -name "package.json" -exec sed -i '' 's/"name": "lucide-/"name": "lui-icon-/g' {} \;
find packages -name "package.json" -exec sed -i '' 's/"name": "@lucide\//"name": "@lui-icon\//g' {} \;

# 全局替换 CSS 类名
find packages -name "*.ts" -exec sed -i '' 's/lucide-/lui-icon-/g' {} \;

# 全局替换函数名
find packages -name "*.ts" -exec sed -i '' 's/createLucideIcon/createLUIIcon/g' {} \;

# 全局替换类型名
find packages -name "*.ts" -exec sed -i '' 's/LucideProps/LUIIconProps/g' {} \;
find packages -name "*.ts" -exec sed -i '' 's/LucideIcon/LUIIcon/g' {} \;
```

---

## 总结

这是一个**大型品牌迁移项目**，涉及：

- 19 个任务，分为 4 个执行波次
- 12 个框架包 + 3 个内部工具
- 11,213 处代码引用需要更新
- 完整的文档站点替换

**关键成功因素**:

1. 严格按照依赖顺序执行（波次 1 → 2 → 3 → 4）
2. 每个任务后进行验证
3. 逐步提交，便于回滚
4. 最后进行全局清理和验证

**预计执行时间**: 4-8 小时（使用 `/start-work` 并行执行可大幅缩短）
