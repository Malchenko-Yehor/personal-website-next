import { FC } from 'react';
import * as S from './H3.styled';

export interface H3Props {
  text: string
};

const H3: FC<H3Props> = ({ text }) => {
  return <S.H3>{text}</S.H3>;
};


export default H3;