---
title: Typst 笔记
date: 2024-11-27
tags: [Typst]
category: [计算机]
---

# Typst 笔记

[Tyspt 官方文档](https://typst.app/docs)

## 导出命令

- 默认导出为 pdf

```bash
typst c main.typ 
```

- 导出第四页到 output-4.pdf

```bash
typst c main.typ output-4.pdf -f pdf --pages 4 
```

- 导出第四页到 output-4.png

```bash
typst c main.typ output-4.png -f png --pages 4 
```

- 导出第四页到 output-4.svg

```bash
typst c main.typ output-4.svg -f svg --pages 4 
```

## 标题

```typst
= 第一级大标题
== 第二级大标题
```

## 无序列表

```typst
- 无序列表
```

## 有序列表

```typst
1. 有序列表
+ 有序列表
```

## 加重字体

```typst
*加重字体*
```

## 斜体

```typst
_斜体_
```

## 字体

全局：

```typst
#set text(font: "kaiti", fill: red, size: 12pt)
大小为12磅，字体为楷体的红色内容
```

局部：

```typst
#text(font: "kaiti", fill: red, size: 12pt)[大小为12磅，字体为楷体的红色内容]
```

## 位置

全局：

```typst
#set align(left)
居左
```

局部：

```typst
#align(left)[居左]
```

## 下划线

```typst
#underline[此处有下划线]
```

## 上划线

```typst
#overline[此处有上划线]
```

## 上标

```typst
#super[这里是上标内容]
```

## 下标

```typst
#sub[这里是下标内容]
```

## 删除线

```typst
#strike[被删除的内容]
```

## 高亮

```typst
#highlight[高亮内容]
```

## 链接

```typst
#link("https://baidu.com")[百度]
```

## 字间距&行间距

```typst
#set par(leading: 18pt) //行间距
#set text(tracking: 0.1pt) //字间距
```

## 文档属性

```typst
#set document(
  title: title,
  author: author,
  keywords: str,array,
  date: none, auto,datetime,
)
```

## 页边距

```typst
  #set page(margin: (
    top: 2.54cm, //上边距
    bottom: 2.54cm, //下边距
    right: 2.54cm, //右边距
    left: 2.54cm, //左边距
  ))
```

## 水印

```typst
#set page(background: rotate(45deg,
  text(50pt, fill: rgb("FFCBC4"))[
    *这是水印*
  ]
))
```

## 引用

```typst
#set quote(block: true) //开启引用块

#quote(attribution: [引用文本的来源])[
  引用的文本
]
```

## 大纲

```typst
#outline()
```

## 空白页

```typst
#pagebreak()
```

## 插入图片

```typst
#image("4.jpeg")
```

## 页眉

```typst
#set page(header: [
  页眉
  #h(1fr)
  页眉
  #v(-8pt) // 页眉内容与线的距离
  #line(length: 100%, stroke: (thickness: 1pt, dash: "solid"))
])
```

## 页脚

```typst
#set page(footer: context [
  #v(8pt) //页脚与边距的距离
  #line(length: 100%, stroke: (thickness: 1pt, dash: "solid"))
  #v(-8pt) // 页脚内容与线的距离
  页脚
  #h(1fr)
  #counter(page).display(
    "1/1",
    both: true,
  )
])
```
