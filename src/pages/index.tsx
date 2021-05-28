import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import queryApi from '@helpers/apollo';
import Header, { HeaderProps } from '@organisms/Header';

interface HomepageProps {
  homepage: HeaderProps
};

export const Homepage: FC<HomepageProps> = ({ homepage }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header {...homepage} />

    </div>
  )
};


const getHomepageQuery = (locale: string) => `
  query {
    homepage(locale: "${locale}") {
      title
      intro
      image {
        src: url
        alt: alternativeText
        width
        height
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const query = getHomepageQuery(locale);
  const props = await queryApi(query);

  return { props };
};

export default Homepage;
