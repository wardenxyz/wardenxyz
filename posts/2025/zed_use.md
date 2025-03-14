---
title: zed 使用笔记
date: 2025-03-11
tags: [zed]
category: [计算机]
---

# zed 使用笔记

系统：Windows11 24H2

下载：https://github.com/deevus/zed-windows-builds

## settings.json

https://zed.dev/docs/configuring-zed

```bash
C:\Users\admin\AppData\Roaming\Zed
```

## snippets.json

https://zed.dev/docs/snippets

```bash
C:\Users\admin\AppData\Roaming\Zed
```

示例：

```json
{
	"zed snippets": {
		"body": "Zed is a good editor.",
		"description": "zed snippets example",
		"prefix": "zed"
	}
}
```

zed snippets 没有 scope 概念，如果你想创建针对 JavaScript 文件的代码片段，你的文件将是 `javascript.json`

## 格式化

`ctrl+shift+i` 保存加格式化

## 我的 Zed 配置(2025-03-14 更新)

```json
{
	// "base_keymap": "VSCode", //键盘快捷键

	// "vim_mode": true, //vim 模式
	// "relative_line_numbers": true, //相对行号

	"theme": "One Dark", //主题

	"buffer_line_height": "comfortable", //行高

	"ui_font_size": 17, //UI 大小
	"buffer_font_size": 17, //字体大小
	"show_whitespaces": "all", //显示空格
	"buffer_font_features": {
		"calt": false //连字
	},

	// AI 助手
	"assistant": {
		"default_model": {
			"provider": "openai",
			"model": "deepseek-v3"
		},
		"inline_alternatives": [
			{
				"provider": "openai",
				"model": "deepseek-v3"
			}
		],
		"button": true,
		"version": "2"
	},

	//语言模型
	"language_models": {
		"openai": {
			"api_url": "https://dashscope.aliyuncs.com/compatible-mode/v1",
			"available_models": [
				{
					"name": "qwen-max-0125",
					"display_name": "Qwen2.5-Max",
					"max_tokens": 32768,
					"max_output_tokens": 2056
				},
				{
					"name": "deepseek-r1",
					"display_name": "DeepSeek-R1",
					"max_tokens": 65792,
					"max_output_tokens": 2056
				},
				{
					"name": "qwq-plus",
					"display_name": "QwQ-Plus",
					"max_tokens": 131072,
					"max_output_tokens": 2056
				},
				{
					"name": "deepseek-v3",
					"display_name": "DeepSeek-V3",
					"max_tokens": 65792,
					"max_output_tokens": 2056
				}
			],
			"version": "1"
		}
	},

	"features": {
		"edit_prediction_provider": "copilot" // tab 编辑预测（不可选自己的模型）
	},

	"enable_language_server": true, //language_server 服务

	//顶部功能区
	"tab_bar": {
		"show": true,
		"show_nav_history_buttons": true,
		"show_tab_bar_buttons": true
	},
	//大纲栏位置
	"outline_panel": {
		"dock": "right"
	},
	//协作面板
	"collaboration_panel": {
		"button": false
	},
	//通知面板
	"notification_panel": {
		"button": false
	},

	//类似日记本的功能，可全局唤出
	"journal": {
		"path": "D:\\workspace\\A-Next",
		"hour_format": "hour24"
	},

	"use_smartcase_search": true, //如果搜索查询包含任何大写字母，则搜索将区分大小写；如果它只包含小写字母，则搜索将不区分大小写

	//滚动条
	"scrollbar": {
		"show": "always"
	},

	"git": {
		"git_gutter": "tracked_files", //在文件中显示 git 变动
		//显示 git 提交消息
		"inline_blame": {
			"enabled": true,
			"show_commit_summary": false, //显示提交信息
			"delay_ms": 500
		}
	},

	"hard_tabs": true, //显示 tab 标识而不是显示空格

	"languages": {
		"Typst": {
			"show_edit_predictions": true
		},
		"Markdown": {
			"show_edit_predictions": true,
			"format_on_save": "on" //保存时自动格式化
		}
	},

	"vertical_scroll_margin": 6, //光标上下文

	// 以下不会显示在左侧文件树中
	"file_scan_exclusions": [
		"**/.svn",
		"**/.hg",
		"**/CVS",
		"**/.DS_Store",
		"**/Thumbs.db",
		"**/.classpath",
		"**/vendor",
		"**/.tmp*",
		"**/.git"
	],

	//缩进配置
	"indent_guides": {
		"coloring": "indent_aware" //缩进线颜色
		// "background_coloring": "indent_aware" //缩进背景颜色
	},

	//自动保存
	"autosave": {
		"after_delay": {
			"milliseconds": 1000
		}
	},

	//遥测
	"telemetry": {
		"diagnostics": true,
		"metrics": true
	},

	"tabs": {
		"file_icons": true //顶部 tab 页的文件图标
	},

	"confirm_quit": true, //关闭应用程序之前是否提示用户

	"soft_wrap": "editor_width", //软换行

	"lsp": {
		"omnisharp": {
			"binary": {
				"ignore_system_version": true
			}
		}
	}
}
```
