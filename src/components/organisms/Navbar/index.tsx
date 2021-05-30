import React, { FC } from 'react';
import BurgerButton from '@atoms/BurgerButton';
import { useMainSelector, useMainDispatch } from '@hooks/index';
import { setMobileNavigationOpened } from '@slices/mobile-navigation';
import * as S from './Navbar.styled';

export interface NavbarProps { };

const Navbar: FC<NavbarProps> = props => {
  const { opened } = useMainSelector(state => state.mobileNavigation);
  const dispatch = useMainDispatch();
  const onBurgerButtonClick = () => {
    dispatch(setMobileNavigationOpened(true));
  };

  return (
    <S.Navbar>
      <BurgerButton onClick={onBurgerButtonClick} animated={opened} />
    </S.Navbar>
  );
};


export default Navbar;