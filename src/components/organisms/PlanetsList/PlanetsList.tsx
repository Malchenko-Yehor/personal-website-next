import { isOdd } from '@helpers/math';
import Planet from '@organisms/Planet';
import { PlanetProps } from '@organisms/Planet/Planet';
import { Variants } from 'framer-motion';
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
          isOdd={isOdd(index + 1)}
          id={item.id}
          title={item.title}
          color={item.color}
          icon={item.icon}
          url={item.url}
        />
      ))}
    </S.PlanetsList>
  );
};

interface ItemProps extends PlanetProps {
  id: string;
  isOdd: boolean;
}

const Item: FC<ItemProps> = ({ title, color, icon, url, isOdd }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const variants: Variants = {
    initial: {
      x: isOdd ? '-30%' : '30%',
      y: isOdd ? '0%' : '50%',
      opacity: 0,
    },
    animated: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <S.Item ref={ref} variants={variants} initial="initial" animate={inView ? 'animated' : 'initial'}>
      <Planet title={title} color={color} icon={icon} url={url} />
    </S.Item>
  );
};

export default PlanetsList;
