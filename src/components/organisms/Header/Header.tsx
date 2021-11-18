import H1 from '@atoms/H1';
import { devices } from '@styles/variables';
import { useTransform, useViewportScroll } from 'framer-motion';
import { FC } from 'react';
import * as S from './Header.styled';

export interface HeaderProps {
  title: string
};

const Header: FC<HeaderProps> = ({ title }) => {
  const { scrollY } = useViewportScroll();
  const skyLayerOpacity = useTransform(scrollY, value => 1 - value * 0.0007)
  const skyLayerY = useTransform(scrollY, value => value * 0.97);
  const mediumLayerY = useTransform(scrollY, value => value * 0.7);

  return (
    <S.Header>
      <S.SkyLayer style={{ y: skyLayerY, opacity: skyLayerOpacity }}>
        <picture>
          <source media={`(min-width: ${devices.tablet.width}px)`} srcSet="images/header-layers/dog-and-moon-sky.svg" />
          <img src="images/header-layers/dog-and-moon-sky-simplified.svg" alt="dog and moon sky layer" />
        </picture>
        <H1 text={title} />
      </S.SkyLayer>

      <S.MediumLayer style={{ y: mediumLayerY }}>
        <img src="images/header-layers/dog-and-moon-medium-layer.svg" alt="dog and moon middle layer" />
      </S.MediumLayer>

      <S.FrontLayer>
        <picture>
          <source media={`(min-width: ${devices.tablet.width}px)`} srcSet="images/header-layers/dog-and-moon-front-layer.svg" />
          <img src="images/header-layers/dog-and-moon-front-layer-simplified.svg" alt="dog and moon front layer" />
        </picture>
      </S.FrontLayer>
    </S.Header>
  );
};


export default Header;