import { StrapiFile } from '@api/types';
import { FC } from 'react';
import * as S from './Interest.styled';
import Image from 'next/dist/client/image';

export interface InterestProps {
  title: string;
  iconUrl?: string;
  iconAlt?: string;
}

const Interest: FC<InterestProps> = ({ iconUrl, iconAlt, title }) => {
  return (
    <S.Interest>
      {iconUrl && (
        <S.Icon>
          <Image src={iconUrl} layout="fill" alt={iconAlt || title} />
        </S.Icon>
      )}

      <S.Title>{title}</S.Title>
    </S.Interest>
  );
};

export default Interest;
