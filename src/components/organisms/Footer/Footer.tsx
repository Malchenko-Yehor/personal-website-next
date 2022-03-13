import { devices } from '@styles/variables';
import { FC } from 'react';
import * as S from './Footer.styled';

export interface FooterProps {}

const Footer: FC<FooterProps> = (props) => {
  return (
    <S.Footer>
      <picture>
        <source
          media={`(min-width: ${devices.tablet.width}px)`}
          srcSet="images/illustrations/dog-and-moon-desktop.svg"
        />
        <S.Illustration src="images/illustrations/dog-and-moon.svg" alt="dog and moon front layer" />
      </picture>
    </S.Footer>
  );
};

export default Footer;
