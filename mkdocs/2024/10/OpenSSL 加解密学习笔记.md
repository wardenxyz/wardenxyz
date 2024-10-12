---
date: 2024-10-06
tags:
- OpenSSL
- 加密
categories:
- 计算机
---

# OpenSSL 加解密学习笔记

## 加解密命令

加密命令：

```bash
openssl enc -p -aes-256-cbc -pbkdf2 -iter 20000 -pass pass:somepassword -in ./sometext.txt -out ./sometext.txt.enc
```

这是一个使用 OpenSSL 的命令行命令，用于加密文件内容。下面是对这个命令的详细解释：

- `openssl`: 这是 OpenSSL 的命令行工具，用于处理各种加密操作。

- `enc`: 这是 OpenSSL 的一个子命令，用于处理各种编码和解码操作。

- `-p`: 这个选项会打印出加密过程中使用的盐值（salt）和密钥。

- `-aes-256-cbc`: 这是加密算法的名称，这里使用的是 AES 256 位的 CBC 模式。

- `-pbkdf2`: 这是一个密码基础的密钥派生函数，用于从密码生成密钥。

- `-iter 20000`: 这个选项设置了 PBKDF2 函数的迭代次数。

- `-pass pass:somepassword`: 这个选项设置了用于生成密钥的密码。

- `-in ./sometext.txt`: 这个选项指定了要加密的输入文件。

- `-out ./sometext.txt.enc`: 这个选项指定了加密后的输出文件。

总的来说，这个命令使用了 AES-256-CBC 算法和 PBKDF2 密钥派生函数，以及一个密码，对一个文件进行了加密，并将加密后的结果输出到另一个文件。同时，它还会打印出加密过程中使用的盐值和密钥。

加密命令：

```bash
openssl enc -d -p -aes-256-cbc -pbkdf2 -iter 20000 -pass pass:somepassword -in ./sometext.txt.enc -out ./sometext.txt
```

这是一个使用 OpenSSL 的命令行命令，用于解密文件内容。下面是对这个命令的详细解释：

- `openssl`: 这是 OpenSSL 的命令行工具，用于处理各种加密操作。

- `enc`: 这是 OpenSSL 的一个子命令，用于处理各种编码和解码操作。

- `-d`: 这个选项表示我们要进行解密操作。

- `-p`: 这个选项会打印出解密过程中使用的盐值（salt）和密钥。

- `-aes-256-cbc`: 这是加密算法的名称，这里使用的是 AES 256 位的 CBC 模式。

- `-pbkdf2`: 这是一个密码基础的密钥派生函数，用于从密码生成密钥。

- `-iter 20000`: 这个选项设置了 PBKDF2 函数的迭代次数。

- `-pass pass:somepassword`: 这个选项设置了用于生成密钥的密码。

- `-in ./sometext.txt.enc`: 这个选项指定了要解密的输入文件。

- `-out ./sometext.txt`: 这个选项指定了解密后的输出文件。

总的来说，这个命令使用了 AES-256-CBC 算法和 PBKDF2 密钥派生函数，以及一个密码，对一个加密的文件进行解密，并将解密后的结果输出到另一个文件。同时，它还会打印出解密过程中使用的盐值和密钥。

---

## 用文件密钥加密

OpenSSL 的 `enc` 命令不直接支持同时使用密码和密钥文件进行加密

OpenSSL支持许多加密算法，其中一些可以使用文件密钥和数字密钥一起进行加密。在这种情况下，通常会使用一个密钥派生函数（如PBKDF2或scrypt）来从文件密钥和数字密钥派生出一个加密密钥。

例如，你可以使用以下命令来使用AES-256-CBC模式和PBKDF2密钥派生函数进行加密：

```bash
openssl enc -aes-256-cbc -pbkdf2 -in plaintext.txt -out ciphertext.bin -pass file:./keyfile
```

解密：

```bash
openssl enc -aes-256-cbc -pbkdf2 -d -in ciphertext.bin -out plaintext.txt -pass file:./keyfile
```

在这个命令中：

- `enc -aes-256-cbc`表示使用AES-256-CBC模式进行加密。
- `-pbkdf2`表示使用PBKDF2密钥派生函数。
- `-in plaintext.txt`表示输入文件是`plaintext.txt`。
- `-out ciphertext.bin`表示输出文件是`ciphertext.bin`。
- `-pass file:./keyfile`表示密码是从文件`./keyfile`中读取的。

注意，这只是一个示例。实际使用时，你应该根据你的具体需求和环境选择合适的加密算法和密钥派生函数，并妥善保管你的密钥。

## 生成一个包含随机数据的二进制文件

你可以使用OpenSSL的`rand`命令来生成一个无意义的二进制文件。以下是一个示例：

```bash
openssl rand -out random.bin 1024
```

在这个命令中：

- `rand`是OpenSSL的一个命令，用于生成随机数。
- `-out random.bin`表示输出文件是`random.bin`。
- `1024`是一个参数，表示要生成的随机数的字节数。

这个命令会生成一个包含1024字节随机数据的文件 `random.bin`。

你可以根据需要更改这个命令。例如，如果你想生成一个更大的文件，你可以将 `1024` 更改为其他的数字。

`1024`在这个命令中表示的是生成1024字节（即1KB）的随机数据。在计算机中，1KB等于1024字节。

如果你想生成一个1024KB（即1MB）的文件，你应该使用 `1048576`（即1024*1024）作为参数，如下所示：

```bash
openssl rand -out random.bin 1048576
```

这个命令会生成一个包含1048576字节（即1024KB或1MB）随机数据的文件 `random.bin`。

---

## OpenSSL 检测哈希值

在 OpenSSL 中，你可以使用 `dgst` 命令来计算文件的哈希值。以下是具体的步骤：

1. 首先，你需要打开终端。
2. 然后，导航到包含你想要检测的文件的目录。
3. 使用 `openssl dgst` 命令加上你想要使用的哈希算法和文件名。

例如，如果你想要计算一个文件的 SHA-256 哈希值，你可以使用以下的命令：

```bash
openssl dgst -sha256 filename
```

请将 `filename` 替换为你想要检测的文件的名称。

这个命令会计算文件的 SHA-256 哈希值，并将结果打印到终端。

---

## 生成 RSA 密钥

在 OpenSSL 中，你可以使用以下的命令来生成 RSA 密钥对：

```bash
openssl genpkey -algorithm RSA -out private_key.pem
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

这两个命令的意思是：

- `openssl genpkey -algorithm RSA -out private_key.pem`：这个命令会生成一个 RSA 私钥，并将其保存到 `private_key.pem` 文件中。

- `openssl rsa -pubout -in private_key.pem -out public_key.pem`：这个命令会从 `private_key.pem` 文件中提取公钥，并将其保存到 `public_key.pem` 文件中。

完成以上步骤后，你就会得到一个 RSA 密钥对，私钥保存在 `private_key.pem` 文件中，公钥保存在 `public_key.pem` 文件中。

---

## OpenSSL 支持哪些算法，全部列出来

OpenSSL 支持多种加密算法，包括对称加密算法、非对称加密算法和哈希函数。你可以使用以下的命令来列出 OpenSSL 支持的所有算法：

1. **列出所有的对称加密算法：**

    ```bash
    openssl list -cipher-algorithms
    ```

2. **列出所有的非对称加密算法：**

    ```bash
    openssl list -public-key-algorithms
    ```

3. **列出所有的哈希函数：**

    ```bash
    openssl list -digest-commands
    ```

这些命令会列出 OpenSSL 支持的所有对应类型的算法。请注意，可用的算法可能会根据你的 OpenSSL 版本和配置有所不同。
