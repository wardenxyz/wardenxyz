---
title: 生成 GPG 密钥
date: 2024-07-10
tags: [GPG]
category: [计算机]
---

# 生成 GPG 密钥

下载 GPG：[gpg4win](https://www.gpg4win.org/)

生成 gpg 密钥

```bash
gpg2 --full-gen-key      < 2.1.17
gpg --full-generate-key  >= 2.1.17
```

```bash
gpg (GnuPG) 2.4.3; Copyright (C) 2023 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
   (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (14) Existing key from card
Your selection? 1           <--选择密钥类型
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072)         <--选择密钥长度，在 1024到4096 之间，默认为 3072
Requested keysize is 3072 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days    <-- <n>  = 密钥在 n 天后过期
      <n>w = key expires in n weeks   <-- <n>w = 密钥在 n 周后过期
      <n>m = key expires in n months  <-- <n>m = 密钥在 n 月后过期
      <n>y = key expires in n years   <-- <n>y = 密钥在 n 年后过期
Key is valid for? (0)     <--选择密钥有效期
Key does not expire at all
Is this correct? (y/N)   <--确认

GnuPG needs to construct a user ID to identify your key.

Real name: YOUR_NAME      <--输入密钥名称
Email address: test@test.com       <--输入密钥邮箱
Comment: test          <--输入密钥注释
You are using the 'utf-8' character set.
You selected this USER-ID:
    "YOUR_NAME (test) <test@test.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o  <--最终确认，如果你想修改密钥名称则输入 n，以此类推，最终确认则输入 o
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.    <--这一步输入密钥密码
gpg: revocation certificate stored as 'C:\\Users\\user\\AppData\\Roaming\\gnupg\\openpgp-revocs.d\\095A4F5A6125D5EB02FE5CB824B8F8F7EAFFD84D.rev'
public and secret key created and signed.

pub   rsa3072 2024-02-25 [SC]
      095A4F5A6125D5EB02FE5CB824B8F8F7EAFFD84D
uid                      YOUR_NAME (test) <test@test.com>
sub   rsa3072 2024-02-25 [E]
```
