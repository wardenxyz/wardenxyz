---
title: 安装 WSL2 并迁移到 D 盘
date: 2025-04-10
tags: [WSL2, Linux]
category: [计算机]
---

# 安装 WSL2 并迁移到 D 盘

## 安装 WSL2

以下是在 Windows 上安装 WSL2 的主要步骤：

1. 启用必要功能

在 PowerShell（管理员权限）中执行下列命令启用所需功能并重启计算机：

启用WSL功能：

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

启用虚拟机平台:

```PowerShell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

重启电脑：

```powershell
Restart-Computer
```

2. 安装 Ubuntu

在 PowerShell 中使用命令安装：

```powershell
wsl --install -d Ubuntu
```

安装完成后，启动并按照指示设置用户名和密码。

## 迁移到 D 盘

以下是把 WSL2 迁移到 D 盘的步骤：

1. 在 PowerShell 或终端中使用 `wsl --list --verbose` 查看当前已安装的 WSL 发行版的名称，发行版名为 Ubuntu。

2. 导出该发行版到一个 .tar 文件（路径可自行更改），例如将其暂时保存到 D 盘的临时目录:

```powershell
wsl --export Ubuntu D:\temp\ubuntu_export.tar
```

3. 从系统中卸载（注册表中移除）该发行版：

```powershell
wsl --unregister Ubuntu
```

4. 在 D 盘创建一个目录用于存放新的发行版文件，例如 D:\WSL2\Ubuntu，然后将刚才导出的 tar 文件导入到该目录：

```powershell
wsl --import Ubuntu D:\WSL2\Ubuntu D:\temp\ubuntu_export.tar --version 2
```

5. 导入完成后，新的发行版即部署在 D 盘，登录方法保持不变，可通过下列命令进入该发行版：

```powershell
wsl -d Ubuntu
```

如需设置新的发行版为默认 WSL 发行版，可使用：

```powershell
wsl --set-default Ubuntu
```

这样就完成了在 D 盘安装或迁移相应 WSL2 发行版的流程。若需要多个发行版，也可按照上述方法依次导出-导入。

## 查看安装的 Ubuntu 版本

打开 WSL2 终端。

```bash
cat /etc/os-release
```

输出结果中，`VERSION` 和 `VERSION_ID` 行会显示 Ubuntu 的版本信息。
