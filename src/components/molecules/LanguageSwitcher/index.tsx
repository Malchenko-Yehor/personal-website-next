import React, { FC, useState } from 'react';
import * as S from './LanguageSwitcher.styled';
import SatelliteIcon from '@icons/satellite.svg';
import { getPointsAnglesInRange, getPointsCoordinates } from '@helpers/math';
import { Coordinates } from 'types';
import { Variants } from 'framer-motion';
import LanguageFlag, { LanguageFlagProps } from '@atoms/LanguageFlag';

export interface LanguageSwitcherProps {
  languages: Array<LanguageFlagProps>
};

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ languages }) => {
  const angles = getPointsAnglesInRange(180, 360, languages.length)
  const coordinates = getPointsCoordinates(angles);
  const [opened, setOpened] = useState(false);
  const languageSwitches = languages.map((language, index) => ({
    language,
    coordinates: coordinates[index]
  }));

  return (
    <S.LanguageSwitcher>
      <S.OpenButton onClick={() => setOpened(!opened)}>
        <SatelliteIcon />
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
  const buttonSize = 14.9;
  const { x, y } = getFlagTranslate(coordinates, 33);
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

export const getFlagTranslate = (coordinates: Coordinates, distance: number) => {
  return {
    x: coordinates.x * distance,
    y: -coordinates.y * distance
  };
};


export default LanguageSwitcher;