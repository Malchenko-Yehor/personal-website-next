import { FC } from 'react';
import Link from 'next/link';
import AnimatedEarthIcon from '@icons/earth-animated.svg';
import * as S from './HomeLink.styled';


const HomeLink: FC = () => {
  return (
    <Link href="/" passHref>
      <S.HomeLink>
        <AnimatedEarthIcon />
      </S.HomeLink>
    </Link>
  );
};


export default HomeLink;