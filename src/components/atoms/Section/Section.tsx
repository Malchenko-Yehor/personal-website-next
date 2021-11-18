import { FC } from 'react';
import * as S from './Section.styled';
export interface SectionProps {
  noTopIndent?: boolean,
  noBottomIndent?: boolean
};

const Section: FC<SectionProps> = ({ children, noTopIndent, noBottomIndent }) => {
  return (
    <S.Section noTopIndent={noTopIndent} noBottomIndent={noBottomIndent}>
      {children}
    </S.Section>
  );
};


export default Section;