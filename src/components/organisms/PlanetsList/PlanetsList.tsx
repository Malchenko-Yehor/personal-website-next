import Planet from '@organisms/Planet';
import { PlanetProps } from '@organisms/Planet/Planet';
import { FC } from 'react';
import * as S from './PlanetsList.styled';

interface Item extends PlanetProps {
  id: string;
}

export interface PlanetsListProps {
  items: Item[];
}

const PlanetsList: FC<PlanetsListProps> = ({ items }) => {
  return (
    <S.PlanetsList>
      {items.map((item) => (
        <S.Item key={item.id}>
          <Planet title={item.title} color={item.color} icon={item.icon} url={item.url} />
        </S.Item>
      ))}
    </S.PlanetsList>
  );
};

export default PlanetsList;
