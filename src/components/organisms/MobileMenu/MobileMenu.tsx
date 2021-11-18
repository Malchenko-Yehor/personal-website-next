import CrossButton from '@atoms/CrossButton';
import SpaceShuttle from '@atoms/SpaceShuttle';
import { useMainDispatch, useMainSelector } from '@hooks/index';
import Clouds from '@molecules/Clouds';
import { setMobileNavigationOpened } from '@slices/mobile-navigation';
import { FC } from 'react';
import * as S from './MobileMenu.styled';


export interface MobileMenuProps {
  alwaysOpened?: boolean
};

const CLOUDS_AMOUNT = 15;
const SHUTTLE_SPEED = 1.5;

const MobileMenu: FC<MobileMenuProps> = ({ alwaysOpened }) => {
  const { opened } = useMainSelector(state => state.mobileNavigation);
  const dispatch = useMainDispatch();
  const onCrossButtonClick = () => {
    dispatch(setMobileNavigationOpened(false));
  };

  return (
    <S.MobileMenu opened={opened || alwaysOpened}>
      <SpaceShuttle
        visible={opened || alwaysOpened}
        speed={SHUTTLE_SPEED}
      />
      <Clouds
        visible={opened || alwaysOpened}
        cloudsAmount={CLOUDS_AMOUNT}
        animationSpeed={SHUTTLE_SPEED - 0.5}
        delay={0.2}
      />
      <CrossButton
        onClick={onCrossButtonClick}
        animated={opened || alwaysOpened}
        delay={SHUTTLE_SPEED + 1}
      />
    </S.MobileMenu>
  );
};


export default MobileMenu;