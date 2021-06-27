import React, { FC } from 'react';
import * as S from './LanguageSwitcher.styled';
import SatelliteIcon from '@icons/satellite.svg';

export interface LanguageSwitcherProps { };

const LanguageSwitcher: FC<LanguageSwitcherProps> = props => {
  return (
    <S.LanguageSwitcher>
      <S.OpenButton>
        <SatelliteIcon />
      </S.OpenButton>
    </S.LanguageSwitcher>
  );
};


export default LanguageSwitcher;