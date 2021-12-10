export const config = {
  siteMeta: {
    title: 'Knowledge Work Team Blog Hub',
    teamName: 'Knowledge Work Inc.',
    description: '株式会社ナレッジワークのチームメンバーのBlog Hub',
    disclaimer:
      '株式会社ナレッジワークのチームメンバーの個人ブログを集約したものであり、投稿内容は会社の見解を代表するものではありません。',
  },
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? 'https://blog-hub.kwork.studio'
      : 'http://localhost:5000',
  headerLinks: [
    {
      title: 'Company',
      href: 'https://kwork.studio',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/knowledge-work/team-blog-hub',
    },
  ],
}
