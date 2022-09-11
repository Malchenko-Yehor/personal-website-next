import { getRandomInRange } from '@helpers/math';
import HoloLink, { HoloLinkProps } from '@molecules/HoloLink/HoloLink';
import { Transition, Variants } from 'framer-motion';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { Point } from 'types';
import * as S from './HoloList.styled';

interface Item extends HoloLinkProps {
  id: string;
}

export interface HoloListProps {
  items: Item[];
}

const HoloList: FC<HoloListProps> = ({ items }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const transition: Transition = {
    type: 'spring',
    damping: 15,
  };

  const itemVariants: Variants = {
    hidden: (position: Point) => ({
      x: `${position.x}%`,
      y: `${position.y}%`,
      opacity: 0,
      scale: 0.5,
    }),
    visible: {
      x: '0%',
      y: '0%',
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <S.HoloList
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.3 }}
    >
      {items.map((item) => (
        <S.Item key={item.id} variants={itemVariants} transition={transition} custom={getInitialPosition()}>
          <HoloLink color={item.color} icon={item.icon} url={item.url} />
        </S.Item>
      ))}
    </S.HoloList>
  );
};

const getInitialPosition = (): Point => {
  const angle = Math.random() * Math.PI * 2;
  const radius = getRandomInRange(100, 200);

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return { x, y };
};

export default HoloList;
