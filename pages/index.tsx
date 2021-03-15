import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import queryApi from '../helpers/apollo';

interface HomepageProps {
  title: string,
  intro?: string
};

export const Homepage: FC<HomepageProps> = ({ title, intro }) => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{title}</h1>
      <p>{intro}</p>
    </div>
  )
};

const homepageQuery = `
  query {
    homepage {
      title
      intro
      headerImage {
        url
        alternativeText
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const { homepage } = await queryApi(homepageQuery);

  return {
    props: homepage
  };
};

export default Homepage;
