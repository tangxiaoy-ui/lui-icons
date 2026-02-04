# Tubiao (图标)

基于 [LDesign](https://mksmoke.ywork.me/web/lui/#/core/common) 的自定义图标库项目，提供高质量的开源 SVG 图标。

## 目录

- [关于项目](#关于项目)
- [快速开始](#快速开始)
- [本地开发](#本地开发)
- [项目结构](#项目结构)
- [可用命令](#可用命令)
- [添加新图标](#添加新图标)
- [许可证](#许可证)

---

## 关于项目

Tubiao 是一个开源图标库，为数字和非数字项目提供矢量 (SVG) 图标和符号。

### 特性

- 🎨 **多框架支持**: React, Vue, Svelte, Angular, Solid, Preact, Astro
- 📦 **统一 API**: 所有框架包提供一致的图标使用体验
- 🔧 **TypeScript 支持**: 完整的类型定义
- 🚀 **轻量级**: 优化的 SVG 文件
- 📚 **文档站点**: 内置图标预览和搜索

---

## 快速开始

### 环境要求

在开始之前，请确保你的开发环境满足以下要求：

- **Node.js**: `>=24.11.1` ([下载地址](https://nodejs.org/))
- **pnpm**: `>=10.24.0` (推荐使用最新版本)

### 1. 安装 pnpm（如果尚未安装）

```bash
# 使用 npm 安装
npm install -g pnpm

# 或使用 Homebrew (macOS/Linux)
brew install pnpm

# 验证安装
pnpm --version
```

### 2. 克隆项目

```bash
# 使用 HTTPS
git clone https://github.com/tangxiaoy-ui/lui-icons.git
cd lui-icons

# 或使用 SSH (如果已配置 SSH 密钥)
git clone git@github.com:tangxiaoy-ui/lui-icons.git
cd lui-icons
```

### 3. 安装依赖

```bash
# 安装所有依赖包
pnpm install
```

⚠️ **注意**: 由于 `node_modules` 不在版本控制中，这一步是**必需的**。安装过程可能需要几分钟，具体取决于网络速度。

---

## 本地开发

### 启动文档站点

图标库包含一个完整的文档站点，用于预览和搜索所有图标：

```bash
# 启动开发服务器
pnpm --filter docs dev

# 或直接运行（如果配置了脚本）
pnpm docs:dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看图标预览。

### 构建所有包

```bash
# 构建所有框架包
pnpm build
```

构建产物将生成在各个包的 `dist/` 目录中。

### 运行测试

```bash
# 运行所有测试
pnpm test

# 更新测试快照
pnpm test:update
```

---

## 项目结构

```
tubiao/
├── icons/                    # SVG 图标源文件（源数据）
├── categories/               # 图标分类定义
├── packages/                 # 各框架包
│   ├── lui-icon-react/       # React 包
│   ├── lui-icon-vue-next/    # Vue 3 包
│   ├── lui-icon-svelte/      # Svelte 包
│   ├── lui-icon-angular/     # Angular 包
│   ├── lui-icon-solid/       # SolidJS 包
│   ├── lui-icon-preact/      # Preact 包
│   ├── @lui-icon/astro/      # Astro 包
│   ├── lui-icon-static/      # 静态资源包
│   ├── @lui-icon/shared/     # 共享工具
│   └── @lui-icon/build-icons/# 图标构建工具
├── docs/                     # 文档站点
│   ├── .vitepress/          # VitePress 配置
│   └── scripts/             # 文档生成脚本
├── tools/                    # 构建工具和脚本
├── scripts/                  # 维护脚本
├── .github/                  # GitHub Actions 工作流
├── .husky/                   # Git hooks
├── AGENTS.md                 # 项目架构文档
├── package.json              # 根 package.json
└── pnpm-workspace.yaml       # pnpm 工作空间配置
```

---

## 可用命令

### 根级别命令

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm build

# 运行所有测试
pnpm test

# 运行测试并更新快照
pnpm test:update

# 代码检查
pnpm lint

# 代码格式化
pnpm lint:format-fix

# 优化 SVG 文件
pnpm run optimize

# 生成图标组件
pnpm run gi

# 验证图标和分类
pnpm run checkIcons
```

### 单包命令

```bash
# 构建特定包
pnpm lui-icon-react build
pnpm lui-icon-vue-next build

# 测试特定包
pnpm lui-icon-react test

# 启动文档站点
pnpm --filter docs dev
```

---

## 添加新图标

### 1. 创建 SVG 文件

将新的 SVG 文件添加到 `icons/` 目录：

```bash
icons/
├── my-new-icon.svg
```

**SVG 要求**:

- 使用 `kebab-case` 命名（例如：`my-new-icon.svg`）
- 根元素使用标准的 SVG 属性
- 查看框必须是 `0 0 24 24`
- 没有内联样式
- 使用双引号

### 2. 优化 SVG

```bash
# 自动优化 SVG 文件
pnpm run optimize
```

### 3. 生成图标组件

```bash
# 为所有框架生成组件
pnpm run gi

# 或
pnpm run generate:icons
```

### 4. 验证图标

```bash
# 验证图标和分类
pnpm run checkIcons
```

### 5. 构建和测试

```bash
# 构建所有包
pnpm build

# 运行测试
pnpm test

# 启动文档站点预览
pnpm --filter docs dev
```

### 6. 提交更改

```bash
git add icons/ packages/ docs/
git commit -m "feat: add new icon my-new-icon"
git push
```

---

## 常见问题

### Q: 为什么要使用 pnpm 而不是 npm 或 yarn？

A: pnpm 更快、更节省磁盘空间，并且能更好地处理 monorepo 的依赖关系。它是本项目唯一支持的包管理器。

### Q: 为什么克隆项目后需要运行 `pnpm install`？

A: 依赖包 (`node_modules/`) 不在 Git 版本控制中，以保持仓库轻量。`pnpm install` 根据 `pnpm-lock.yaml` 精确还原所有依赖。

### Q: 如何切换 Node.js 版本？

A: 推荐使用 [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) (Windows):

```bash
# 安装特定版本的 Node.js
nvm install 24

# 切换到该版本
nvm use 24

# 设置为默认版本
nvm alias default 24
```

### Q: 文档站点启动后无法看到图标？

A: 确保：

1. 已运行 `pnpm install`
2. 已运行 `pnpm build` 或 `pnpm run gi` 生成图标组件
3. 检查浏览器控制台是否有错误

---

## 贡献指南

欢迎贡献！请查看 [AGENTS.md](./AGENTS.md) 了解项目架构和开发流程。

### 开发流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/my-new-icon`)
3. 提交更改 (`git commit -m 'feat: add my-new-icon'`)
4. 推送到分支 (`git push origin feature/my-new-icon`)
5. 创建 Pull Request

---

## 许可证

[ISC License](./LICENSE)

---

## 联系方式

- GitHub: [tangxiaoy-ui/lui-icons](https://github.com/tangxiaoy-ui/lui-icons)
- 问题反馈: [GitHub Issues](https://github.com/tangxiaoy-ui/lui-icons/issues)

---

**Made with ❤️ by the Tubiao team**
