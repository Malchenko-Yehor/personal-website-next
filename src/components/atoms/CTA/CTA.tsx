import { FC, MouseEventHandler } from 'react';
import * as S from './CTA.styled';

interface CTAProps {
  label: string,
  href?: string,
  onClick?: MouseEventHandler
};

const CTA: FC<CTAProps> = ({ label, href, onClick }) => {
  if (href) return (
    <S.Anchor href={href}>{label}</S.Anchor>
  );

  return (
    <S.Button onClick={onClick}>{label}</S.Button>
  );
};

export default CTA;