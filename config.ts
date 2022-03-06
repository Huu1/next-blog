export const API=process.env.NODE_ENV==='production' ? 'http://1.116.75.166:3000' : 'http://localhost:3000';

export const headerNavLinks = [
  { href: '/', title: '首页' },
  { href: '/label', title: '分类' },
  { href: '/tag', title: '标签' },
  { href: '/music', title: '听歌' },
  { href: '/about', title: '关于我' },
]