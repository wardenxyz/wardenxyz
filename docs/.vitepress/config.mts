import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "学习笔记",
    description: "个人站点",
    head: [
      [
        "link",
        {
          rel: 'apple-touch-icon',
          sizes: '180x180', // 修正了 'size' 为 'sizes'
          href: '/logo.svg'
        }
      ],
      [
        "link",
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/logo.svg'
        }
      ],
      [
        "link",
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/logo.svg'
        }
      ],
      ["link", { rel: "shortcut", href: "logo.svg"}]
    ],
    lastUpdated: true,
    markdown: {
      math: true
    },
    themeConfig: {
      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },
      logo: '/logo.svg', // 右上角
      lightModeSwitchTitle: "切换到浅色模式",
      darkModeSwitchTitle: "切换到深色模式",
      outlineTitle: '大纲',
      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },
      search: {
        provider: 'local'
      },
      outline: {
        level: [2, 4] // 配置显示到三级标题
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/' },
        { text: '标签', link: '/tags' },
        { text: '分类', link: '/categories' }
      ],
      sidebar: {
        '/2024/': [
          {
            text: '2024 年 10 月',
            collapsed:true,
            items: [
              { text: 'vitepress 更新文档', link: '/2024/10/vitepress 更新文档' },
              { text: '多服务共享单一域名的奥秘', link: '/2024/10/多服务共享单一域名的奥秘' },
              { text: 'git-sizer 使用', link: '/2024/10/git-sizer 使用' },
              { text: 'GitHub page 搭建学习笔记', link: '/2024/10/GitHub page 搭建学习笔记' },
              { text: 'lazy.nvim 使用心得', link: '/2024/10/lazy.nvim 使用心得' },
              { text: 'Linux 学习笔记', link: '/2024/10/Linux 学习笔记' },
              { text: 'OpenSSL 加解密学习笔记', link: '/2024/10/OpenSSL 加解密学习笔记' },
              { text: 'python 学习笔记', link: '/2024/10/python 学习笔记' },
              { text: 'Windows 删除右键菜单', link: '/2024/10/Windows 删除右键菜单' },
            ]
          },
          {
            text: '2024 年 9 月',
            collapsed:true,
            items: [
              { text: '职业规划培训', link: '/2024/09/职业规划培训' },
              { text: 'git 强制覆盖本地仓库', link: '/2024/09/git 强制覆盖本地仓库' },
            ]
          },
          {
            text: '2024 年 8 月',
            collapsed:true,
            items: [
              { text: '个人自用软件', link: '/2024/08/个人自用软件' },
              { text: '一个台湾网友的自白', link: '/2024/08/一个台湾网友的自白' },
              { text: '用 you-get 下载B站视频', link: '/2024/08/用 you-get 下载B站视频' },
              { text: 'B站嵌入代码', link: '/2024/08/B站嵌入代码' },
            ]
          },
          {
            text: '2024 年 7 月',
            collapsed:true,
            items: [
              { text: 'git-crypt 官方文档', link: '/2024/07/git-crypt 官方文档' },
              { text: 'git-crypt 官方文档中文翻译', link: '/2024/07/git-crypt 官方文档中文翻译' },
              { text: 'git-crypt 学习笔记', link: '/2024/07/git-crypt 学习笔记' },
              { text: '生成 GPG 密钥', link: '/2024/07/生成 GPG 密钥' },
            ]
          },
          {
            text: '2024 年 6 月',
            collapsed:true,
            items: [
              { text: 'git commit message 规范', link: '/2024/06/git commit message 规范' },
              { text: 'README 文档结构', link: '/2024/06/README 文档结构' },
            ]
          },
          {
            text: '2024 年 5 月',
            collapsed:true,
            items: [
              { text: 'vscode snippets 预置变量', link: '/2024/05/vscode snippets 预置变量' },
            ]
          },
          {
            text: '2024 年 4 月',
            collapsed:true,
            items: [
              { text: '彻底从 git 提交中移除文件', link: '/2024/04/彻底从 git 提交中移除文件' },
              { text: '第三方邮箱客户端配置QQmail & Foxmail', link: '/2024/04/第三方邮箱客户端配置QQmail & Foxmail' },
              { text: '浏览器UA值', link: '/2024/04/浏览器UA值' },
              { text: '神秘博士复活时间表', link: '/2024/04/神秘博士复活时间表' },
              { text: '适合做网名的英文单词', link: '/2024/04/适合做网名的英文单词' },
              { text: '手机QQ文件存储路径', link: '/2024/04/手机QQ文件存储路径' },
              { text: '现代加密学', link: '/2024/04/现代加密学' },
              { text: '正则表达式教程', link: '/2024/04/正则表达式教程' },
              { text: 'ffmpeg 自用命令', link: '/2024/04/ffmpeg 自用命令' },
              { text: 'git 分支操作', link: '/2024/04/git 分支操作' },
              { text: 'git 命令手册', link: '/2024/04/git 命令手册' },
              { text: 'GPG 在通信中的简单理解', link: '/2024/04/GPG 在通信中的简单理解' },
              { text: 'LaTeX 与希腊字母对照表', link: '/2024/04/LaTeX 与希腊字母对照表' },
              { text: 'obsidian快捷键', link: '/2024/04/obsidian快捷键' },
              { text: 'vim 学习笔记', link: '/2024/04/vim 学习笔记' },
              { text: 'vscode', link: '/2024/04/vscode' },
            ]
          },
        ]
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/wardenxyz/wardenxyz' }
      ],
      footer: {
        message: 'MIT License.',
        copyright: 'Copyright © 2024-present wardenxyz'
      }
    }
  })
)