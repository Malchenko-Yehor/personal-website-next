import React, { FC, useEffect, useRef, useState } from 'react';
import * as S from './LanguageSwitcher.styled';
import SatelliteIcon from '@icons/satellite.svg';
import { getPointsAnglesInRange, getPointsCoordinates } from '@helpers/math';
import { Coordinates } from 'types';
import { Variants } from 'framer-motion';
import LanguageFlag, { LanguageFlagProps } from '@atoms/LanguageFlag';
import { useRouter } from 'next/dist/client/router';
import { useOutsideClick } from '@hooks/index';

const LanguageSwitcher: FC = () => {
  const ref = useRef();
  const { locale, locales } = useRouter();
  const angles = getPointsAnglesInRange(180, 360, locales?.length)
  const coordinates = getPointsCoordinates(angles);
  const [opened, setOpened] = useState(false);
  const languages = getLanguages(locales);
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


const getLanguages = (locales: string[]) => {
  const languages: LanguageFlagProps[] = locales?.map(locale => {
    return {
      locale,
      icon: {
        alt: `${locale} flag`,
        src: `/images/flags/${locale}.svg`
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