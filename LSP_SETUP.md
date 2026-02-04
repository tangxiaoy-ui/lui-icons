# LSP 配置指南

## ✅ 已完成的配置

### 1. VS Code 设置 (`.vscode/settings.json`)

已优化 TypeScript LSP 配置：

- ✅ 启用 workspace TypeScript SDK
- ✅ 自动导入建议
- ✅ 保存时自动格式化和 ESLint 修复
- ✅ SVG 文件关联为 HTML（支持 ESLint 校验）

### 2. 推荐扩展 (`.vscode/extensions.json`)

已配置推荐扩展：

- ESLint
- Prettier
- Code Spell Checker
- Error Lens
- Lit-html (用于 SVG 预览)
- VS Code XML

## 🚀 如何使用

### VS Code / Cursor

1. **安装推荐扩展**：

   - 打开项目后，VS Code 会提示安装推荐扩展
   - 或手动安装：`Ctrl+Shift+P` → "Extensions: Show Recommended Extensions"

2. **重启 TypeScript Server**：

   - `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

3. **验证 LSP 功能**：
   - 打开任意 `.ts` 或 `.tsx` 文件
   - 尝试自动补全（输入 `console.` 应该看到建议）
   - 悬停在类型上应该看到类型提示
   - 按 `F12` 应该能跳转到定义

### WebStorm

WebStorm 内置 TypeScript LSP，无需额外配置：

1. 打开项目
2. 确认 TypeScript 版本设置：`Settings → Languages & Frameworks → TypeScript`
3. 选择 "Use TypeScript Service" 以启用高级功能

## 📦 LSP 组件说明

### TypeScript LSP (tsserver)

- **来源**：通过 `typescript` npm 包提供
- **功能**：类型检查、自动补全、跳转定义、重构
- **状态**：✅ 已配置（使用 workspace TypeScript）

### ESLint LSP

- **来源**：通过 `eslint` 和 VS Code ESLint 扩展提供
- **功能**：代码质量检查、自动修复
- **状态**：✅ 已配置（支持 JS、TS、SVG）

### Prettier LSP

- **来源**：通过 `prettier` 和 VS Code Prettier 扩展提供
- **功能**：代码格式化
- **状态**：✅ 已配置（保存时自动格式化）

## 🔧 常见问题

### Q: 类型提示不工作？

**A**: 重启 TypeScript Server：`Ctrl+Shift+P` → "TypeScript: Restart TS Server"

### Q: ESLint 错误不显示？

**A**: 确保已安装 ESLint 扩展，并检查 `.vscode/settings.json` 中 `eslint.enable` 为 `true`

### Q: SVG 文件没有语法高亮？

**A**: 已配置 SVG 关联为 HTML，重启 VS Code 生效

### Q: Monorepo 中跨包跳转不工作？

**A**: 确保 `pnpm install` 已完成，TypeScript 会自动识别 workspace 依赖

## 📚 相关文档

- [TypeScript LSP 文档](https://code.visualstudio.com/api/language-extensions/programmatic-language-features)
- [ESLint LSP 文档](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code TypeScript 配置](https://code.visualstudio.com/docs/typescript/typescript-compiling#_typescript-configuration)
