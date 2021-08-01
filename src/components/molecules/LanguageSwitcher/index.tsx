import React, { FC, useRef, useState } from 'react';
import * as S from './LanguageSwitcher.styled';
import SatelliteIcon from '@icons/satellite.svg';
import { getPointsAnglesInRange, getPointsCoordinates } from '@helpers/math';
import { Coordinates } from 'types';
import { Variants } from 'framer-motion';
import LanguageFlag, { LanguageFlagProps } from '@atoms/LanguageFlag';
import { useRouter } from 'next/dist/client/router';
import { useOutsideClick } from '@hooks/index';

export interface LanguageSwitcherProps {
  languages: Array<LanguageFlagProps>
};

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ languages }) => {
  const ref = useRef();
  const router = useRouter();
  const angles = getPointsAnglesInRange(180, 360, languages.length)
  const coordinates = getPointsCoordinates(angles);
  const [opened, setOpened] = useState(false);
  const selectedLanguageFlagIcon = getSelectedLanguageIcon(languages, router.locale);
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

const getSelectedLanguageIcon = (languages: Array<LanguageFlagProps>, selectedLanguage: string) => {
  const language = languages.find(language => {
    return language.languagePrefix === selectedLanguage;
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