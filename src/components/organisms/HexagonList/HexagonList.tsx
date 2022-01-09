import HexagonCard, { HexagonCardProps } from '@organisms/HexagonCard/HexagonCard';
import { devices } from '@styles/variables';
import { FC, useEffect, useMemo, useState } from 'react';
import * as S from './HexagonList.styled';
import { useInView } from 'react-intersection-observer';
import { Transition, Variants } from 'framer-motion';
import { useOnMediaQueryChange } from '@hooks/index';

export interface HexagonListItem extends HexagonCardProps {
  id: string;
}

export interface HexagonListProps {
  items: HexagonListItem[];
}

const HexagonList: FC<HexagonListProps> = ({ items }) => {
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const list = useMemo(() => getShiftedItemList(items, itemsPerRow), [itemsPerRow]);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    setItemsPerRow(getItemsPerRow());
  }, []);

  const getItemsPerRow = (): number => {
    if (window.innerWidth >= devices.tabletPortrait.width) {
      return S.itemsTabletPortrait;
    } else {
      return S.itemsMobile;
    }
  };

  useOnMediaQueryChange([devices.phone.width, devices.tabletPortrait.width], () => {
    setItemsPerRow(getItemsPerRow());
  });

  const transition: Transition = {
    type: 'spring',
    damping: 10,
    mass: 1,
    stiffness: 100,
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <S.HexagonList
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.075 }}
    >
      {list.map((item) => {
        return (
          <S.Item key={item.id} isShifted={item.isShifted} variants={itemVariants} transition={transition}>
            <HexagonCard image={item.image} title={item.title} key={item.id} rating={item.rating} />
          </S.Item>
        );
      })}
    </S.HexagonList>
  );
};

export const getShiftedItemList = (items: HexagonListItem[], itemsPerRow: number) => {
  let shiftedItemIndex = itemsPerRow;

  return items.map((item, index) => {
    const isShifted = index === shiftedItemIndex;

    if (isShifted) {
      shiftedItemIndex += 2 * itemsPerRow - 1;
    }

    return { ...item, isShifted };
  });
};

export default HexagonList;
