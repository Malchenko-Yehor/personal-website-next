import { FC } from 'react';
import * as S from './AsteroidBelt.styled';
import AsteroidBeltAnimation from '@assets/illustrations/asteroid-belt.svg';

export interface AsteroidBeltProps {
  tilt?: number;
}

const AsteroidBelt: FC<AsteroidBeltProps> = ({ tilt }) => {
  return (
    <S.AsteroidBelt tilt={tilt}>
      <AsteroidBeltAnimation />
    </S.AsteroidBelt>
  );
};

export default AsteroidBelt;
