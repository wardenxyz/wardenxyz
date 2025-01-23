import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    cleanUrls: true,
    srcDir: 'mkdocs',
    outDir: 'html',
    cacheDir: 'cache',
    title: "学习笔记",
    description: "个人站点",
    themeConfig: {

      nav: [
        { text: '首页', link: '/' },
        { text: '标签', link: '/tags' },
        { text: '分类', link: '/categories' },
        { text: '2024 年', link: '/2024/04/remove_file_from_git_history' },
        { text: '2025 年', link: '/2025/01/ollama_run_deepseek' }
      ],

      sidebar: {
        '/2025/': [
          {
            text: '2025 年 1 月',
            collapsed: true,
            items: [
              { text: 'ollama 运行 DeepSeek 模型', link: '/2025/01/ollama_run_deepseek' },
            ]
          },
        ],
        '/2024/': [
          {
            text: '2024 年 12 月',
            collapsed: true,
            items: [
              { text: 'Pull Request 的步骤', link: '/2024/12/pull_request_steps' },
            ]
          },
          {
            text: '2024 年 11 月',
            collapsed: true,
            items: [
              { text: 'Typst 笔记', link: '/2024/11/Typst_note' },
            ]
          },
          {
            text: '2024 年 10 月',
            collapsed: true,
            items: [
              { text: 'git 重置当前分支', link: '/2024/10/git_reset' },
              { text: 'vitepress 学习笔记', link: '/2024/10/vitepress_note' },
              { text: 'GitHub page 搭建学习笔记', link: '/2024/10/deploy_gitHub_page' },
              { text: 'git-sizer 学习笔记', link: '/2024/10/git-izer_note' },
              { text: 'lazy.nvim 学习笔记', link: '/2024/10/lazy.nvim_note' },
              { text: 'Linux 学习笔记', link: '/2024/10/Linux_note' },
              { text: 'OpenSSL 加解密学习笔记', link: '/2024/10/OpenSSL_encrypt_note' },
              { text: 'python 学习笔记', link: '/2024/10/python_note' },
              { text: 'Windows 删除右键菜单', link: '/2024/10/windows_delete_right_click_menu' },
            ]
          },
          {
            text: '2024 年 9 月',
            collapsed: true,
            items: [
              { text: 'git 强制覆盖本地仓库', link: '/2024/09/git_force_overwrite_local_repo' },
            ]
          },
          {
            text: '2024 年 8 月',
            collapsed: true,
            items: [
              { text: '个人自用软件', link: '/2024/08/personal_software' },
              { text: '用 you-get 下载B站视频', link: '/2024/08/you-get_note' },
              { text: 'B站嵌入代码', link: '/2024/08/bilibili_embedding_code' },
            ]
          },
          {
            text: '2024 年 7 月',
            collapsed: true,
            items: [
              { text: 'git-crypt 官方文档', link: '/2024/07/git-crypt_official_doc' },
              { text: 'git-crypt 官方文档中文翻译', link: '/2024/07/git-crypt_official_doc_zh' },
              { text: 'git-crypt 学习笔记', link: '/2024/07/git-crypt_note' },
              { text: '生成 GPG 密钥', link: '/2024/07/gen_GPG_key' },
            ]
          },
          {
            text: '2024 年 6 月',
            collapsed: true,
            items: [
              { text: 'git commit message 规范', link: '/2024/06/git_commit_message_standard' },
              { text: 'README 文档结构', link: '/2024/06/README_outline' },
            ]
          },
          {
            text: '2024 年 5 月',
            collapsed: true,
            items: [
              { text: 'vscode snippets 预置变量', link: '/2024/05/vscode_snippets_variable' },
            ]
          },
          {
            text: '2024 年 4 月',
            collapsed: true,
            items: [
              { text: '彻底从 git 提交中移除文件', link: '/2024/04/remove_file_from_git_history' },
              { text: '第三方邮箱客户端配置QQmail & Foxmail', link: '/2024/04/qqmail_third_party_config' },
              { text: '浏览器UA值', link: '/2024/04/browser_UA_value' },
              { text: '神秘博士复活时间表', link: '/2024/04/former_doctor_who' },
              { text: '手机QQ文件存储路径', link: '/2024/04/android_QQ_file_storage_path' },
              { text: '现代加密学', link: '/2024/04/modern_cryptography' },
              { text: '正则表达式教程', link: '/2024/04/regex_note' },
              { text: 'ffmpeg 自用命令', link: '/2024/04/ffmpeg_note' },
              { text: 'git 分支操作', link: '/2024/04/git_branch' },
              { text: 'git 命令手册', link: '/2024/04/git_Cli' },
              { text: 'GPG 在通信中的简单理解', link: '/2024/04/gpg_communication' },
              { text: 'LaTeX 与希腊字母对照表', link: '/2024/04/LaTeX_note' },
              { text: 'obsidian快捷键', link: '/2024/04/obsidian_shortcut_key' },
              { text: 'vim 学习笔记', link: '/2024/04/vim_note' },
              { text: 'vscode', link: '/2024/04/vscode_note' },
            ]
          },
        ]
      },

      logo: '/logo.svg', // 右上角
      socialLinks: [
        { icon: 'github', link: 'https://github.com/wardenxyz/wardenxyz' }
      ],
      footer: {
        message: 'MIT License.',
        copyright: 'Copyright © 2024-present wardenxyz'
      },
      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },
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
    },
    markdown: {
      math: true,
      lineNumbers: true // 代码块显示行号
    },
    lastUpdated: true,
    head: [ // 图标配置
      [
        "link",
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
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
      ["link", { rel: "shortcut", href: "logo.svg" }]
    ],
  })
)
