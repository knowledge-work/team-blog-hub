import { Member } from '@src/types'

export const members: Member[] = [
  {
    id: 'kj',
    name: '麻野耕司',
    role: 'CEO',
    bio: '',
    avatarSrc: '/avatars/kj.jpg',
    sources: ['https://note.com/kojiasano1103/rss'],
    includeUrlRegex: '',
    twitterUsername: 'asanokoji',
    githubUsername: '',
    websiteUrl: '',
  },
  {
    id: 'yoshiko',
    name: 'よしこ',
    role: 'Frontend',
    bio: 'フロントエンドエンジニア。SPAを作るのが好きです。Google Developer Experts for Web',
    avatarSrc: '/avatars/yoshiko.png',
    sources: ['https://zenn.dev/yoshiko/feed', 'https://yoshiko.hatenablog.jp/feed'],
    includeUrlRegex: '',
    twitterUsername: 'yoshiko_pg',
    githubUsername: 'yoshiko-pg',
    websiteUrl: '',
  },
]
