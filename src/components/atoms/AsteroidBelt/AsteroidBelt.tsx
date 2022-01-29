import { getRandomInRange } from '@helpers/math';
import { FC, useMemo } from 'react';
import * as S from './AsteroidBelt.styled';
import { v4 as uuid } from 'uuid';

export interface AsteroidBeltProps {
  tilt?: number;
  rotateCounterClock?: boolean;
  rotationDuration?: number;
}

const AsteroidBelt: FC<AsteroidBeltProps> = ({ tilt, rotateCounterClock, rotationDuration }) => {
  const asteroidsList = useMemo(() => generateAsteroids(80, 120), []);

  return (
    <S.AsteroidBelt viewBox="0 0 160 160">
      <mask id="myMask">
        <rect width="160" height="160" fill="#fff" />
        <path d="M 30 80 A 50 50 0 0 1 130 80 Z" fill="#000" />
      </mask>

      <S.MaskContainer mask="url(#myMask)" tilt={tilt}>
        <rect width="160" height="160" fill="transparent" />
        <S.AsteroidsContainer>
          <S.AnimationContainer rotateCounterclock={rotateCounterClock} rotationDuration={rotationDuration}>
            <rect width="160" height="160" fill="transparent" />

            {asteroidsList.map((asteroid) => (
              <S.Asteroid key={asteroid.id} rotation={asteroid.rotation}>
                <circle cx="80" cy="80" r="1" fill="transparent" />
                <circle cx={asteroid.cx} cy={asteroid.cy} r={asteroid.radius} fill={asteroid.fill} />
              </S.Asteroid>
            ))}
          </S.AnimationContainer>
        </S.AsteroidsContainer>
      </S.MaskContainer>
    </S.AsteroidBelt>
  );
};

const generateAsteroids = (min: number, max: number) => {
  const asteroidsAmount = Math.round(getRandomInRange(min, max));
  const asteroids = new Array(asteroidsAmount).fill(null).map(() => {
    const hslLightness = getRandomInRange(70, 90);

    return {
      id: uuid(),
      radius: getRandomInRange(1, 2.2),
      rotation: getRandomInRange(0, 360),
      cx: getRandomInRange(118, 122),
      cy: getRandomInRange(78, 82),
      fill: `hsl(360, 0%, ${hslLightness}%)`,
    };
  });

  return asteroids;
};

export default AsteroidBelt;
