import Header from '@organisms/Header';
import MobileMenu from '@organisms/MobileMenu';
import Navbar from '@organisms/Navbar';
import Head from 'next/head';
import { FC, Fragment } from 'react';
import { PageProps } from 'types';

export interface DefaultLayoutProps extends PageProps {
  title: string
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, title, mediaFiles }) => {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileMenu />
      <Navbar mediaFiles={mediaFiles} />
      <main>
        <Header title={title} />
        {children}
      </main>
    </Fragment>
  );
};


export default DefaultLayout;