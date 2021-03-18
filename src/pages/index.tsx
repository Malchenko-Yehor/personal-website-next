import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Col, Row } from 'styled-bootstrap-grid';
import CTA from '@atoms/CTA';
import queryApi from '@helpers/apollo';
import Container from '@styles/Container';

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

      <Container>
        <Row>
          <Col col={6}>
            <CTA label="This is link" href="#test" />
          </Col>
          <Col col={6}>
            <CTA label="This is Button" />
          </Col>
        </Row>
      </Container>

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
