import Footer from '@organisms/Footer';
import Menu from '@organisms/MobileMenu';
import Navbar from '@organisms/Navbar';
import Head from 'next/head';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { PageProps } from 'types';
import * as S from './Default.styled';

export interface DefaultLayoutProps extends PageProps {
  title: string;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const parallaxFrontRef = useRef<HTMLDivElement>();
  const [bgHeight, setBgHeight] = useState<number>();
  const parallaxContainerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener('load', () => {
      setBgHeight(parallaxFrontRef.current.offsetHeight * 0.88);
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <S.ParallaxContainer ref={parallaxContainerRef}>
        <Navbar scrollContainerRef={parallaxContainerRef} />
        <S.Background bgHeight={bgHeight} />

        <S.ParallaxFront ref={parallaxFrontRef}>
          <S.Main>{children}</S.Main>
          <Footer />
        </S.ParallaxFront>
      </S.ParallaxContainer>
    </Fragment>
  );
};

export default DefaultLayout;
