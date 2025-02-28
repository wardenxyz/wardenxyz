---
title: GPG 在通信中的简单理解
date: 2024-04-08
tags:
- GPG
- 加密
category:
- 计算机
---

# GPG 在通信中的简单理解

[下载 gpg4win](https://gpg4win.org/index.html)

使用 GPG 加密邮件交流的前提是双方都有对方的公钥

在 RSA 加密算法中，secret key 可以推导出 public key

数字签名的实现就是以非对称加密为基础，
现有 Alice 和 Bob，他们两人都有一个密钥对

<font color=blue>A 公钥</font>  <font color=green>B 公钥</font>

<font color=blue>A 私钥</font>  <font color=green>B 私钥</font>

由于公钥是公开的，所以 Alice 和 Bob 都有对方的公钥

Alice        Bob

<font color=blue>A 公钥</font>      <font color=green>B 公钥</font>

<font color=blue>A 私钥</font>      <font color=green>B 私钥</font>

<font color=green>B 公钥</font>      <font color=blue>A 公钥</font>



场景：Alice 想要发送一段文本给 Bob

1. Alice 用 Bob 的公钥<font color=green>B 公钥</font>加密原始数据
2. Alice 再计算出加密后数据的哈希值，再用自己的私钥<font color=blue>A 私钥</font>加密哈希值，这一步就是数字签名，再将加密后的文本和加密后的哈希值一起打包发送给 Bob
3. Bob 收到 Alice 的数据后用 Alice 的公钥<font color=blue>A 公钥</font>解密哈希值，再与传输过来的数据校验，如果 Bob 解密后的而哈希值与传输过来的加密数据哈希值一致则可以确定是 Alice 发送的
4. Bob 用自己的私钥<font color=green>B 私钥</font>解密数据，得到数据

解密需要公钥，数字签名中私钥签名，公钥解密




