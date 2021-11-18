import React, { FC, useRef, useState } from 'react';
import * as S from './LanguageSwitcher.styled';
import SatelliteIcon from '@icons/satellite.svg';
import { getPointsAnglesInRange, getPointsCoordinates } from '@helpers/math';
import { Coordinates, StrapiFile } from 'types';
import { Variants } from 'framer-motion';
import LanguageFlag, { LanguageFlagProps } from '@atoms/LanguageFlag/LanguageFlag';
import { useRouter } from 'next/dist/client/router';
import { useOutsideClick } from '@hooks/index';
import { isDevEnv } from '@helpers/env';

interface LanguageSwitcherProps {
  mediaFiles?: StrapiFile[]
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ mediaFiles }) => {
  const ref = useRef();
  const { locale, locales } = useRouter();
  const angles = getPointsAnglesInRange(180, 360, locales?.length)
  const coordinates = getPointsCoordinates(angles);
  const [opened, setOpened] = useState(false);
  const languages = getLanguages(locales, mediaFiles);
  const selectedLanguageFlagIcon = getSelectedLanguageIcon(languages, locale);
  const languageSwitches = languages.map((language, index) => ({
    language,
    coordinates: coordinates[index]
  }));

  useOutsideClick(ref, () => setOpened(false));

  return (
    <S.LanguageSwitcher ref={ref}>
      <S.OpenButton onClick={() => setOpened(!opened)}>
        <SatelliteIcon />
        {selectedLanguageFlagIcon &&
          <S.SelectedLanguageFlagIcon
            src={selectedLanguageFlagIcon.src}
            alt={selectedLanguageFlagIcon.alt}
          />
        }
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
  coordinates: Coordinates,
  opened: boolean,
  language: LanguageFlagProps
};

const Switch: FC<SwitchProps> = ({ coordinates, opened, language }) => {
  const buttonSize = 17;
  const { x, y } = getFlagTranslate(coordinates, 35);
  const flagVariants: Variants = {
    closed: {
      opacity: 0,
      x: -buttonSize / 2,
      y: -buttonSize / 2
    },
    opened: {
      opacity: 1,
      x: -buttonSize / 2 + x,
      y: -buttonSize / 2 + y
    }
  };

  return (
    <S.Switch
      variants={flagVariants}
      initial="closed"
      animate={opened ? 'opened' : 'closed'}
    >
      <LanguageFlag {...language} />
    </S.Switch>
  );
};


const getLanguages = (locales: string[], mediaFiles?: StrapiFile[]) => {
  const languages: LanguageFlagProps[] = locales?.map(locale => {
    const flagIconUrl = mediaFiles?.find(file => file.url.match(`${locale}.svg`))?.url;
    const devFlagUrl = `/images/flags/${locale}.svg`

    return {
      locale,
      icon: {
        alt: `${locale} flag`,
        src: isDevEnv() ? devFlagUrl : flagIconUrl
      }
    }
  });

  return languages || [];
};

const getSelectedLanguageIcon = (languages: LanguageFlagProps[], selectedLanguage: string) => {
  const language = languages.find(language => {
    return language.locale === selectedLanguage;
  });

  return language?.icon;
};

export const getFlagTranslate = (coordinates: Coordinates, distance: number) => {
  return {
    x: coordinates.x * distance,
    y: -coordinates.y * distance
  };
};


export default LanguageSwitcher;