---
title: vitepress 学习笔记
date: 2024-10-12
tags: [vitepress]
category: [计算机]
---

# vitepress 学习笔记

我的 vitepress 目录结构是

```bash
.
├─ .vitepress # vitepress 配置文件夹
│  ├─ theme # 自定义主题
│  │  └─ index.ts
│  │  └─ style.css
│  └─ config.mts # viepress 配置文件
├─ cache # 缓存文件
├─ html # 生成的静态文件
├─ mkdocs # viepress 源文件夹
│  ├─ public # 图片等文件
│  └─ index.md # 首页
└─ package-lock.json
└─ package.json
```

步骤：

https://vitepress.dev/zh/guide/getting-started

## 第一步，下载 vitepress 包

```bash
npm add -D vitepress
```

## 第二步，初始化 vitepress 项目

```bash
npx vitepress init
```

这一步的输出如下

```bash
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config? # 这里选择根目录
│  ./ # [!code highlight]
│
◇  Site title: # confid.mts 的 title 字段
│  My Awesome Project # [!code highlight]
│
◇  Site description: # confid.mts 的 description 字段
│  A VitePress Site # [!code highlight]
│
◇  Theme: # 这里选默认主题 + 自定义主题
│  Default Theme + Customization # [!code highlight]
│
◇  Use TypeScript for config and theme files? # 选 TypeScript 为配置文件
│  Yes # [!code highlight]
│
◇  Add VitePress npm scripts to package.json? #不要在 package.json 中添加脚本
│  No # [!code highlight]
│
└  You're all set! Now run npx vitepress dev and start writing.
```

## 第三步，修改 vitepress 配置文件

```typescript
// .vitepress/config.mts
export default(
  defineConfig({
    srcDir: 'mkdocs', // 这里面存放的是 markdown 文件 // [!code ++]
    outDir: 'html', // 这里面存放的是生成的静态文件 // [!code ++]
    cacheDir: 'cache', // 这里面存放的是缓存文件 // [!code ++]
  })
)
```

## 第四步，预览和构建站点

- 预览站点

```bash
npx vitepress dev
```

- 构建站点

```bash
npx vitepress build
```

- 预览构建好的站点

```bash
npx vitepress preview
```


## vitepress 维护指南

每次更新 vitepress 文档，都需要执行以下步骤

1. 运行 tags.py 和 categories.py 更新 tags.md 和 categories.md 文件（每次）

2. 更新仓库根目录下的 README.md 文件（每次）

3. 更新 config.mts 的 siderbar 链接（每次）

每次更新 vitepress 文档，至少有 5 个 git 变动

---

4. 每个月还得更新 index.md 的 features 列表（每月）

5. 每年都要更新 config.mts 的 nav 字段（每年）