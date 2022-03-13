import { FC } from 'react';
import { GetStaticProps } from 'next';
import queryApi from 'api/apollo';
import { getPageQuery, widgetsZoneQuery } from 'api/queries';
import { PageProps } from 'types';
import DefaultLayout from '@layouts/Default';
import WidgetsZone from '@organisms/WidgetsZone';
import Portfolio from '@organisms/Portfolio';
import { StrapiFile, Widget } from 'api/types';
import { v4 as uuid } from 'uuid';

interface HomepageProps extends PageProps {
  homepage: {
    title: string;
    widgetsZone: Widget[];
  };
}

export const Homepage: FC<HomepageProps> = (props) => {
  // const { title, widgetsZone } = props.homepage;

  return <>TEST</>;
};

// const getHomepageQuery = (locale: string) => {
//   const homepageQuery = `
//     homepage(locale: "${locale}") {
//       title
//       ${widgetsZoneQuery}
//     }
//   `;

//   return getPageQuery(homepageQuery);
// };

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   const query = getHomepageQuery(locale);
//   const props = await queryApi(query);

//   return { props };
// };

export default Homepage;
