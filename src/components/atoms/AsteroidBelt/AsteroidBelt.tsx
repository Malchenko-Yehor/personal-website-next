import { FC } from 'react';
import * as S from './AsteroidBelt.styled';
import AsteroidBeltAnimation from './asteroid-belt.svg';

export interface AsteroidBeltProps {
  tilt?: number;
}

const AsteroidBelt: FC<AsteroidBeltProps> = ({ tilt }) => {
  return (
    <S.AsteroidBelt tilt={tilt}>
      <img src="/images/asteroid-belt.svg" />
      {/* <AsteroidBeltAnimation /> */}
    </S.AsteroidBelt>
  );
};

export default AsteroidBelt;
