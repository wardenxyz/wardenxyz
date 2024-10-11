---
date: 2024-10-10
tags:
- git
- git-crypt
categories:
- 计算机
---

# git-crypt 学习笔记

从 git-crypt 的[官方文档](https://github.com/AGWA/git-crypt/blob/master/README.md)中可知

git-crypt 使用 AES-256 在 CTR 模式下对文件进行加密，并且使用基于文件 SHA-1 HMAC 生成的合成初始化向量（IV）。这种操作模式在确定性选择明文攻击下被证明具有语义安全性，确保除了判断两个文件是否完全相同之外，不会泄露其他任何信息。

git-crypt 是结合了 GPG（GNU Privacy Guard）和 AES 加密技术的一个工具。它允许通过 GPG 公钥/私钥系统来管理和分发加密密钥，从而实现对 Git 仓库中特定文件的安全保护。对于每个需要加密的文件，git-crypt 利用 AES-256 加密算法在 CTR 模式下进行加密，以保证数据安全。

因此，git-crypt 在实际应用中整合了 GPG 的密钥管理和 AES 加密算法，实现了透明的文件加密与解密功能，使得在版本控制的同时能够保护敏感信息的安全。

也就是说，git-crypt 是一个将 GPG 和 AES 结合的项目，GPG 来管理用户权限，AES 来加密文件。

## 环境准备

- [gpg4win](https://www.gpg4win.org/)
- [git](https://git-scm.com/)
- [git-crypt](https://github.com/AGWA/git-crypt)

要把从 [git-crypt](https://github.com/AGWA/git-crypt/releases) 下载的 `git-crypt-0.7.0-x86_64.exe` 重命名为 `git-crypt.exe`，否则检测不到环境变量

把 `git-crypt.exe` 放到 `git\bin` 目录下

## 步骤

## 1. 初始化仓库

```bash
git init
```

## 2. 初始化 git-crypt

```bash
git-crypt init
```

## 3. 添加 GPG 用户

```bash
git-crypt add-gpg-user <GPG_KEY_ID>
```

## 4. 配置加密文件

在 `.gitattributes` 文件中添加

```plaintext
## 加密指定文件
secretfile filter=git-crypt diff=git-crypt

## 加密指定文件夹下的md文件
Test/*.md filter=git-crypt diff=git-crypt

## 加密指定文件夹下的所有文件
Test/** filter=git-crypt diff=git-crypt
```

## 5. 提交更改

```bash
git add .gitattributes secret.txt
git commit -m "Add git-crypt configuration"
git push
```

## 6. 解密文件

```bash
git-crypt unlock
```

## 相关命令

```bash
$ git-crypt status
not encrypted: .gitattributes
    encrypted: secretfile
```
