import React, { FC, MouseEventHandler } from 'react';
import * as S from './CTA.styled';

export interface CTAProps {
  label: string,
  href?: string,
  onClick?: MouseEventHandler
};

const CTA: FC<CTAProps> = ({ label, href, onClick }) => {
  if (href) return (
    <S.Anchor href={href}>
      <S.Label>{label}</S.Label>
    </S.Anchor>
  );

  return (
    <S.Button onClick={onClick}>
      <S.Label>{label}</S.Label>
    </S.Button>
  );
};

export default CTA;