---
date: 2024-10-09
tags:
- GitHub
categories:
- 计算机
---

## SSH 私钥是放在 mkdocs.yml 所在仓库

settings ——> Secrets and variables ——> Actions ——> New repository secret 添加 SSH 私钥，名字要与 `.github\workflows` 中的 ${{ secrets.DEPLOY_KEY }} 中一致

## SSH 公钥是放在 username.github.io 仓库中

settings ——> Deploy keys ——> Add deploy key

---

1. 写博客

2. 运行 categories 脚本和 tags 脚本

3. 更新 index 页面链接

4. 更新 README 页面链接

5. 更新 mkdocs.yml 页面链接

6. git 提交推送

每写一篇博客至少要有 5 个 git 改动
