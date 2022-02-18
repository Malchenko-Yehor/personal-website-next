import CrossButton from '@atoms/CrossButton';
import SpaceShuttle from '@atoms/SpaceShuttle';
import { lockBodyScroll, unlockBodyScroll } from '@helpers/body-scroll-lock';
import { useMainDispatch, useMainSelector } from '@hooks/index';
import Clouds from '@molecules/Clouds';
import LanguageSwitcher from '@molecules/LanguageSwitcher';
import { setMobileNavigationOpened } from '@slices/mobile-navigation';
import { FC, useEffect } from 'react';
import * as S from './Menu.styled';

export interface MenuProps {
  alwaysOpened?: boolean;
}

const CLOUDS_AMOUNT = 15;
const SHUTTLE_SPEED = 1.5;

const Menu: FC<MenuProps> = ({ alwaysOpened }) => {
  const { opened } = useMainSelector((state) => state.mobileNavigation);
  const dispatch = useMainDispatch();
  const onCrossButtonClick = () => {
    dispatch(setMobileNavigationOpened(false));
  };

  useEffect(() => {
    if (opened) lockBodyScroll();
    else unlockBodyScroll();
  }, [opened]);

  return (
    <S.Menu opened={opened || alwaysOpened} initial="hidden" animate={opened ? 'visible' : 'hidden'}>
      <SpaceShuttle visible={opened || alwaysOpened} speed={SHUTTLE_SPEED} />
      <Clouds
        visible={opened || alwaysOpened}
        cloudsAmount={CLOUDS_AMOUNT}
        animationSpeed={SHUTTLE_SPEED - 0.5}
        delay={0.2}
      />
      <CrossButton onClick={onCrossButtonClick} animated={opened || alwaysOpened} delay={SHUTTLE_SPEED + 1} />

      <LanguageSwitcher showDelay={SHUTTLE_SPEED + 1} />
    </S.Menu>
  );
};

export default Menu;
