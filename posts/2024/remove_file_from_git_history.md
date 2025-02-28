---
prev: false
next: false
date: 2024-04-08
tags:
- git
categories:
- 计算机
---

# 彻底从 git 提交中移除文件

`git rm --cached` 命令只会删除当前提交到之后提交的的索引，不会删除所有分支的所有提交历史

要想删除一个文件所有的提交历史要用
```bash
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch templates.json" --prune-empty --tag-name-filter cat -- --all
```
命令

删除一个文件夹的历史提交要用
```bash
git filter-branch --force --index-filter "git rm -r --cached --ignore-unmatch 'logseq/plugins/bullet threading'" --prune-empty --tag-name-filter cat -- --all
```
因为 `git rm --cached --ignore-unmatch` 命令默认不处理目录，除非明确指定 `-r` 选项来递归地移除目录。

这个命令会从所有分支的所有提交历史中删除 `templates.json` 文件。

具体来说：

- `git filter-branch` 是一个强大的命令，用于重写大量（可能是全部）的分支和标签。
- `--force` 选项用于覆盖现有的备份。
- `--index-filter` 选项用于在每次检查出一个提交时，修改它的索引（即暂存区）。
- `"git rm --cached --ignore-unmatch templates.json"` 是在每次检查出一个提交时运行的命令，它会尝试从索引中删除 `templates.json` 文件。如果文件不存在，`--ignore-unmatch` 选项会让 `git rm` 命令静默退出。
- `--prune-empty` 选项用于在重写历史后删除那些变成空的提交。
- `--tag-name-filter cat -- --all` 选项用于重写所有分支和标签。

请注意，这是一个破坏性的操作，一旦执行，你的 Git 历史将被永久改变。在执行此操作之前，确保你已经备份了你的工作，并且完全理解这个命令的后果。

使用该命令之前要保证当前仓库无未暂存的更改，否则会报以下错误
```bash
WARNING: git-filter-branch has a glut of gotchas generating mangled history
         rewrites.  Hit Ctrl-C before proceeding to abort, then use an
         alternative filtering tool such as 'git filter-repo'
         (https://github.com/newren/git-filter-repo/) instead.  See the
         filter-branch manual page for more details; to squelch this warning,
         set FILTER_BRANCH_SQUELCH_WARNING=1.
Proceeding with filter-branch...

Cannot rewrite branches: You have unstaged changes.
```

运行成功的状态为：
```bash
PS D:\workspace\script> git filter-branch --force --index-filter "git rm --cached --ignore-unmatch init.vim" --prune-empty --tag-name-filter cat -- --all
WARNING: git-filter-branch has a glut of gotchas generating mangled history
         rewrites.  Hit Ctrl-C before proceeding to abort, then use an
         alternative filtering tool such as 'git filter-repo'
         (https://github.com/newren/git-filter-repo/) instead.  See the
         filter-branch manual page for more details; to squelch this warning,         set FILTER_BRANCH_SQUELCH_WARNING=1.
Proceeding with filter-branch...

Rewrite b83b89ca24cf0fa0296ee92f4603ab09be9f525f (35/35) (97 seconds passed, remaining 0 predicted)    rm 'init.vim'

Ref 'refs/heads/main' was rewritten
Ref 'refs/remotes/origin/main' was rewritten
WARNING: Ref 'refs/remotes/origin/main' is unchanged
```
