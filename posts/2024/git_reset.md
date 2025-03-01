---
title: git 重置当前分支
date: 2024-10-16
tags: [git]
category: [计算机]
---

# git 重置当前分支

`git reset` 命令用于重置当前分支的 HEAD 到指定的状态。以下是一些常用的 `git reset` 命令：

## 1. 软重置（保留工作目录和暂存区的更改）：

```bash
git reset --soft <commit>
```

## 2. 混合重置（保留工作目录的更改，但重置暂存区）：

```bash
git reset --mixed <commit>
```
这是默认选项，如果不指定参数，`git reset` 会默认使用 `--mixed`。

## 3. 硬重置（丢弃工作目录和暂存区的更改）：

```bash
git reset --hard <commit>
```

其中 `<commit>` 是你想重置到的提交的哈希值。如果你想重置到上一个提交，可以使用 `HEAD^` 代替 `<commit>`。例如：

```bash
git reset --hard HEAD^
```
