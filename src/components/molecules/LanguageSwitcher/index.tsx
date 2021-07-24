import React, { FC } from 'react';
import * as S from './LanguageSwitcher.styled';
import SatelliteIcon from '@icons/satellite.svg';
import { degreesToRad, getPointsAnglesInRange, getPointsCoordinates } from '@helpers/math';
import { Coordinates } from 'types';

export interface LanguageSwitcherProps { };

const LanguageSwitcher: FC<LanguageSwitcherProps> = props => {
  const angles = getPointsAnglesInRange(180, 360, 2)
  const coordinates = getPointsCoordinates(angles);

  console.log(angles);
  console.log(coordinates);

  // const xPx = `calc(-50% + ${x}px)`;
  // const yPx = `calc(-50% + ${y}px)`;

  // console.log(x, y);

  // const style = { transform: `translate(${xPx}, ${yPx})` }

  return (
    <S.LanguageSwitcher>
      <S.OpenButton>
        <SatelliteIcon />
      </S.OpenButton>
      <S.FlagsAnchor>
        {coordinates.map((coordinates, index) => {
          const translate = getFlagTranslate(coordinates, 20);
          const style = { transform: translate };

          return <S.WhiteCircle style={style} />;
        })}
      </S.FlagsAnchor>
    </S.LanguageSwitcher>
  );
};

const getFlagTranslate = (coordinates: Coordinates, distance: number) => {
  const xTranslate = `calc(-50% + ${coordinates.x * distance}px)`;
  const yTranslate = `calc(-50% + ${-coordinates.y * distance}px)`;

  return `translate(${xTranslate}, ${yTranslate})`;
};


export default LanguageSwitcher;