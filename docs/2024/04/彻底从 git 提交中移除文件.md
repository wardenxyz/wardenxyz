---
date: 2024-04-08
tags:
- git
categories:
- 计算机
---

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
PS D:\workspace\vault\.obsidian> git filter-branch --force --index-filter "git rm --cached --ignore-unmatch text-generator.json" --prune-empty --tag-name-filter cat -- --all
WARNING: git-filter-branch has a glut of gotchas generating mangled history
         rewrites.  Hit Ctrl-C before proceeding to abort, then use an
         alternative filtering tool such as 'git filter-repo'
         (https://github.com/newren/git-filter-repo/) instead.  See the
         filter-branch manual page for more details; to squelch this warning,
         set FILTER_BRANCH_SQUELCH_WARNING=1.
Proceeding with filter-branch...

Rewrite cfd9c149ff458d7660928156d2773387dceefacd (1/46) (0 seconds passed, remaining 0 predicted)    rm 'text-generator.json'
Rewrite 71d6a7902f88fc9ae1e948241aba63fb93e50043 (2/46) (1 seconds passed, remaining 22 predicted)    rm 'text-generator.json'
Rewrite 310e2b2a14e06237bff9cba22a34dad0bb3c4f27 (2/46) (1 seconds passed, remaining 22 predicted)    rm 'text-generator.json'
Rewrite 6b42ddcdd0952b34d79495141f26fb7302ded763 (2/46) (1 seconds passed, remaining 22 predicted)    rm 'text-generator.json'
Rewrite dc6ce0f2c3a7e0809a3c8639b1d64a6a62e89980 (5/46) (3 seconds passed, remaining 24 predicted)    rm 'text-generator.json'
Rewrite 0f1a21ba90795fc5bebb7185dbb312613426dcde (5/46) (3 seconds passed, remaining 24 predicted)    rm 'text-generator.json'
Rewrite f99c89f896c86767f1668f13bfef364d10e9fb77 (7/46) (4 seconds passed, remaining 22 predicted)    rm 'text-generator.json'
Rewrite 3de2d82d517eed846c4ecd75dfa415112da4e657 (7/46) (4 seconds passed, remaining 22 predicted)    rm 'text-generator.json'
Rewrite 3a12b7fef21fc47ba298df6f7a70597552011a59 (9/46) (5 seconds passed, remaining 20 predicted)    rm 'text-generator.json'
Rewrite 50d45f323793ba78688f40a0c46eb56b1014fedd (9/46) (5 seconds passed, remaining 20 predicted)    rm 'text-generator.json'
Rewrite a033af4410fa51b6bdb8ee23ad269aab6ab52b24 (11/46) (6 seconds passed, remaining 19 predicted)    rm 'text-generator.json'
Rewrite 019d9c6015874cbff221cc6fba5a6c75dff360a8 (11/46) (6 seconds passed, remaining 19 predicted)    rm 'text-generator.json'
Rewrite 50702bf3200bafa2d85302f60e1b3f83eaff109a (13/46) (7 seconds passed, remaining 17 predicted)    rm 'text-generator.json'
Rewrite 8a683562238888cdcb6dce619184e5a9370b151b (13/46) (7 seconds passed, remaining 17 predicted)    rm 'text-generator.json'
Rewrite 6d26119a6986dd93cf424e53ed472377f6347d5a (15/46) (8 seconds passed, remaining 16 predicted)    rm 'text-generator.json'
Rewrite 27cc3d08ff95bdd7d0238e09031d82fe622fd633 (15/46) (8 seconds passed, remaining 16 predicted)    rm 'text-generator.json'
Rewrite 678cd092681d83c6d846623b88ff4bdf4377d79e (17/46) (9 seconds passed, remaining 15 predicted)    rm 'text-generator.json'
Rewrite 7c8891cf95fb09c4e1fdec79671b4353507eb23d (17/46) (9 seconds passed, remaining 15 predicted)    rm 'text-generator.json'
Rewrite 0ae42acebacf6d62b7a764208f172fa0931e7786 (19/46) (10 seconds passed, remaining 14 predicted)    rm 'text-generator.json'
Rewrite 2522b274cb31d015d72b3bbb4c4914ea2426c46e (19/46) (10 seconds passed, remaining 14 predicted)    rm 'text-generator.json'
Rewrite f8cb70fa5ffd3c397a56da1573b3234c145c25db (21/46) (11 seconds passed, remaining 13 predicted)    rm 'text-generator.json'
Rewrite 3b2be4c650c1909eae95a38853d23186aa4219ab (21/46) (11 seconds passed, remaining 13 predicted)    rm 'text-generator.json'
Rewrite d412d0a588bdd88469a7df8cdc9a8846334f1b1b (23/46) (13 seconds passed, remaining 13 predicted)    rm 'text-generator.json'
Rewrite 61e17f56712ea6268650c463dec15cf49260d164 (23/46) (13 seconds passed, remaining 13 predicted)    rm 'text-generator.json'
Rewrite dc84ecc40116b2dbb587c4f95dd17f06fa96cc88 (25/46) (14 seconds passed, remaining 11 predicted)    rm 'text-generator.json'
Rewrite fb21d6cad93520d13ec53f9d0d66f32080c2d5be (25/46) (14 seconds passed, remaining 11 predicted)    rm 'text-generator.json'
Rewrite 152212bcc2a37e3513edead0bc083eefad7cbfab (27/46) (15 seconds passed, remaining 10 predicted)    rm 'text-generator.json'
Rewrite f203c2157f31bd1855224f4cd98753a710092fa0 (27/46) (15 seconds passed, remaining 10 predicted)    rm 'text-generator.json'
Rewrite dd36c4f90f14cd2701843b6aa6b13c82608e386d (43/46) (23 seconds passed, remaining 1 predicted)    rm 'text-generator.json'

Rewrite 09be21614696f1aa604cf44fffa9806c6204492b (45/46) (24 seconds passed, remaining 0 predicted)    rm 'text-generator.json'

Rewrite a1a8964fad83befa202e2c130edac2bc47ccd905 (45/46) (24 seconds passed, remaining 0 predicted)    rm 'text-generator.json'


Ref 'refs/heads/main' was rewritten
```
