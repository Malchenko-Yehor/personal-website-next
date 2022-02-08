import { getRandomInRange } from '@helpers/math';
import { darken } from 'polished';
import { FC } from 'react';
import * as S from './PlanetRings.styled';

export interface PlanetRingsProps {
  color?: string;
  tilt?: number;
}

const PlanetRings: FC<PlanetRingsProps> = ({ color = '#eee', tilt = 0 }) => {
  const ringsList = generateRings(color);

  return (
    <S.PlanetRings viewBox="0 0 160 160" tilt={tilt}>
      <clipPath id="myClip">
        <path d="M0,0V160H160V0ZM30,80a50,50,0,0,1,100,0Z" />
      </clipPath>

      <g clip-path="url(#myClip)">
        {ringsList.map((ring, index) => (
          <ellipse
            key={index}
            rx={ring.rx}
            ry={ring.ry}
            stroke={ring.color}
            cx="80"
            cy="80"
            fill="transparent"
            stroke-width="2.4"
          />
        ))}
      </g>
    </S.PlanetRings>
  );
};

export const generateRings = (ringColor: string) => {
  const rings = new Array(8).fill(null).map((_, index) => {
    const darkenAmount = getRandomInRange(0, 0.3);

    return {
      rx: 63 + index * 2,
      ry: 18 + index * 2,
      color: darken(darkenAmount, ringColor),
    };
  });

  return rings;
};

export default PlanetRings;
