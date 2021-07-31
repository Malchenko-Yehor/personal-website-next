import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { FC } from 'react';
import { Icon } from 'types';
import * as S from './LanguageFlag.styled';

export interface LanguageFlagProps {
  icon: Icon,
  languagePrefix: string
};

const LanguageFlag: FC<LanguageFlagProps> = ({ icon, languagePrefix }) => {
  const router = useRouter();

  return (
    <Link href={router.asPath} locale={languagePrefix} >
      <S.LanguageFlag src={icon.src} alt={icon.alt} />
    </Link>
  );
};


export default LanguageFlag;