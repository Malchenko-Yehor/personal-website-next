import Image from 'next/image';
import { FC } from 'react';
import * as S from './CircleIcon.styled';

export interface CircleIconProps {
  src: string
};

const CircleIcon: FC<CircleIconProps> = ({ src }) => {
  return (
    <S.CirleIcon>
      <Image width={30} height={30} src={src} layout="fixed" />
    </S.CirleIcon>
  );
};


export default CircleIcon;