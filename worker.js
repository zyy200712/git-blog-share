// 博客配置
const CONFIG = {
    title: '舥舥🔭兹',
    favicon: 'https://tc.r07.cloudns.be/截图20250418170311.png',
    enablePasswordProtection: true   // 设置为true时启用密码验证，false时禁用
};

// 古诗词数据
const POEMS = [
    {
        content: "人生若只如初见，何事秋风悲画扇。",
        author: "纳兰性德",
        title: "木兰词·拟古决绝词柬友"
    },
    {
        content: "衣带渐宽终不悔，为伊消得人憔悴。",
        author: "柳永",
        title: "蝶恋花"
    },
    {
        content: "曾经沧海难为水，除却巫山不是云。",
        author: "元稹",
        title: "离思五首·其四"
    },
    {
        content: "落霞与孤鹜齐飞，秋水共长天一色。",
        author: "王勃",
        title: "滕王阁序"
    },
    {
        content: "人间万事消磨尽，只有清香似旧时。",
        author: "刘方平",
        title: "春怨"
    },
    {
        content: "此情可待成追忆，只是当时已惘然。",
        author: "李商隐",
        title: "锦瑟"
    },
    {
        content: "红豆生南国，春来发几枝。愿君多采撷，此物最相思。",
        author: "王维",
        title: "相思"
    },
    {
        content: "春风又绿江南岸，明月何时照我还。",
        author: "王安石",
        title: "泊船瓜洲"
    },
    {
        content: "长风破浪会有时，直挂云帆济沧海。",
        author: "李白",
        title: "行路难"
    },
    {
        content: "醉后不知天在水，满船清梦压星河。",
        author: "唐温如",
        title: "题龙阳县青草湖"
    }
];

// 样式定义
const styles = `
<style>
    :root {
        /* 深色主题变量 */
        --dark-main-bg: #1a1a1a;
        --dark-text-color: #e0e0e0;
        --dark-text-color-secondary: #888888;
        --dark-border-color: #30363d;
        --dark-link-color: #60a5fa;
        --dark-header-bg: #242424;
        --dark-content-bg: #1e1e1e;
        --dark-hover-bg: rgba(255, 255, 255, 0.05);
        --dark-code-bg: #2d2d2d;
        --dark-blockquote-bg: #2d2d2d;
        --dark-scrollbar-color: #4a4a4a;
        
        /* 浅色主题变量 - 调整后的颜色 */
        --light-main-bg: #f5f5f5;
        --light-text-color: #2c3e50;
        --light-text-color-secondary: #666666;
        --light-border-color: #e0e0e0;
        --light-link-color: #2563eb;
        --light-header-bg: #f5f5f5;
        --light-content-bg: #fffafa;
        --light-hover-bg: rgba(0, 0, 0, 0.05);
        --light-code-bg: #f0f0f0;
        --light-blockquote-bg: #f3f4f6;
        --light-scrollbar-color: #c0c0c0;
        
        /* 当前主题变量 */
        --main-bg-color: var(--dark-main-bg);
        --main-text-color: var(--dark-text-color);
        --text-color-secondary: var(--dark-text-color-secondary);
        --border-color: var(--dark-border-color);
        --link-color: var(--dark-link-color);
        --header-bg: var(--dark-header-bg);
        --content-bg: var(--dark-content-bg);
        --hover-bg: var(--dark-hover-bg);
        --code-bg: var(--dark-code-bg);
        --blockquote-bg: var(--dark-blockquote-bg);
        --scrollbar-color: var(--dark-scrollbar-color);
        
        --sidebar-width: 250px;
        --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        --font-sans: 'SF Pro Text', -apple-system, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 
            'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        --font-serif: 'Noto Serif SC', 'Source Han Serif SC', 'Source Han Serif', source-han-serif-sc,
            'PT Serif', 'SongTi SC', 'MicroSoft Yahei', Georgia, serif;
        --font-mono: 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    }

    /* 添加过渡效果 */
    * {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }

    /* 浅色主题类 */
    :root[data-theme='light'] {
        --main-bg-color: var(--light-main-bg);
        --main-text-color: var(--light-text-color);
        --text-color-secondary: var(--light-text-color-secondary);
        --border-color: var(--light-border-color);
        --link-color: var(--light-link-color);
        --header-bg: var(--light-header-bg);
        --content-bg: var(--light-content-bg);
        --hover-bg: var(--light-hover-bg);
        --code-bg: var(--light-code-bg);
        --blockquote-bg: var(--light-blockquote-bg);
        --scrollbar-color: var(--light-scrollbar-color);
    }

    /* 主题切换按钮样式 */
    .theme-toggle {
        position: fixed;
        right: 20px;
        bottom: 120px;  /* 在留言板按钮上方 */
        width: 40px;
        height: 40px;
        background: var(--link-color);
        color: #fff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        transition: background 0.3s;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .theme-toggle:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        .theme-toggle {
            right: 15px;
            bottom: 115px;
        }
    }

    body {
        margin: 0;
        font-family: var(--font-sans);
        background-color: var(--main-bg-color);
        color: var(--main-text-color);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .header {
        background-color: var(--header-bg);
        border-bottom: 1px solid var(--border-color);
        padding: 1rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10;
    }
    
    .header.hidden {
        transform: translateY(-100%);
    }

    /* 当鼠标悬停在header区域时显示 */
    .header:hover {
        transform: translateY(0);
    }

    /* 添加一个透明的触发区域 */
    .header::before {
        content: '';
        position: absolute;
        top: -20px;
        left: 0;
        right: 0;
        height: 20px;
    }

    .header .site-logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
    .header .header-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .header .header-right {
        display: flex;
        gap: 20px;
        margin-right: 20px;
    }
    .header a {
        color: var(--main-text-color);
        text-decoration: none;
        font-family: var(--font-serif);
    }
    .header .header-center a {
        font-size: 1.5rem;
        font-weight: 600;
    }
    .header .header-right a {
        font-size: 1rem;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }
    .header .header-right a:hover {
        opacity: 1;
        color: var(--link-color);
    }
    .layout {
        display: flex;
        width: 100%;
    }
    .sidebar, .toc {
        width: 250px;
        flex: 0 0 250px;
        padding: 20px;
        position: sticky;
        top: 0;
        height: 100vh;
        overflow-y: auto;
    }
    .content {
        flex: 1;
        min-width: 0;
        padding: 30px 50px;
        overflow-y: auto;
    }
    .post-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .post-item {
        padding: 12px 0;
        border-bottom: 1px solid var(--border-color);
        transition: all 0.2s ease;
    }
    .post-item:hover {
        background-color: var(--hover-bg);
        transform: translateX(4px);
    }
    .post-item a {
        color: var(--main-text-color);
        text-decoration: none;
        display: block;
        padding: 12px;
        border-radius: 4px;
    }
    .post-title {
        font-size: 1rem;
        margin-bottom: 5px;
    }
    .post-date {
        font-size: 0.8rem;
        color: var(--main-text-color);
        opacity: 0.6;
    }
    .post-item:hover .post-title {
        color: var(--link-color);
    }
    @media (max-width: 1200px) {
        .toc {
            display: none;
        }
        .content {
            padding: 30px;
        }
    }
    @media (max-width: 900px) {
        .sidebar {
            display: none;
        }
        .content {
            padding: 20px;
        }
    }
    .zoom-counter {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 14px;
        z-index: 1000;
        display: none;
    }
    /* 返回顶部按钮 */
    .back-top {
        position: fixed;
        right: 20px;
        bottom: 20px;
        width: 40px;
        height: 40px;
        background: var(--link-color);
        color: #fff;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 100;
    }
    .back-top.show {
        opacity: 1;
    }
    .back-top:hover {
        background: #1873cc;
    }
    @media (max-width: 768px) {
        .back-top {
            right: 15px;
            bottom: 15px;
        }
    }
    /* 自定义滚动条样式 */
    .sidebar::-webkit-scrollbar,
    .toc::-webkit-scrollbar,
    .content::-webkit-scrollbar {
        width: 6px;
    }
    .sidebar::-webkit-scrollbar-thumb,
    .toc::-webkit-scrollbar-thumb,
    .content::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-color);
        border-radius: 3px;
    }
    .sidebar::-webkit-scrollbar-track,
    .toc::-webkit-scrollbar-track,
    .content::-webkit-scrollbar-track {
        background: transparent;
    }
    .content.markdown-body {
        background-color: var(--content-bg) !important;
        color: var(--main-text-color) !important;
    }
    .markdown-body {
        background-color: var(--content-bg) !important;
        color: var(--main-text-color) !important;
        font-size: 17px !important;  /* 增大基础字体大小 */
        line-height: 1.8 !important;
    }
    /* 留言板按钮 */
    .comment-button {
        position: fixed;
        right: 20px;
        bottom: 70px;  /* 位于返回顶部按钮上方 */
        width: 40px;
        height: 40px;
        background: var(--link-color);
        color: #fff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 20px;
        transition: background 0.3s;
    }
    
    .comment-button:hover {
        background: #1873cc;
    }
    
    @media (max-width: 768px) {
        .comment-button {
            right: 15px;
            bottom: 65px;
        }
    }
    .toc ul li {
        border-bottom: 1px solid var(--border-color);
        padding: 8px 0;
    }
    
    .toc ul li:last-child {
        border-bottom: none;
    }
    
    .toc ul li a {
        display: block;
        padding: 4px 0;
        transition: all 0.2s ease;
    }
    
    .toc ul li a:hover {
        padding-left: 8px;
        color: var(--link-color) !important;
    }

    /* 补充 markdown 内容的主题样式 */
    .markdown-body {
        color: var(--main-text-color) !important;
        background-color: var(--content-bg) !important;
    }

    .markdown-body code {
        background-color: var(--code-bg) !important;
        color: var(--main-text-color) !important;
    }

    .markdown-body pre {
        background-color: var(--code-bg) !important;
        border: 1px solid var(--border-color) !important;
    }

    .markdown-body blockquote {
        background-color: var(--blockquote-bg) !important;
        border-left-color: var(--border-color) !important;
        color: var(--main-text-color) !important;
    }

    .markdown-body table tr {
        background-color: var(--content-bg) !important;
        border-color: var(--border-color) !important;
    }

    .markdown-body table tr:nth-child(2n) {
        background-color: var(--code-bg) !important;
    }

    /* 优化滚动条样式 */
    .sidebar::-webkit-scrollbar-thumb,
    .toc::-webkit-scrollbar-thumb,
    .content::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-color);
    }

    /* 优化文章列表悬停效果 */
    .post-item:hover {
        background-color: var(--hover-bg);
    }

    /* 优化目录样式 */
    .toc ul li {
        border-color: var(--border-color);
    }

    /* 优化日期颜色 */
    .post-date {
        color: var(--main-text-color);
        opacity: 0.6;
    }

    /* 图片灯箱背景色适配 */
    .medium-zoom-overlay {
        background: var(--main-bg-color) !important;
    }

    /* 主题切换按钮优化 */
    .theme-toggle {
        background: var(--link-color);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* 返回顶部按钮优化 */
    .back-top {
        background: var(--link-color);
    }

    /* 留言按钮优化 */
    .comment-button {
        background: var(--link-color);
    }

    /* 修改代码块背景色 */
    .markdown-body pre code {
        background-color: var(--code-bg) !important;
    }

    /* 修改引用块背景色 */
    .markdown-body blockquote {
        background-color: var(--blockquote-bg) !important;
        border-left-color: var(--border-color) !important;
    }

    /* 优化 markdown 内容的样式 */
    .markdown-body {
        background-color: var(--content-bg) !important;
        color: var(--main-text-color) !important;
        font-size: 17px !important;  /* 增大基础字体大小 */
        line-height: 1.8 !important;
    }

    /* 优化段落和边框 */
    .markdown-body p {
        margin: 16px 0;
        line-height: 1.8;
        font-size: 17px !important;  /* 增大段落字体大小 */
    }

    /* 优化标题样式 */
    .markdown-body h1 {
        font-size: 28px !important;
        margin-top: 32px;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border-color);
    }

    .markdown-body h2 {
        font-size: 24px !important;
        margin-top: 32px;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border-color);
    }

    .markdown-body h3 {
        font-size: 20px !important;
        margin-top: 32px;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border-color);
    }

    .markdown-body h4 {
        font-size: 18px !important;
        margin-top: 24px;
        margin-bottom: 16px;
    }

    .markdown-body h5, .markdown-body h6 {
        font-size: 16px !important;
        margin-top: 24px;
        margin-bottom: 16px;
    }

    /* 优化列表项样式 */
    .markdown-body ul li,
    .markdown-body ol li {
        padding: 4px 0;
        font-size: 17px !important;  /* 增大列表项体大小 */
        border-bottom: 1px solid var(--border-color);
    }

    /* 优化代码块样式 */
    .markdown-body pre {
        background-color: var(--code-bg) !important;
        border: 1px solid var(--border-color) !important;
        padding: 16px;
        margin: 16px 0;
        border-radius: 6px;
        font-size: 15px !important;
    }

    .markdown-body code {
        font-size: 15px !important;
    }

    /* 优化引用块样式 */
    .markdown-body blockquote {
        background-color: var(--blockquote-bg) !important;
        border-left: 4px solid var(--border-color) !important;
        padding: 16px;
        margin: 16px 0;
        color: var(--main-text-color) !important;
        opacity: 0.9;
        font-size: 17px !important;  /* 增大引用块字体大小 */
    }

    /* 优化表格样式 */
    .markdown-body table {
        border: 1px solid var(--border-color);
        margin: 16px 0;
        border-collapse: collapse;
    }

    .markdown-body table th,
    .markdown-body table td {
        padding: 8px 16px;
        border: 1px solid var(--border-color);
    }

    .markdown-body table tr {
        background-color: var(--content-bg) !important;
        border-top: 1px solid var(--border-color);
    }

    .markdown-body table tr:nth-child(2n) {
        background-color: var(--code-bg) !important;
    }

    /* 代码块容器样式 */
    .markdown-body pre {
        position: relative;
        background-color: var(--code-bg) !important;
        border: 1px solid var(--border-color) !important;
        padding: 16px;
        margin: 16px 0;
        border-radius: 6px;
    }

    /* 机诗词样式 */
    .welcome-poem {
        text-align: center;
        padding: 60px 20px;
        max-width: 600px;
        margin: 0 auto;
    }

    .poem-content {
        font-size: 24px;
        color: var(--main-text-color);
        font-family: var(--font-serif);
        line-height: 1.8;
        margin-bottom: 20px;
    }

    .poem-author {
        font-size: 16px;
        color: var(--main-text-color);
        opacity: 0.8;
        font-family: var(--font-serif);
    }

    .poem-title {
        font-size: 16px;
        color: var(--main-text-color);
        opacity: 0.8;
        font-family: var(--font-serif);
        margin-top: 10px;
    }

    /* 目录为空时的样式 */
    .toc-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        min-height: 150px;
        padding: 2rem;
        margin: 1rem;
        border: 2px dashed var(--border-color);
        border-radius: 8px;
        background-color: var(--content-bg);
    }

    .toc-empty-icon {
        font-size: 10rem;
        margin-bottom: 5rem;
        color: var(--text-color-secondary);
    }

    .toc-empty-text {
        font-size: 1.4rem;
        color: var(--text-color-secondary);
        font-weight: 500;
    }

    /* 分页相关样式 */
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 10px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: var(--sidebar-width);
        background: var(--main-bg-color);
        border-top: 1px solid var(--border-color);
        z-index: 100;
    }
    
    .pagination button {
        padding: 6px 12px;
        border: 1px solid var(--border-color);
        background: var(--content-bg);
        color: var(--main-text-color);
        cursor: pointer;
        border-radius: 4px;
        font-size: 14px;
        min-width: 50px;
    }
    
    .pagination button:hover:not(:disabled) {
        background: var(--hover-bg);
    }
    
    .pagination button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .pagination span {
        color: var(--main-text-color);
        font-size: 14px;
        min-width: 80px;
        text-align: center;
    }

    /* 代码高亮样式 */
    pre {
        background-color: var(--code-bg);
        border-radius: 6px;
        padding: 1rem;
        margin: 1rem 0;
        overflow-x: auto;
        position: relative;
    }

    code {
        font-family: var(--font-mono);
        font-size: 0.9em;
        line-height: 1.5;
    }

    /* 行内代码样式 */
    p code, li code {
        background-color: var(--code-bg);
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-size: 0.9em;
        color: var(--link-color);
    }

    /* 代码块语法高亮 */
    .hljs {
        display: block;
        overflow-x: auto;
        padding: 1em;
        color: var(--main-text-color);
        background: var(--code-bg);
    }

    .hljs-comment,
    .hljs-quote {
        color: #6a737d;
        font-style: italic;
    }

    .hljs-keyword,
    .hljs-selector-tag {
        color: #d73a49;
    }

    .hljs-string,
    .hljs-doctag,
    .hljs-template-variable {
        color: #032f62;
    }

    .hljs-title,
    .hljs-section,
    .hljs-selector-id {
        color: #6f42c1;
    }

    .hljs-variable,
    .hljs-template-variable {
        color: #e36209;
    }

    .hljs-type,
    .hljs-built_in {
        color: #005cc5;
    }

    .hljs-number,
    .hljs-literal {
        color: #005cc5;
    }

    .hljs-tag,
    .hljs-name,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo {
        color: #22863a;
    }

    .hljs-attribute {
        color: #6f42c1;
    }

    .hljs-symbol,
    .hljs-bullet {
        color: #005cc5;
    }

    .hljs-subst {
        color: #24292e;
    }

    .hljs-regexp,
    .hljs-deletion {
        color: #b31d28;
        background: #ffeef0;
    }

    .hljs-addition {
        color: #22863a;
        background: #f0fff4;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }

    /* 深色主代码高亮 */
    :root[data-theme='dark'] .hljs {
        background: var(--dark-code-bg);
    }

    :root[data-theme='dark'] .hljs-comment,
    :root[data-theme='dark'] .hljs-quote {
        color: #8b949e;
    }

    :root[data-theme='dark'] .hljs-keyword,
    :root[data-theme='dark'] .hljs-selector-tag {
        color: #ff7b72;
    }

    :root[data-theme='dark'] .hljs-string,
    :root[data-theme='dark'] .hljs-doctag {
        color: #a5d6ff;
    }

    :root[data-theme='dark'] .hljs-title,
    :root[data-theme='dark'] .hljs-section,
    :root[data-theme='dark'] .hljs-selector-id {
        color: #d2a8ff;
    }

    :root[data-theme='dark'] .hljs-variable,
    :root[data-theme='dark'] .hljs-template-variable {
        color: #ffa657;
    }

    :root[data-theme='dark'] .hljs-type,
    :root[data-theme='dark'] .hljs-built_in {
        color: #79c0ff;
    }

    :root[data-theme='dark'] .hljs-number,
    :root[data-theme='dark'] .hljs-literal {
        color: #79c0ff;
    }

    :root[data-theme='dark'] .hljs-tag,
    :root[data-theme='dark'] .hljs-name,
    :root[data-theme='dark'] .hljs-selector-class,
    :root[data-theme='dark'] .hljs-selector-attr,
    :root[data-theme='dark'] .hljs-selector-pseudo {
        color: #7ee787;
    }

    :root[data-theme='dark'] .hljs-attribute {
        color: #d2a8ff;
    }

    :root[data-theme='dark'] .hljs-symbol,
    :root[data-theme='dark'] .hljs-bullet {
        color: #79c0ff;
    }

    :root[data-theme='dark'] .hljs-regexp,
    :root[data-theme='dark'] .hljs-deletion {
        color: #ffa198;
        background: #490202;
    }

    :root[data-theme='dark'] .hljs-addition {
        color: #7ee787;
        background: #033a16;
    }

    /* 代码块复制按钮样式 */
    .code-copy {
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 8px 16px;
        font-size: 14px;
        color: var(--main-text-color);
        background: var(--content-bg);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        opacity: 0;
        transition: opacity 0.2s ease;
        cursor: pointer;
        z-index: 10;
        min-width: 70px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    pre {
        position: relative;
        padding-top: 2.5em !important;  /* 为复制按钮留出空间 */
    }

    pre:hover .code-copy {
        opacity: 1;
    }

    .code-copy:hover {
        background: var(--hover-bg);
    }

    .code-copy.copied {
        background: #28a745;
        color: white;
        border-color: #28a745;
    }

    /* 添加目录相的样式 */
    .toc {
        width: var(--sidebar-width);
        padding: 20px;
        position: sticky;
        top: 0;
        height: 100vh;
        overflow-y: auto;
        border-left: 1px solid var(--border-color);
        background: var(--main-bg-color);
    }

    .toc-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .toc-item {
        margin: 8px 0;
        padding: 6px 8px;
        border-radius: 4px;
        transition: all 0.2s ease;
    }

    .toc-item:hover {
        background: var(--hover-bg);
    }

    .toc-link {
        color: var(--main-text-color);
        text-decoration: none;
        display: block;
        line-height: 1.5;
    }

    /* 不同层级标题的样式 */
    .toc-h1 { 
        padding-left: 0;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
    }

    .toc-h2 { 
        padding-left: 1.2rem;
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.6rem;
    }

    .toc-h3 { 
        padding-left: 2.4rem;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
    }

    .toc-h4 { 
        padding-left: 3.6rem;
        font-size: 0.95rem;
        color: var(--text-color-secondary);
        margin-bottom: 0.4rem;
    }

    .toc-h5 { 
        padding-left: 4.8rem;
        font-size: 0.9rem;
        color: var(--text-color-secondary);
        margin-bottom: 0.4rem;
    }

    .toc-h6 { 
        padding-left: 6rem;
        font-size: 0.85rem;
        color: var(--text-color-secondary);
        margin-bottom: 0.4rem;
    }

    /* 目录项悬停效果 */
    .toc-item:hover .toc-link {
        color: var(--link-color);
    }

    /* 当前激活的目录项 */
    .toc-item.active {
        background: var(--hover-bg);
    }

    .toc-item.active .toc-link {
        color: var(--link-color);
    }

    /* 目录为空时的样式 */
    .toc-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: var(--main-text-color);
        opacity: 0.5;
    }

    .toc-empty-icon {
        font-size: 48px;
        margin-bottom: 10px;
    }

    .toc-empty-text {
        font-size: 14px;
    }

    /* 图片灯箱样式 */
    .medium-zoom-overlay {
        background: var(--main-bg-color) !important;
        z-index: 1000;
    }

    .medium-zoom-image--opened {
        z-index: 1001;
    }

    .zoom-counter {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 14px;
        z-index: 1002;
        display: none;
    }

    /* 图片样式 */
    .markdown-body img {
        max-width: 100%;
        cursor: zoom-in;
        transition: all 0.3s ease;
    }

    .markdown-body img:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    /* API 限额信息样式 */
    .api-limit-info {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px 16px;  /* 减小内边距 */
        background: var(--content-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        font-size: 0.85rem;  /* 减小字体大小 */
        color: var(--text-color-secondary);
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        display: none;
    }

    .api-limit-info p {
        margin: 2px 0;  /* 减小段落间距 */
        display: flex;
        align-items: center;
        gap: 6px;  /* 减小图标和文字的间距 */
    }

    .api-limit-info .progress-bar {
        width: 100%;
        height: 3px;  /* 减小进度条高度 */
        background: var(--border-color);
        border-radius: 1.5px;
        overflow: hidden;
        margin-top: 4px;  /* 减小顶部间距 */
    }

    /* 只在 PC 端主页显示 API 限额信息 */
    @media (min-width: 769px) {
        body.is-home .api-limit-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }
    }

    /* 移动端样式优化 */
    @media (max-width: 768px) {
        .layout {
            flex-direction: column;
        }

        .sidebar {
            position: static;
            width: 100%;
            height: auto;
            padding: 10px;
            overflow: visible;
        }

        .toc {
            display: none;
        }

        .content {
            padding: 15px;
            width: 100%;
            box-sizing: border-box;
        }

        /* 在主页时显示文章列表 */
        body.is-home .content {
            display: none;
        }

        body.is-home .sidebar {
            display: block;
        }

        /* 在文章页面时隐藏侧边栏 */
        body:not(.is-home) .sidebar {
            display: none;
        }

        body:not(.is-home) .content {
            display: block;
        }

        .header {
            padding: 10px;
        }

        .header .header-center a {
            font-size: 1.2rem;
        }

        .header .header-right {
            margin-right: 10px;
            gap: 10px;
        }

        .header .header-right a {
            font-size: 0.9rem;
        }

        .markdown-body {
            font-size: 16px !important;
        }

        .markdown-body h1 {
            font-size: 24px !important;
        }

        .markdown-body h2 {
            font-size: 20px !important;
        }

        .markdown-body h3 {
            font-size: 18px !important;
        }

        .post-item {
            padding: 8px 0;
        }

        .post-title {
            font-size: 0.9rem;
        }

        .post-date {
            font-size: 0.7rem;
        }

        .welcome-poem {
            padding: 30px 15px;
        }

        .poem-content {
            font-size: 20px;
        }

        .poem-author, .poem-title {
            font-size: 14px;
        }

        /* 移动端按钮位置调整 */
        .back-top {
            right: 15px;
            bottom: 15px;
            width: 35px;
            height: 35px;
            font-size: 16px;
        }

        .comment-button {
            right: 15px;
            bottom: 60px;
            width: 35px;
            height: 35px;
            font-size: 16px;
        }

        .theme-toggle {
            right: 15px;
            bottom: 105px;
            width: 35px;
            height: 35px;
            font-size: 16px;
        }

        /* 移动端代码块优化 */
        .markdown-body pre {
            padding: 12px;
            margin: 12px 0;
            font-size: 14px !important;
        }

        .code-copy {
            padding: 6px 12px;
            font-size: 12px;
            min-width: 60px;
            height: 30px;
        }

        /* 隐藏 API 限额信息 */
        .api-limit-info {
            display: none;
        }
    }
</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@5.2.0/github-markdown.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap">
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/medium-zoom/dist/medium-zoom.min.js"></script>
<!-- 添加highlight.js -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/github.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js"></script>
`;

// HTML模板
const HTML_TEMPLATE = `
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${CONFIG.title}</title>
    <link rel="icon" href="${CONFIG.favicon}" type="image/jpeg">
    ${styles}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@5.2.0/github-markdown.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap">
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/medium-zoom/dist/medium-zoom.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/github.min.css">
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js"></script>
    <script>
        // 主题切换功能
        function initTheme() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
        }

        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        }

        function updateThemeIcon(theme) {
            const themeButton = document.querySelector('.theme-toggle');
            if (themeButton) {
                themeButton.innerHTML = theme === 'dark' ? '🔆' : '🌟';
                themeButton.setAttribute('aria-label', theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
            }
        }

        window.onload = function() {
            // 初始化主题
            initTheme();
            
            const contentDiv = document.getElementById('content');
            if (contentDiv && contentDiv.hasAttribute('data-markdown')) {
                const markdown = decodeURIComponent(contentDiv.getAttribute('data-markdown'));
                contentDiv.removeAttribute('data-markdown');
                contentDiv.innerHTML = marked.parse(markdown);

                // 初始化图片灯箱
                const zoom = mediumZoom('img:not(.site-logo)', {
                    margin: 24,
                    background: getComputedStyle(document.documentElement)
                        .getPropertyValue('--main-bg-color'),
                    scrollOffset: 0,
                });

                // 添加缩放提示
                const zoomCounter = document.createElement('div');
                zoomCounter.className = 'zoom-counter';
                document.body.appendChild(zoomCounter);

                zoom.on('open', () => {
                    zoomCounter.style.display = 'block';
                    zoomCounter.textContent = '点击图片或按 ESC 关闭预览';
                });

                zoom.on('close', () => {
                    zoomCounter.style.display = 'none';
                });

                // 为文章中的所有链接添加 target="_blank"
                const links = contentDiv.getElementsByTagName('a');
                for (let link of links) {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                }

                // 生成目录
                const headings = contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
                if (headings.length > 0) {
                    const tocList = document.createElement('ul');
                    tocList.className = 'toc-list';
                    
                    headings.forEach(function(heading, index) {
                        heading.id = 'heading-' + index;
                        
                        const li = document.createElement('li');
                        li.className = 'toc-item toc-' + heading.tagName.toLowerCase();
                        
                        const a = document.createElement('a');
                        a.href = '#' + heading.id;
                        a.className = 'toc-link';
                        a.textContent = heading.textContent;
                        
                        a.onclick = function(e) {
                            e.preventDefault();
                            heading.scrollIntoView({ behavior: 'smooth' });
                        };
                        
                        li.appendChild(a);
                        tocList.appendChild(li);
                    });
                    
                    const tocDiv = document.querySelector('.toc');
                    if (tocDiv) {
                        tocDiv.innerHTML = '';
                        tocDiv.appendChild(tocList);
                    }
                } else {
                    const tocDiv = document.querySelector('.toc');
                    if (tocDiv) {
                        tocDiv.innerHTML = '<div class="toc-empty" style="height: auto; min-height: 150px; padding: 2rem; margin: 1rem;">' +
                            '<div class="toc-empty-icon" style="font-size: 7rem; margin-bottom: 1rem; color: var(--text-color-secondary);">📑</div>' +
                            '<div class="toc-empty-text" style="font-size: 1.4rem; color: var(--text-color-secondary); font-weight: 500;">暂无目录</div>' +
                            '</div>';
                    }
                }

                // 处理代码块
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightBlock(block);
                    
                    const pre = block.parentElement;
                    pre.style.position = 'relative';
                    
                    const button = document.createElement('button');
                    button.className = 'code-copy';
                    button.textContent = '复制';
                    button.style.position = 'absolute';
                    button.style.right = '8px';
                    button.style.top = '8px';
                    
                    button.onclick = async () => {
                        try {
                            await navigator.clipboard.writeText(block.textContent);
                            button.textContent = '已复制';
                            button.classList.add('copied');
                            setTimeout(() => {
                                button.textContent = '复制';
                                button.classList.remove('copied');
                            }, 1500);
                        } catch (err) {
                            console.error('复制失败:', err);
                            button.textContent = '复制失败';
                            setTimeout(() => {
                                button.textContent = '复制';
                            }, 1500);
                        }
                    };
                    
                    pre.appendChild(button);
                });
            }

            // 返回顶部功能
            const backTop = document.querySelector('.back-top');
            if (backTop) {
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset > 300) {
                        backTop.classList.add('show');
                    } else {
                        backTop.classList.remove('show');
                    }
                });
                
                backTop.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        };

        // 添加滚动监听
        let lastScrollY = window.scrollY;
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const header = document.querySelector('.header');
                    const currentScrollY = window.scrollY;
                    
                    if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        header.classList.add('hidden');
                    } else {
                        header.classList.remove('hidden');
                    }
                    
                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    </script>
</head>
<body class="{{page_class}}">
    <header class="header">
        <a href="https://dash.cloudflare.com/5e13acfeb51991ab52af94da59e959a2/workers/services/view/git-blog-share/production/metrics" target="_blank" rel="noopener noreferrer">
    <img src="${CONFIG.favicon}" alt="站点图标" class="site-logo">
</a>
        <div class="header-center">
            <a href="/">${CONFIG.title}</a>
        </div>
        <div class="header-right">
            <a href="https://9.zcr3.ddns-ip.net/" target="_blank" rel="noopener noreferrer">博客</a>
            <a href="https://da.zcr25.x10.mx/" target="_blank" rel="noopener noreferrer">导航</a>
        </div>
    </header>
    <div class="layout">
        <nav class="sidebar">
            {{post_list}}
        </nav>
        <main class="content markdown-body">
            {{content}}
        </main>
        <aside class="toc">
            {{toc}}
        </aside>
    </div>
    <button class="back-top" aria-label="返回顶部">🏠</button>
    <a href="https://github.com/zcr07/git-blog-share/edit/main/worker.js" target="_blank" class="comment-button" aria-label="留言板" rel="noopener noreferrer">📋</a>
    <button class="theme-toggle" onclick="toggleTheme()" aria-label="切换主题">🔅</button>
    {{api_limit_info}}
</body>
</html>
`;

// 添加缓存相关量
const CACHE_TIME = 0; // 设置缓存时间为0，即不使用缓存
let postsCache = {
    data: null,
    timestamp: 0
};

// 格式化日期函数
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 将UTC时间戳转换为北京时间
function convertToBeiJingTime(timestamp) {
    const utcDate = new Date(Number(timestamp) * 1000);
    const beijingDate = new Date(utcDate.getTime() + 8 * 60 * 60 * 1000);
    return beijingDate;
}

// 生成 API 限额信息的 HTML
function generateApiLimitHtml(rateLimit) {
    const used = parseInt(rateLimit.used) || 0;
    const limit = parseInt(rateLimit.limit) || 1;
    const remaining = parseInt(rateLimit.remaining) || 0;
    const resetTime = convertToBeiJingTime(rateLimit.reset);
    
    return `
        <div class="api-limit-info">
            <p>API 限额: ${remaining} / ${limit}</p>
            <p>已使用: ${used}</p>
            <p>重置时间: ${resetTime.toLocaleTimeString('zh-CN', { hour12: false })}</p>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${(used / limit) * 100}%"></div>
            </div>
        </div>
    `;
}

// 修改 fetchWithRetry 函数
async function fetchWithRetry(url, options, env, maxRetries = 3) {
    const delays = [1000, 2000, 4000];
    let lastError;

    // 添加 GitHub token 到请求头
    const headers = {
        'User-Agent': 'CloudflareWorker',
        'Accept': 'application/vnd.github.v3+json',
        ...(options.headers || {}),
    };
    
    if (env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`;
    }

    for (let i = 0; i < maxRetries; i++) {
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 8000);
            
            const response = await fetch(url, {
                ...options,
                headers,
                signal: controller.signal
            });
            
            clearTimeout(timeout);
            
            // 获取 API 限制信息
            const rateLimit = {
                limit: response.headers.get('X-RateLimit-Limit'),
                remaining: response.headers.get('X-RateLimit-Remaining'),
                reset: response.headers.get('X-RateLimit-Reset'),
                used: response.headers.get('X-RateLimit-Used')
            };
            
            if (response.status === 403 && rateLimit.remaining === '0') {
                const resetDate = convertToBeiJingTime(rateLimit.reset);
                throw new Error(`API 限制已达上限（${rateLimit.limit}次/小时），将在 ${resetDate.toLocaleString('zh-CN', { hour12: false })} 重置`);
            }
            
            if (!response.ok) {
                const responseText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
            }
            
            return { response, rateLimit };  // 返回响应和限额信息
        } catch (error) {
            lastError = error;
            if (i === maxRetries - 1) break;
            
            if (error.name === 'AbortError' || error.name === 'TypeError') {
                await new Promise(resolve => setTimeout(resolve, delays[i]));
                continue;
            }
            
            throw error;
        }
    }
    
    throw lastError;
}

// 修改 generatePostList 函数
async function generatePostList(env) {
    try {
        const now = Date.now();
        if (postsCache.data && (now - postsCache.timestamp) < CACHE_TIME) {
            return postsCache.data;
        }

        const apiUrl = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/`;
        
        const { response, rateLimit } = await fetchWithRetry(apiUrl, {
            headers: {
                'If-None-Match': postsCache.etag || ''
            }
        }, env);

        if (response.status === 304 && postsCache.data) {
            postsCache.timestamp = now;
            return postsCache.data;
        }

        const files = await response.json();
        const posts = files
            .filter(file => file.name.endsWith('.md') && file.name !== 'README.md')
            .map(file => ({
                name: file.name,
                path: file.path,
                url: `/posts/${file.name}`,
                sha: file.sha
            }));

        const postsWithDates = await Promise.all(posts.map(async post => {
            try {
                const { response: commitResponse } = await fetchWithRetry(
                    `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/commits?path=${post.path}&page=1&per_page=1`,
                    {},
                    env
                );
                
                const commits = await commitResponse.json();
                if (commits && commits.length > 0) {
                    const lastCommit = commits[0];
                    post.lastModified = new Date(lastCommit.commit.committer.date);
                }
            } catch (error) {
                console.error(`Error fetching commit info for ${post.path}:`, error);
                post.lastModified = new Date();
            }
            return post;
        }));

        postsWithDates.sort((a, b) => b.lastModified - a.lastModified);

        const ITEMS_PER_PAGE = 6;
        const totalPages = Math.ceil(postsWithDates.length / ITEMS_PER_PAGE);

        const postListHtml = `
            <div class="post-list-container">
                <div class="post-list" id="postList">
                    ${postsWithDates.map((post, index) => `
                        <div class="post-item" style="display: ${index < ITEMS_PER_PAGE ? 'block' : 'none'}" data-page="${Math.floor(index / ITEMS_PER_PAGE) + 1}">
                            <a href="${post.url}">
                                <div class="post-title">📝 ${post.name.replace('.md', '')}</div>
                                <div class="post-date" style="text-align: right;">📅 ${post.lastModified ? formatDate(post.lastModified) : ''}</div>
                            </a>
                        </div>
                    `).join('')}
                </div>
                <div class="pagination">
                    <button id="prevPage" onclick="changePage(-1)" disabled>上一页</button>
                    <span id="pageInfo">1/${totalPages}</span>
                    <button id="nextPage" onclick="changePage(1)" ${totalPages <= 1 ? 'disabled' : ''}>下一页</button>
                </div>
            </div>
            <script>
                let currentPage = 1;
                const totalPages = ${totalPages};
                
                function changePage(delta) {
                    const newPage = currentPage + delta;
                    if (newPage >= 1 && newPage <= totalPages) {
                        document.querySelectorAll('.post-item[data-page="'+currentPage+'"]')
                            .forEach(item => item.style.display = 'none');
                        
                        document.querySelectorAll('.post-item[data-page="'+newPage+'"]')
                            .forEach(item => item.style.display = 'block');
                        
                        currentPage = newPage;
                        
                        document.getElementById('prevPage').disabled = currentPage === 1;
                        document.getElementById('nextPage').disabled = currentPage === totalPages;
                        document.getElementById('pageInfo').textContent = currentPage + '/' + totalPages;
                    }
                }
            </script>
        `;

        // 更新缓存
        const html = {
            data: postListHtml,
            timestamp: now,
            etag: response.headers.get('ETag'),
            rateLimit  // 保存 API 限额信息到缓存
        };
        postsCache = html;

        return postListHtml;
    } catch (error) {
        if (postsCache.data) {
            return postsCache.data;
        }

        return `
            <div class="error-message" style="text-align: center; padding: 20px;">
                <p style="color: var(--text-color-secondary); margin-bottom: 15px; font-size: 1.2em;">
                    加载文章列表失败
                </p>
                <p style="color: var(--text-color-secondary); font-size: 0.9em; margin-bottom: 20px;">
                    请检查网络连接
                </p>
                <p style="color: var(--text-color-secondary); font-size: 0.8em; margin-bottom: 20px;">
                    错误详情: ${error.name} - ${error.message}
                </p>
                <button onclick="window.location.reload()" 
                    style="padding: 8px 16px; 
                    background: var(--link-color); 
                    color: white; 
                    border: none; 
                    border-radius: 4px; 
                    cursor: pointer;
                    transition: opacity 0.2s;">
                    重新加载
                </button>
            </div>
        `;
    }
}

async function getPostContent(path, env) {
    const response = await fetch(
        `https://raw.githubusercontent.com/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/main/${path}`,
        {
            headers: {
                'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
                'User-Agent': 'CloudflareWorker'
            }
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch post content');
    }

    return await response.text();
}

// 主要处理逻辑
export default {
    async fetch(request, env) {
        try {
            const url = new URL(request.url);
            const path = url.pathname;
            
            const postList = await generatePostList(env);
            let pageClass = '';
            
            // 根据配置决定是否启用密码验证
            const unlockModalHtml = CONFIG.enablePasswordProtection ? `
                <div id="unlock-modal" class="unlock-modal">
                    <div class="unlock-content">
                        <h2>🔐 请输入访问密码</h2>
                        <input type="password" id="password-input" placeholder="请输入密码">
                        <button onclick="verifyPassword('${env.ADMIN_PASSWORD}')">解锁</button>
                        <p id="unlock-error" style="color: #ff4444; display: none;">密码错误，请重试</p>
                    </div>
                </div>
                <div id="main-content" style="display: none;">
            ` : '<div id="main-content">';

            const unlockScriptHtml = CONFIG.enablePasswordProtection ? `
                <style>
                    .unlock-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.8);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 1000;
                    }
                    .unlock-content {
                        background: var(--content-bg);
                        padding: 2rem;
                        border-radius: 8px;
                        text-align: center;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                    }
                    .unlock-content h2 {
                        margin-bottom: 1.5rem;
                        color: var(--main-text-color);
                    }
                    .unlock-content input {
                        width: 200px;
                        padding: 8px 12px;
                        margin-bottom: 1rem;
                        border: 1px solid var(--border-color);
                        border-radius: 4px;
                        background: var(--main-bg-color);
                        color: var(--main-text-color);
                    }
                    .unlock-content button {
                        padding: 8px 24px;
                        background: var(--link-color);
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: opacity 0.2s;
                    }
                    .unlock-content button:hover {
                        opacity: 0.9;
                    }
                </style>
                <script>
                    function checkUnlock() {
                        const unlockTime = localStorage.getItem('unlockTime');
                        const storedPasswordVersion = localStorage.getItem('passwordVersion');
                        const currentPasswordVersion = new Date().toISOString().split('T')[0];
                        const now = new Date().getTime();
                        
                        if (unlockTime && 
                            storedPasswordVersion === currentPasswordVersion && 
                            (now - parseInt(unlockTime)) < 30 * 24 * 60 * 60 * 1000) {
                            document.getElementById('unlock-modal').style.display = 'none';
                            document.getElementById('main-content').style.display = 'block';
                        } else {
                            localStorage.removeItem('unlockTime');
                            localStorage.removeItem('passwordVersion');
                        }
                    }

                    function verifyPassword(correctPassword) {
                        const input = document.getElementById('password-input');
                        const error = document.getElementById('unlock-error');
                        
                        if (input.value === correctPassword) {
                            const currentPasswordVersion = new Date().toISOString().split('T')[0];
                            localStorage.setItem('unlockTime', new Date().getTime());
                            localStorage.setItem('passwordVersion', currentPasswordVersion);
                            document.getElementById('unlock-modal').style.display = 'none';
                            document.getElementById('main-content').style.display = 'block';
                            error.style.display = 'none';
                        } else {
                            error.style.display = 'block';
                            input.value = '';
                        }
                    }

                    document.getElementById('password-input').addEventListener('keypress', function(e) {
                        if (e.key === 'Enter') {
                            verifyPassword('${env.ADMIN_PASSWORD}');
                        }
                    });

                    checkUnlock();
                </script>
                </div>
            ` : '</div>';

            if (path === '/' || path === '/posts') {
                pageClass = 'is-home';
                const randomPoem = POEMS[Math.floor(Math.random() * POEMS.length)];
                const welcomeContent = `
                    <div style="text-align: center;">
                        <h1 style="margin-bottom: 40px; color: var(--main-text-color);">皅皅🔭慈</h1>
                    </div>
                    <div class="welcome-poem">
                        <div class="poem-content">${randomPoem.content}</div>
                        <div class="poem-author">—— ${randomPoem.author}</div>
                        <div class="poem-title">《${randomPoem.title}》</div>
                    </div>
                `;

                let html = HTML_TEMPLATE
                    .replace('{{page_class}}', pageClass)
                    .replace('{{post_list}}', postList)
                    .replace('{{content}}', unlockModalHtml + welcomeContent + unlockScriptHtml)
                    .replace('{{toc}}', `
                        <div class="toc-empty" style="height: auto; min-height: 150px; padding: 2rem; margin: 1rem;">
                            <div class="toc-empty-icon" style="font-size: 7rem; margin-bottom: 1rem; color: var(--text-color-secondary);">📑</div>
                            <div class="toc-empty-text" style="font-size: 1.4rem; color: var(--text-color-secondary); font-weight: 500;">暂无目录</div>
                        </div>
                    `)
                    .replace('{{api_limit_info}}', postsCache.rateLimit ? generateApiLimitHtml(postsCache.rateLimit) : '');

                return new Response(html, {
                    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
                });
            }

            if (path.startsWith('/posts/')) {
                pageClass = 'is-post';
                const postPath = path.replace('/posts/', '');
                const content = await getPostContent(postPath, env);
                
                let html = HTML_TEMPLATE
                    .replace('{{page_class}}', pageClass)
                    .replace('{{post_list}}', postList)
                    .replace('{{content}}', unlockModalHtml + `<div id="content" data-markdown="${encodeURIComponent(content)}"></div>` + unlockScriptHtml)
                    .replace('{{toc}}', '')
                    .replace('{{api_limit_info}}', '');

                return new Response(html, {
                    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
                });
            }

            return new Response('Not Found', { status: 404 });
        } catch (error) {
            return new Response('Error: ' + error.message, { status: 500 });
        }
    }
}; 
