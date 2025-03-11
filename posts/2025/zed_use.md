---
title: zed 使用笔记
date: 2025-03-11
tags: [zed]
category: [计算机]
---

# zed 使用笔记

系统：Windows11 24H2

下载：https://github.com/deevus/zed-windows-builds

## settings.json

https://zed.dev/docs/configuring-zed

```bash
C:\Users\admin\AppData\Roaming\Zed
```

## snippets.json

https://zed.dev/docs/snippets

```bash
C:\Users\admin\AppData\Roaming\Zed
```

示例：

```json
{
  "zed snippets": {
    "body": "Zed is a good editor.",
    "description": "zed snippets example",
    "prefix": "zed"
  }
}
```

zed snippets 没有 scope 概念，如果你想创建针对 JavaScript 文件的代码片段，你的文件将是 `javascript.json`

## 格式化

`ctrl+shift+i` 保存加格式化
