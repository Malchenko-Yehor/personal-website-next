import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import queryApi from '@helpers/apollo';
import Header, { HeaderProps } from '@organisms/Header';
import LanguageFlag from '@atoms/LanguageFlag';

interface HomepageProps {
  homepage: HeaderProps
};

const icon = {
  src: '/images/poland-flag.svg',
  alt: 'poland flag'
}

export const Homepage: FC<HomepageProps> = ({ homepage }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header {...homepage} />

      <LanguageFlag languagePrefix="en" icon={icon} />
    </div>
  )
};


const getHomepageQuery = (locale: string) => `
  query {
    homepage(locale: "${locale}") {
      title
    }
  }
`;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const query = getHomepageQuery(locale);
  const props = await queryApi(query);

  return { props };
};

export default Homepage;
