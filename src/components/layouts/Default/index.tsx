import MobileMenu from '@organisms/MobileMenu';
import Navbar from '@organisms/Navbar';
import React, { FC, Fragment } from 'react';
import Header from '@organisms/Header';

export interface DefaultProps {
  title: string
};

const Default: FC<DefaultProps> = ({ children, title }) => {
  return (
    <Fragment>
      <MobileMenu />
      <Navbar />
      <main>
        <Header title={title} />
        {children}
      </main>
    </Fragment>
  );
};


export default Default;