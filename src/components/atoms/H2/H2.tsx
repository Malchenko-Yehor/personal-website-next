import { FC } from 'react';
import * as S from './H2.styled';

export interface H2Props {
  text: string
};

const H2: FC<H2Props> = ({ text }) => {
  return (
    <S.H2>{text}</S.H2>
  );
};


export default H2;