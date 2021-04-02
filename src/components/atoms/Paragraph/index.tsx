import React, { FC } from 'react';
import * as S from './Paragraph.styled';

export interface ParagraphProps {
  text: string
};

const Paragraph: FC<ParagraphProps> = ({ text }) => {
  return <S.Paragraph>{text}</S.Paragraph>;
};


export default Paragraph;