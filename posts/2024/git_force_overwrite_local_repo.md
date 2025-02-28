---
title: git 强制覆盖本地仓库
date: 2024-09-01
tags:
- git
category:
- 计算机
---

# git 强制覆盖本地仓库

git 强制覆盖本地仓库

```bash
git reset --hard origin/branch_name
```

是一个 Git 命令，用于将当前分支的状态重置为远程分支 `branch_name` 的状态。具体来说，它会：

1. 将当前分支的 HEAD 指针重置为 `origin/branch_name` 的最新提交。
2. 重置暂存区（index）以匹配这个提交。
3. 重置工作目录中的文件以匹配这个提交。

这意味着本地所有未提交的更改和提交历史将被丢弃，工作目录将完全同步到远程分支的状态。请谨慎使用这个命令，因为它会丢失所有未提交的更改。
