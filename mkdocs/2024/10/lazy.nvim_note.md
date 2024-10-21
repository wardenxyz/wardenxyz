---
prev: false
next: false
date: 2024-10-04
tags:
- vim
- lazy.nvim
categories:
- 计算机
---

# lazy.nvim 学习笔记

## lazy.nvim 路径

```bash
C:\Users\admin\AppData\Local\nvim-data\site\pack\packer\start\lazy.nvim
```

命令是

```bash
git clone https://github.com/folke/lazy.nvim.git C:\Users\admin\AppData\Local\nvim-data\site\pack\packer\start\lazy.nvim
```

## init.lua 路径

```bash
C:\Users\admin\AppData\Local\nvim
```

命令是

```bash
git clone https://gitee.com/MechCrafter/lazy.nvim.git C:\Users\admin\AppData\Local\nvim
```
（这是我的配置文件，是私有仓库，你拉不下来）

## Neovim 插件路径

```bash
C:\Users\admin\AppData\Local\nvim-data\lazy
```

这个里面放的就是你的插件

---

步骤：

## 第一步，拉取 lazy.nvim

```bash
git clone https://github.com/folke/lazy.nvim.git C:\Users\admin\AppData\Local\nvim-data\site\pack\packer\start\lazy.nvim
```

## 第二步，拉取配置文件

```bash
git clone https://gitee.com/MechCrafter/lazy.nvim.git C:\Users\admin\AppData\Local\nvim
```

## 第三步，下载插件

打开 Neovim，lazy.nvim 会自动下载插件，下载完成后，重启 Neovim
