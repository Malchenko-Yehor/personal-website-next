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

const items = [
  {
    id: uuid(),
    icon: {
      url: '/images/visit-qatar.svg',
      width: 141,
      height: 141.6,
    } as StrapiFile,
    color: '#ff5f40',
    title: 'Visit Qatar Mobile',
    url: 'https://www.deutschebank.be/',
  },
  {
    id: uuid(),
    icon: {
      url: '/images/visit-qatar.svg',
      width: 141,
      height: 141.6,
    } as StrapiFile,
    color: '#bcafb2',
    title: 'Visit Qatar',
    url: 'https://www.deutschebank.be/',
  },
  {
    id: uuid(),
    icon: {
      url: '/images/facq.svg',
      width: 141,
      height: 141.6,
    } as StrapiFile,
    color: '#00655d',
    title: 'FACQ',
    url: 'https://www.deutschebank.be/',
  },
  {
    id: uuid(),
    icon: {
      url: '/images/emakina-white.svg',
      width: 141,
      height: 141.6,
    } as StrapiFile,
    color: '#f8e2b0',
    title: 'Emakina Agency',
    url: 'https://emakina.com/',
  },
  {
    id: uuid(),
    icon: {
      url: '/images/deutsche-bank.svg',
      width: 141,
      height: 141.6,
    } as StrapiFile,
    color: '#b7af9f',
    title: 'Deutsche Bank',
    url: 'https://www.deutschebank.be/',
  },
  {
    id: uuid(),
    icon: {
      url: '/images/tink.svg',
      width: 141,
      height: 141.6,
    } as StrapiFile,
    color: '#4FD0E7 ',
    title: 'Tink',
    url: 'https://www.deutschebank.be/',
  },
  {
    id: uuid(),
    icon: {
      url: '/images/gwo-white.svg',
      width: 141,
      height: 141.6,
    } as StrapiFile,
    color: '#97979F',
    title: 'Matlandia 5',
    url: 'https://matlandia5.apps.gwo.pl/0/sections',
  },
  {
    id: uuid(),
    icon: {
      url: '/images/gwo-white.svg',
      width: 141,
      height: 141.6,
    } as StrapiFile,
    color: '#4b70dd ',
    title: 'Matlandia 7',
    url: 'https://matlandia7.apps.gwo.pl/0/sections',
  },
];

interface HomepageProps extends PageProps {
  homepage: {
    title: string;
    widgetsZone: Widget[];
  };
}

export const Homepage: FC<HomepageProps> = (props) => {
  // const { title, widgetsZone } = props.homepage;

  return (
    <>
      <Portfolio title="test" items={items} />
    </>
  );
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
