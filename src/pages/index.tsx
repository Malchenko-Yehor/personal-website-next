import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import queryApi from '@helpers/apollo';
import { HeaderProps } from '@organisms/Header';
import { getPageQuery } from '@helpers/query';
import { PageProps } from 'types';
import DefaultLayout from '@layouts/Default';

interface HomepageProps extends PageProps {
  homepage: HeaderProps
};

export const Homepage: FC<HomepageProps> = (props) => {
  const { homepage } = props;

  return (
    <DefaultLayout {...props} title={homepage.title}>
    </DefaultLayout>
  )
};


const getHomepageQuery = (locale: string) => {
  const homepageQuery = `
    homepage(locale: "${locale}") {
      title
    }
  `;

  return getPageQuery(homepageQuery);
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const query = getHomepageQuery(locale);
  const props = await queryApi(query);

  return { props };
};

export default Homepage;
