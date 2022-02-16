import { StrapiFile } from '@api/types';
import { FC } from 'react';
import * as S from './Interest.styled';
import Image from 'next/dist/client/image';

export interface InterestProps {
  icon: StrapiFile;
  title: string;
}

const Interest: FC<InterestProps> = ({ icon, title }) => {
  return (
    <S.Interest>
      <S.Icon>
        <Image src={icon.url} layout="fill" alt={icon.alternativeText} />
      </S.Icon>
      <S.Title>{title}</S.Title>
    </S.Interest>
  );
};

export default Interest;
