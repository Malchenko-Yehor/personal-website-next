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

export const widgetsZoneQuery = `
  widgetsZone {
    __typename
    ... on ComponentWidgetsCareer {
      id
      title
      entries {
        id
        companyName
        startDate
        endDate
        description
        url
        icon {
          url
        }
      }
    }
  }
`;
