// docModule.js

// 生成 doc 文件夹的文章列表 HTML
export async function generateDocList(env) {
    const files = await env.ASSETS.list({ prefix: 'doc/', include: ['customMetadata'] });
    return files.keys
        .filter(key => key.endsWith('.md'))
        .map(key => {
            const name = key.replace('doc/', '').replace('.md', '');
            return `<li><a href="/doc/${name}">${name}</a></li>`;
        })
        .join('');
}

// 获取某篇文档内容
export async function getDocContent(slug, env) {
    return await getPostContent('doc/' + slug, env); // 复用已有 getPostContent 函数
}
