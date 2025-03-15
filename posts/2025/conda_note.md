---
title: conda 使用笔记
date: 2025-03-15
tags: [conda, python]
category: [计算机]
---

# conda 使用笔记

## conda 常用命令

```bash
# 创建环境时指定 Python 版本
conda create --name myenv python=3.8

# 更精确的版本控制
conda create --name myenv python=3.8.5

# 激活环境
conda activate env_name

# 列出所有的 conda 虚拟环境
conda env list

# 删除 conda 虚拟环境
conda remove --name myenv --all # 所有的环境
conda env remove --name myenv # 删除指定环境

# 在现有环境中安装/更新 Python 版本
conda install python=3.8

# 或者直接指定环境
conda install -n myenv python=3.8

# 列出当前环境的包
conda list

# 查看指定环境的包
conda list -n env_name

# 在当前环境搜索包
conda list numpy

# 在指定环境搜索
conda list -n env_name numpy

# 导出为 YAML 文件
conda env export > environment.yml

# 或只导出手动安装的包
conda env export --from-history > environment.yml

# 导入环境:
conda env create -f environment.yml

# 更新现有环境
conda env update -f environment.yml

# 查看可用的 Python 版本
conda search python
```

## Python 虚拟环境管理

- [Python 学习笔记](../2024/python_note.md)

```bash
## 创建虚拟环境
python -m venv venv

## 激活虚拟环境
.\venv\Scripts\activate  ## Windows
## 或者
source venv/bin/activate  ## macOS 和 Linux

## 安装第三方库
pip install requests

## 卸载第三方库
pip uninstall requests

## 生成依赖文件
pip freeze > requirements.txt

## 根据依赖文件下载第三方库
pip install -r requirements.txt

## 根据依赖文件卸载第三方库
pip uninstall -r requirements.txt -y

## 停用虚拟环境
deactivate
```
