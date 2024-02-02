export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : '落叶飘零';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : '服务器の日常公布，基于（懒得写）和Netlify';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '2022~2024 落叶飘零Fallen Leaves 保留所有权利';

  return {
    name,
    blogTitle,
    footerText,
  };
};
