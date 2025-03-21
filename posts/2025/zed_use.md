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

如果你想创建针对 JavaScript 文件的代码片段，你的文件将是 `javascript.json`

## 格式化

`ctrl+shift+i` 保存加格式化

## 我的 Zed 配置(2025-03-21 更新)

```json
{
	// "base_keymap": "VSCode", //键盘快捷键

	// "vim_mode": true, //vim 模式
	// "relative_line_numbers": true, //相对行号

	"show_edit_predictions": false,
	"theme": "One Dark", //主题

	"buffer_line_height": "comfortable", //行高

	"buffer_font_family": "JetBrains Mono", //编辑区字体
	"buffer_font_size": 17, //编辑区字体大小
	"buffer_font_fallbacks": ["JetBrains Mono"], //编辑区后备字体
	"ui_font_family": "Zed Plex Mono", //UI 字体
	"ui_font_size": 17, //UI 大小
	"show_whitespaces": "all", //显示空格
	"buffer_font_features": {
		"calt": false //连字，false 表示关闭
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
					"name": "qwq-plus",
					"display_name": "QwQ-Plus",
					"max_tokens": 131072,
					"max_output_tokens": 8192
				},
				{
					"name": "qwq-32b",
					"display_name": "QwQ-32B",
					"max_tokens": 131072,
					"max_output_tokens": 8192
				},
				{
					"name": "deepseek-r1",
					"display_name": "DeepSeek-R1",
					"max_tokens": 65792
				},
				{
					"name": "deepseek-v3",
					"display_name": "DeepSeek-V3",
					"max_tokens": 65792
				}
			],
			"version": "1"
		}
	},

	"features": {
		"edit_prediction_provider": "zed" // tab 编辑预测（不可选自己的模型）
	},

	"enable_language_server": true, //lsp 功能

	"jupyter": {
		"enabled": false
	},

	"terminal": {
		"copy_on_select": true //终端选择即复制
	},

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
		"axes": {
			"horizontal": false,
			"vertical": true
		},
		"show": "always"
	},

	"git": {
		"git_gutter": "tracked_files", //在文件中显示 git 变动
		//显示 git 提交消息
		"inline_blame": {
			"enabled": true,
			"show_commit_summary": false, //显示提交信息
			"delay_ms": 200
		}
	},

	"hard_tabs": true, //显示 tab 标识而不是显示空格

	"languages": {
		"Typst": {
			"show_edit_predictions": false,
			"format_on_save": "on",
			"formatter": {
				"external": {
					"command": "typstyle"
				}
			}
		},
		// 禁用以下语言的服务
		"Markdown": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "on" //保存时自动格式
		},
		"Rust": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "off"
		},
		"JavaScript": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "off"
		},
		"TypeScript": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "off"
		},
		"Go": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "off"
		},
		"HTML": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "off"
		},
		"Java": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "off"
		},
		"Kotlin": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "off"
		},
		"PHP": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "off"
		},
		"Python": {
			"enable_language_server": false,
			"show_edit_predictions": true,
			"format_on_save": "off"
		},
		"Vue": {
			"enable_language_server": false,
			"show_edit_predictions": false,
			"format_on_save": "off"
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
		"file_icons": true, //顶部 tab 页的文件图标
		"git_status": true // 顶部 tab 页显示 git 状态
	},

	"confirm_quit": true, //关闭应用程序之前是否提示用户

	"soft_wrap": "editor_width", //软换行

	"auto_update": false,

	"lsp": {
		"tinymist": {
			"initialization_options": {
				// "exportPdf": "onSave",//保存时编译 pdf
				"outputPath": "$root/$name"
			}
		}
	}
}
```
