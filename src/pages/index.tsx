import { GetStaticProps } from 'next';
import { FC } from 'react';
import { client } from '../../.tina/__generated__/client';
import { useTina } from 'tinacms/dist/react';
import { PageQuery } from '../../.tina/__generated__/types';
import Image from 'next/image';

interface TinaProps {
  query: string;
  variables: object;
  data: object;
}

export const Homepage: FC<TinaProps> = (props) => {
  const { page: data } = useTina(props).data as PageQuery;

  return (
    <>
      <h1>{data.title}</h1>
      <Image src={data.image} layout="fill" />
      <ul>
        {data.testimonial.map((item) => (
          <li key={item.quote}>
            <p>{item.author}</p>
            <p>{item.role}</p>
            <p>{item.quote}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const homepageResponse = await client.queries.page({ relativePath: 'Homepage.md' });

  return {
    props: {
      data: homepageResponse.data,
      query: homepageResponse.query,
      variables: homepageResponse.variables,
    },
  };
};

export default Homepage;
