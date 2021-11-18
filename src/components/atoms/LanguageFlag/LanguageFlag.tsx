import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { FC } from 'react';
import { Icon } from 'types';
import * as S from './LanguageFlag.styled';

export interface LanguageFlagProps {
  icon: Icon,
  locale: string
};

const LanguageFlag: FC<LanguageFlagProps> = ({ icon, locale }) => {
  const router = useRouter();

  return (
    <Link href={router.asPath} locale={locale} >
      <S.LanguageFlag src={icon.src} alt={icon.alt} />
    </Link>
  );
};


export default LanguageFlag;