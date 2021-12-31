import HexagonCard, { HexagonCardProps } from '@molecules/HexagonCard/HexagonCard';
import { devices } from '@styles/variables';
import React, { FC, useContext, useEffect, useMemo } from 'react';
import { viewportContext } from 'stores/viewport';
import * as S from './HexagonList.styled';

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

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <S.HexagonList>
      {list.map((item) => {
        return (
          <S.Item key={item.id} isShifted={item.isShifted}>
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
