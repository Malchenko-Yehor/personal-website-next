import { getRandomInRange, isOdd } from '@helpers/math';
import Image from 'next/image';
import { FC, useMemo } from 'react';
import * as S from './Planet.styled';
import { v4 as uuid } from 'uuid';
import Crater from '@atoms/Crater';
import { StrapiFile } from '@api/types';
import AsteroidBelt from '@atoms/AsteroidBelt';
import RotatingTitle from '@atoms/RotatingTitle/RotatingTitle';

export interface PlanetProps {
  icon: StrapiFile;
  color: string;
  title: string;
  url: string;
  feature?: 'asteroids';
}

const Planet: FC<PlanetProps> = ({ icon, color, title, url, feature }) => {
  const craters = useMemo(() => generateCraters(7, 10), []);
  const asteroidBeltTilt = useMemo(() => getRandomInRange(-30, 30), []);

  return (
    <S.Planet>
      <S.Surface backgroundColor={color} initial="initial" whileHover="hover" href={url} target="_blank">
        <S.Shadow viewBox="0 0 100 100">
          <path
            d="M14.67 14.62a50 50 0 0 0 70.71 70.71s-31.11 14.14-58.69-12C-.16 47.84 14.67 14.62 14.67 14.62Z"
            fill={color}
          />
          <path
            d="M14.67 14.62a50 50 0 0 0 70.71 70.71s-31.11 14.14-58.69-12C-.16 47.84 14.67 14.62 14.67 14.62Z"
            style={{ opacity: '.2' }}
          />
        </S.Shadow>

        <S.CratersContainer>
          <Crater fill={color} size="50%" leftPosition="55%" topPosition="45%" zIndex={3} />

          <S.Icon>
            <Image
              width={icon.width}
              height={icon.height}
              src={icon.url}
              alt={icon?.alternativeText}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </S.Icon>

          {craters.map((crater) => (
            <Crater
              key={crater.id}
              size={crater.size}
              leftPosition={crater.leftPosition}
              topPosition={crater.topPosition}
              fill={color}
            />
          ))}
        </S.CratersContainer>

        {/* <RotatingTitle color={color} text={title} /> */}
      </S.Surface>

      {feature === 'asteroids' && <AsteroidBelt tilt={asteroidBeltTilt} />}
    </S.Planet>
  );
};

const generateCraters = (min: number, max: number) => {
  const cratersAmount = Math.round(getRandomInRange(min, max));
  const craters = new Array(cratersAmount).fill(null).map(() => {
    return {
      id: uuid(),
      size: `${getRandomInRange(4, 15)}%`,
      topPosition: `${getRandomInRange(5, 95)}%`,
      leftPosition: `${getRandomInRange(5, 95)}%`,
    };
  });

  return craters;
};

export default Planet;
