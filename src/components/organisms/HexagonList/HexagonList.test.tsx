import React from 'react';
import { getShiftedItemList, HexagonListItem } from './HexagonList';
import { LongList } from './HexagonList.stories';

const hexagonListItemsMock = LongList.args.items as HexagonListItem[];

describe('getShiftedItemList()', () => {
  test('Correctly marks 4 and 9 item as shifted when row has 3 items', () => {
    const shiftedItemList = getShiftedItemList(hexagonListItemsMock, 3);

    expect(shiftedItemList[3].isShifted).toBeTruthy();
    expect(shiftedItemList[8].isShifted).toBeTruthy();
  });

  test('Correctly marks 5 and 12 item as shifted when row has 4 items', () => {
    const shiftedItemList = getShiftedItemList(hexagonListItemsMock, 4);

    expect(shiftedItemList[4].isShifted).toBeTruthy();
    expect(shiftedItemList[11].isShifted).toBeTruthy();
  });

  test('Mark none of the items if amount it isnt enough', () => {
    const shiftedItemList = getShiftedItemList(hexagonListItemsMock.slice(0, 3), 3);

    shiftedItemList.forEach((item) => {
      expect(item.isShifted).toBeFalsy();
    });
  });
});
