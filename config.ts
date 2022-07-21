export const API=process.env.NODE_ENV==='production' ? 'http://47.98.216.176:3000' : 'http://localhost:3000';

export const headerNavLinks = [
  { href: '/', title: '首页' },
  { href: '/label', title: '分类' },
  { href: '/tag', title: '标签' },
  { href: '/about', title: '关于我' },
]