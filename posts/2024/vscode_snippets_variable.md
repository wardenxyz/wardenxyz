---
title: vscode snippets 预置变量
date: 2024-05-01
tags: [vscode]
category: [计算机]
---

# vscode snippets 预置变量

在 Visual Studio Code 中，你可以使用许多预定义的变量来创建代码片段（snippets）。以下是一些常用的预定义变量：

## 常用变量

- `$TM_SELECTED_TEXT`：当前选中的文本。
- `$TM_CURRENT_LINE`：当前行的内容。
- `$TM_CURRENT_WORD`：光标下的单词内容。
- `$TM_LINE_INDEX`：当前行的索引（基于0）。
- `$TM_LINE_NUMBER`：当前行号（基于1）。
- `$TM_FILENAME`：当前文档的文件名。
- `$TM_FILENAME_BASE`：当前文档的文件名，不包含扩展名。
- `$TM_DIRECTORY`：当前文档的目录。
- `$TM_FILEPATH`：当前文档的完整文件路径。
- `$RELATIVE_FILEPATH`：当前文档相对于工作区根目录的路径。
- `$CLIPBOARD`：剪贴板的内容。
- `$WORKSPACE_NAME`：打开的工作区的名称。
- `$WORKSPACE_FOLDER`：打开的工作区的路径。
- `$CURSOR_INDEX`：光标索引（基于0）。
- `$CURSOR_NUMBER`：光标编号（基于1）。

## 日期和时间变量

- `$CURRENT_YEAR`：当前年份。
- `$CURRENT_YEAR_SHORT`：当前年份的最后两位数字。
- `$CURRENT_MONTH`：当前月份。
- `$CURRENT_MONTH_NAME`：当前月份的全称。（十月）
- `$CURRENT_MONTH_NAME_SHORT`：当前月份的简称。（10月）
- `$CURRENT_DATE`：当前日期。
- `$CURRENT_DAY_NAME`：当前星期几的全称。（星期一）
- `$CURRENT_DAY_NAME_SHORT`：当前星期几的简称。（周一）
- `$CURRENT_HOUR`：当前小时。
- `$CURRENT_MINUTE`：当前分钟。
- `$CURRENT_SECOND`：当前秒数。
- `$CURRENT_SECONDS_UNIX`：当前 Unix 时间戳。
- `$CURRENT_TIMEZONE_OFFSET`：当前的 UTC 时间偏移量表示为 `+HH:MM` 或 `-HH:MM`（例如`-07:00`）。

## 随机数和 UUID

- `$RANDOM`：一个随机整数。
- `$RANDOM_HEX`：一个随机的十六进制字符串。
- `$UUID`：一个随机的 UUID。

## 注释标记

- `$BLOCK_COMMENT_START`：块注释的开始标记。
- `$BLOCK_COMMENT_END`：块注释的结束标记。
- `$LINE_COMMENT`：行注释的标记。

以下代码片段在JavaScript文件中插入 `/* Hello World */`，并在HTML文件中插入 `<!-- Hello World -->`：

```json
{
    "hello": {
        "scope": "javascript,html",
        "prefix": "hello",
        "body": "$BLOCK_COMMENT_START Hello World $BLOCK_COMMENT_END"
    }
}
```

更多关于代码片段的信息 [Visual Studio Code 的官方文档](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)。
