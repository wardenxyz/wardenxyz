---
title: 在 Zed Editor 中配置 OpenAI API 兼容的模型
date: 2025-03-14
tags: [zed]
category: [计算机]
---

# 在 Zed Editor 中配置 OpenAI API 兼容的模型

在 setting.json 中写入

```json
"language_models": {
		"openai": {
			"api_url": "https://dashscope.aliyuncs.com/compatible-mode/v1",
			"available_models": [
				{
					"name": "deepseek-r1",
					"display_name": "DeepSeek-R1",
					"max_tokens": 65792,
					"max_output_tokens": 2056
				},
			],
			"version": "1"
		}
	},
```

接下来，在 Zed Editor 的 Assistant Panel Configuration 界面中，
找到 OpenAI 配置项，在此处输入阿里云 API 密钥，确认后按回车键保存配置。

完成上述步骤后，即可在 Zed Editor 中流畅地使用 AI 功能了。

## 感受

Zed 的 AI 功能不仅限于代码编写，更拓展到了创作领域。用户只需选中任意段落，即可轻松实现文章润色、多语言翻译或创意发想等操作

反观 VSCode 的 GitHub Copilot 功能，其适用范围相对局限，主要聚焦于代码开发领域。
虽然有第三方插件，但与 vscode 的兼容性欠佳，难以获得与 GitHub Copilot 一致的优质体验。

Zed 有 **Git、AI、实时协作**三大功能，我感觉基于 Zed 可以玩出更多花样来。
