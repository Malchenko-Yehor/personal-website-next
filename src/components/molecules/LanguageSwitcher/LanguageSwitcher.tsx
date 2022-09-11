import LanguageFlag, { LanguageFlagProps } from '@atoms/LanguageFlag/LanguageFlag';
import { isDevEnv } from '@helpers/env';
import { getPointsAnglesInRange, getPointsCoordinates } from '@helpers/math';
import SatelliteIcon from '@icons/satellite.svg';
import { Variants } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { FC, useEffect, useRef, useState } from 'react';
import { Coordinates } from 'types';
import { StrapiFile } from 'api/types';

import * as S from './LanguageSwitcher.styled';
import { useOutsideClick } from '@hooks/useOutsideClick';

interface LanguageSwitcherProps {
  mediaFiles?: StrapiFile[];
  showDelay?: number;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ mediaFiles, showDelay = 0 }) => {
  const ref = useRef();
  const { locale, locales } = useRouter();
  const angles = getPointsAnglesInRange(140, 400, locales?.length);
  const coordinates = getPointsCoordinates(angles);
  const [opened, setOpened] = useState(false);
  const languages = getLanguages(locales, mediaFiles);
  const selectedLanguageFlagIcon = getSelectedLanguageIcon(languages, locale);
  const languageSwitches = languages.map((language, index) => ({
    language,
    coordinates: coordinates[index],
  }));

  useOutsideClick(ref, () => setOpened(false));

  // Close language swithcer when language is changed
  useEffect(() => {
    setOpened(false);
  }, [locale]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: showDelay,
      },
    },
  };

  return (
    <S.LanguageSwitcher ref={ref} variants={variants}>
      <S.OpenButton onClick={() => setOpened(!opened)}>
        <SatelliteIcon />
        {selectedLanguageFlagIcon && (
          <S.SelectedLanguageFlagIcon src={selectedLanguageFlagIcon.src} alt={selectedLanguageFlagIcon.alt} />
        )}
      </S.OpenButton>
      <S.FlagsAnchor>
        {languageSwitches.map((languageSwitch, index) => (
          <Switch key={index} {...languageSwitch} opened={opened} />
        ))}
      </S.FlagsAnchor>
    </S.LanguageSwitcher>
  );
};

interface SwitchProps {
  coordinates: Coordinates;
  opened: boolean;
  language: LanguageFlagProps;
}

const Switch: FC<SwitchProps> = ({ coordinates, opened, language }) => {
  const buttonSize = 24;
  const { x, y } = getFlagTranslate(coordinates, 35);
  const flagVariants: Variants = {
    closed: {
      opacity: 0,
      x: -buttonSize / 2,
      y: -buttonSize / 2,
    },
    opened: {
      opacity: 1,
      x: -buttonSize / 2 + x,
      y: -buttonSize / 2 + y,
    },
  };

  return (
    <S.Switch variants={flagVariants} initial="closed" animate={opened ? 'opened' : 'closed'}>
      <LanguageFlag {...language} />
    </S.Switch>
  );
};

export const getLanguages = (locales: string[], mediaFiles?: StrapiFile[]) => {
  const languages: LanguageFlagProps[] = locales.map((locale) => {
    const flagIconUrl = mediaFiles?.find((file) => file.name.match(`${locale}.svg`))?.url;
    const devFlagUrl = `/images/flags/${locale}.svg`;

    return {
      locale,
      icon: {
        alt: `${locale} flag`,
        src: isDevEnv() ? devFlagUrl : flagIconUrl,
      },
    };
  });

  return languages || [];
};

export const getSelectedLanguageIcon = (languages: LanguageFlagProps[], selectedLanguage: string) => {
  const language = languages.find((language) => {
    return language.locale === selectedLanguage;
  });

  return language?.icon;
};

export const getFlagTranslate = (coordinates: Coordinates, distance: number) => {
  return {
    x: coordinates.x * distance,
    y: -coordinates.y * distance,
  };
};

export default LanguageSwitcher;
