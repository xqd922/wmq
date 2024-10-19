export const seo = {
  title: 'xqd blog',
  description:
    'hi! 大家好，我是xqd，目前是一名在校大学生，一个喜欢折腾的人，热衷于探索和尝试各种新事物。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://xqd.us.kg'
      : 'http://localhost:3000'
  ),
} as const
