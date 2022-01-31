import { getRandomInRange } from '@helpers/math';
import { FC, useMemo } from 'react';
import * as S from './AsteroidBelt.styled';

export interface AsteroidBeltProps {
  tilt?: number;
  rotateCounterClock?: boolean;
  rotationDuration?: number;
}

const AsteroidBelt: FC<AsteroidBeltProps> = ({ tilt, rotateCounterClock, rotationDuration }) => {
  const asteroidsList = useMemo(() => generateAsteroids(70, 200), []);

  return (
    <S.AsteroidBelt viewBox="0 0 160 160" tilt={tilt}>
      <clipPath id="myClip">
        <path d="M0,0V160H160V0ZM30,80a50,50,0,0,1,100,0Z" />
      </clipPath>

      <g clipPath="url(#myClip)">
        <rect width="160" height="160" fill="transparent" />
        <S.AsteroidsContainer>
          <rect width="160" height="160" fill="transparent" />
          <S.AnimationContainer rotateCounterclock={rotateCounterClock} rotationDuration={rotationDuration}>
            <rect width="160" height="160" fill="transparent" />
            {asteroidsList.map((asteroid, index) => (
              <circle
                key={index}
                cx={asteroid.cx}
                cy={asteroid.cy}
                r={asteroid.radius}
                fill={asteroid.fill}
                transform={`rotate(${asteroid.rotation}, 80, 80)`}
              />
            ))}
          </S.AnimationContainer>
        </S.AsteroidsContainer>
      </g>
    </S.AsteroidBelt>
  );
};

const generateAsteroids = (min: number, max: number) => {
  const asteroidsAmount = Math.round(getRandomInRange(min, max));
  const asteroids = new Array(asteroidsAmount).fill(null).map(() => {
    const hslLightness = getRandomInRange(70, 90);

    return {
      radius: getRandomInRange(1, 2.2),
      rotation: getRandomInRange(0, 360),
      cx: getRandomInRange(118, 125),
      cy: getRandomInRange(78, 82),
      fill: `hsl(360, 0%, ${hslLightness}%)`,
    };
  });

  return asteroids;
};

export default AsteroidBelt;
