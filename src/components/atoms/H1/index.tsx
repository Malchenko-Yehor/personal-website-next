import React, { FC } from 'react';
import * as S from './H1.styled';

export interface H1Props {
  text: string
};

const H1: FC<H1Props> = ({ text }) => {
  return <S.H1>{text}</S.H1>;
};


export default H1;