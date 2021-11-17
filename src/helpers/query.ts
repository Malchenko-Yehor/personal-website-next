export const getPageQuery = (query: string) => {
  return `
    query {
      files {
        name
        url
      }
      ${query}
    }
  `;
};