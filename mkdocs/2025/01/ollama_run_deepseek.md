---
prev: false
next: false
date: 2025-01-23
tags:
- ollama
- AI
- DeepSeek
categories:
- 计算机
---

# ollama 运行 DeepSeek 模型

最近 DeepSeek-R1 开源，风头无两，用 o1 几十分之一的成本训练出一个比肩 o1 的模型，而且还开源，不仅把模型开源，还把训练方法开源，而且还是 MIT 协议，随意商用

除此之外，DeepSeek 还用 R1 的蒸馏数据训练了其它几个火爆的开源模型：Qwen、Llama，推出了 `DeepSeek-R1-Distill-Llama` 和 `DeepSeek-R1-Distill-Qwen`，其中 `DeepSeek-R1-Distill-Qwen` 有 1.5B 版本

然后看网上有人说 1.5B 的小模型可以在任何设备上运行，我就心痒痒了，想在我的小破电脑上玩一下这个模型

我的电脑配置

- 12th Gen Intel(R) Core(TM) i5-12500H
- 16 GB内存

## 步骤

1. 下载 ollama

https://ollama.com/download

Windows 下载好后要把 ollama 加入到环境变量中

2. 下载模型

在魔搭社区找到[这个网页](https://www.modelscope.cn/collections/DeepSeek-R1-Distill-GGUF-eec5fee2f2ee42)，找到 `DeepSeek-R1-Distill-Qwen-1.5B`，下载模型：

```bash
git clone https://www.modelscope.cn/unsloth/DeepSeek-R1-Distill-Qwen-1.5B-GGUF.git
```

3. 创建 Modelfile 文件

进入 DeepSeek-R1-Distill-Qwen-1.5B-GGUF 文件夹

```bash
cd DeepSeek-R1-Distill-Qwen-1.5B-GGUF
```

创建 Modelfile 文件，在 Modelfile 中写入 GGUF 的路径：

```Modelfile
FROM D:\workspace\R1-Qwen\DeepSeek-R1-Distill-Qwen-1.5B-GGUF\DeepSeek-R1-Distill-Qwen-1.5B-Q2_K.gguf
```

4. 把本地模型加入到 ollama 中

```bash
ollama create DeepSeek-R1-Distill-Qwen-1.5B
```

成功会报：

```bash
gathering model components
copying file sha256:e18142b69b2dbdac59eca6bf77dde2054078003bcb9534e02e7ca1cf26eb5675 100%
parsing GGUF
using existing layer sha256:e18142b69b2dbdac59eca6bf77dde2054078003bcb9534e02e7ca1cf26eb5675
writing manifest
success
```

查看模型：

```bash
ollama list
```

报：

```bash
NAME                                    ID              SIZE      MODIFIED
DeepSeek-R1-Distill-Qwen-1.5B:latest    3c5f0a638147    752 MB    2 minutes ago
```

5. 运行

```bash
ollama run DeepSeek-R1-Distill-Qwen-1.5B:latest
```

就可以在终端里对话了

## 命令汇总

```bash
git clone https://www.modelscope.cn/unsloth/DeepSeek-R1-Distill-Qwen-1.5B-GGUF.git
```

```bash
cd DeepSeek-R1-Distill-Qwen-1.5B-GGUF
```

创建 Modelfile，并把 GGUP 的路径写入

```bash
ollama create DeepSeek-R1-Distill-Qwen-1.5B
```

```bash
ollama create DeepSeek-R1-Distill-Qwen-1.5B
```

```bash
ollama run DeepSeek-R1-Distill-Qwen-1.5B:latest
```

## 感受

ollama 很简单，很易用

1.5B 的小模型会胡言乱语

模型运行时会吃满 CPU 和内存，不能再打开第二个软件了，打开会卡死
