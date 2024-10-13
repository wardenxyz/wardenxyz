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

## lazy.nvim 路径探秘

lazy.nvim 到底在哪个文件夹下，在网上搜到的相关教程中就只有一个 `git clone https://github.com/folke/lazy.nvim.git ~/.config/nvim`，这是在 Unix 环境的配置，但我是 Windows 环境，所以对这个 `~/.config` 路径深恶痛绝，几乎所有的环境配置都叫我克隆到 `~/.config` 路径下，但 Windows 有个屁 `~` 路径，我又搜了半天，就是没有相关的文章说 Windows 下的 `~` 在哪儿，气得我几次放弃 Neovim

但今天在 GitHub Copilot 的帮助下终于知道如何配置 lazy.nvim 了（GitHub copilot yyds）

lazy.nvim 在 Windows 环境的克隆路径是 `C:\Users\admin\AppData\Local\nvim-data\site\pack\packer\start\lazy.nvim`

命令是

```bash
git clone https://github.com/folke/lazy.nvim.git C:\Users\admin\AppData\Local\nvim-data\site\pack\packer\start\lazy.nvim
```

## init.lua 路径探秘

ok，解决了 lazy.nvim 应该克隆到哪个路径下之后，该解决 lazy.nvim 的配置文件 `init.lua` 了，没错，关于这个配置文件，网上又在玩谜语，又是 `~` 路径（请容许我骂娘****）

经过我的仔细寻找，发现安装 Neovim 后会在 `C:\Users\admin\AppData\Local` 下生成两个文件夹，一个是 `nvim-data`，一个是 `nvim`，`nvim` 下就是存放 `init.lua` 的地方，你需要自己新建一个 `init.lua`，在这里面配置你的 Neovim，这个文件夹也是你需要保管的文件夹，你可以把 `nvim` 文件夹推送到自己的仓库里

而 `nvim-data` 则是储存 Neovim 插件和 lazy.nvim 的文件夹

命令是

```bash
git clone https://gitee.com/MechCrafter/lazy.nvim.git C:\Users\admin\AppData\Local\nvim
```
（这是我的配置文件，是私有仓库，你拉不下来）

## Neovim 插件路径探秘

知道了前面两个的具体路径，那肯定想要知道这个插件到底下载到哪个路径，所以我找了半天，发现插件路径在 `C:\Users\admin\AppData\Local\nvim-data\lazy` 下，这个里面放的就是你的插件了

## 总结

- lazy.nvim 本体在 `C:\Users\admin\AppData\Local\nvim-data\site\pack\packer\start\lazy.nvim` 下

命令为

```bash
git clone https://github.com/folke/lazy.nvim.git C:\Users\admin\AppData\Local\nvim-data\site\pack\packer\start\lazy.nvim
```

- 配置文件在 `C:\Users\admin\AppData\Local\nvim` 下

命令为

```bash
git clone https://gitee.com/MechCrafter/lazy.nvim.git C:\Users\admin\AppData\Local\nvim
```

- 下载的插件在 `C:\Users\admin\AppData\Local\nvim-data\lazy` 下

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
