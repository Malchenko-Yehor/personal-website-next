import PageWidgetsZone from '@organisms/WidgetsZone';
import { client } from '@tina/__generated__/client';
import { PageQuery } from '@tina/__generated__/types';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { useTina } from 'tinacms/dist/react';

interface TinaProps {
  query: string;
  variables: object;
  data: object;
}

export const Homepage: FC<TinaProps> = (props) => {
  const { page: data } = useTina(props).data as PageQuery;

  return (
    <>
      <PageWidgetsZone widgets={data.widgets} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const homepageResponse = await client.queries.page({ relativePath: `${locale}/Homepage.md` });

  return {
    props: {
      data: homepageResponse.data,
      query: homepageResponse.query,
      variables: homepageResponse.variables,
    },
  };
};

export default Homepage;
