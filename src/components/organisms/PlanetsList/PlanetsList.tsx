import { isEven } from '@helpers/math';
import Planet from '@organisms/Planet';
import { PlanetProps } from '@organisms/Planet/Planet';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './PlanetsList.styled';

export interface PlanetsListProps {
  items: ItemProps[];
}

const PlanetsList: FC<PlanetsListProps> = ({ items }) => {
  return (
    <S.PlanetsList>
      {items.map((item, index) => (
        <Item
          key={item.id}
          isEven={isEven(index + 1)}
          id={item.id}
          title={item.title}
          color={item.color}
          icon={item.icon}
          url={item.url}
          feature={item.feature}
        />
      ))}
    </S.PlanetsList>
  );
};

interface ItemProps extends PlanetProps {
  id: string;
  isEven: boolean;
}

const Item: FC<ItemProps> = ({ title, color, icon, url, isEven, feature }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <S.Item ref={ref} isAnimated={inView} isEven={isEven}>
      <Planet title={title} color={color} icon={icon} url={url} feature={feature} />
    </S.Item>
  );
};

export default PlanetsList;
