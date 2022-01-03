import HexagonCard, { HexagonCardProps } from '@molecules/HexagonCard/HexagonCard';
import { devices } from '@styles/variables';
import { FC, useContext, useMemo } from 'react';
import { viewportContext } from '@stores/viewport';
import * as S from './HexagonList.styled';
import { useInView } from 'react-intersection-observer';
import { Transition, Variants } from 'framer-motion';

export interface HexagonListItem extends HexagonCardProps {
  id: string;
}

export interface HexagonListProps {
  items: HexagonListItem[];
}

const HexagonList: FC<HexagonListProps> = ({ items }) => {
  const { width } = useContext(viewportContext);
  const itemsPerRow = width >= devices.tabletPortrait.width ? S.itemsTabletPortrait : S.itemsMobile;
  const list = useMemo(() => getShiftedItemList(items, itemsPerRow), [itemsPerRow]);
  const { ref, inView } = useInView({ triggerOnce: true });

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
            <HexagonCard image={item.image} title={item.title} key={item.id} />
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
