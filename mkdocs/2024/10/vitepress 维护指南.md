---
prev: false
next: false
date: 2024-10-11
tags:
- vitepress
categories:
- 计算机
---

# vitepress 维护指南

每次更新 vitepress 文档，都需要执行以下步骤

1. 运行 tags.py 和 categories.py 更新 tags.md 和 categories.md 文件（每次）

2. 更新仓库根目录下的 README.md 文件（每次）

3. 更新 config.mts 的 siderbar 链接（每次）

每次更新 vitepress 文档，至少有 5 个 git 变动

---

4. 每个月还得更新 index.md 的 features 列表（每月）

5. 每年都要更新 config.mts 的 nav 字段（每年）
