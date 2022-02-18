import Menu from '@organisms/MobileMenu';
import Navbar from '@organisms/Navbar';
import Head from 'next/head';
import { FC, Fragment } from 'react';
import { PageProps } from 'types';
import * as S from './Default.styled';

export interface DefaultLayoutProps extends PageProps {
  title: string;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, mediaFiles }) => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <Navbar />
      <S.Main>{children}</S.Main>
    </Fragment>
  );
};

export default DefaultLayout;
