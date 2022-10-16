import { textToKebabCase } from '@helpers/text';
import useNavigationStore from '@hooks/useNavigationStore';
import { forwardRef, ReactNode, useEffect, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import * as S from './Section.styled';

export interface SectionProps {
  noTopIndent?: boolean;
  noBottomIndent?: boolean;
  title?: string;
  navigable?: boolean;
  children?: ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { children, className, noTopIndent, noBottomIndent, navigable, title } = props;
  const addNavigalbeSectionId = useNavigationStore((state) => state.addNavigalbeSection);
  const id: string = useMemo(() => {
    return title ? textToKebabCase(title) : uuid();
  }, [title]);

  useEffect(() => {
    if (navigable) {
      addNavigalbeSectionId({ title, id });
    }
  }, [id]);

  return (
    <S.Section
      noTopIndent={noTopIndent}
      noBottomIndent={noBottomIndent}
      id={id}
      ref={ref}
      className={className}
    >
      {children}
    </S.Section>
  );
});

export default Section;
