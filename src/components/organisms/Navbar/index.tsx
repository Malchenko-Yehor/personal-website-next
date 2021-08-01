import React, { FC } from 'react';
import BurgerButton from '@atoms/BurgerButton';
import { useMainSelector, useMainDispatch } from '@hooks/index';
import { setMobileNavigationOpened } from '@slices/mobile-navigation';
import * as S from './Navbar.styled';
import Container from '@styles/Container';
import HomeLink from '@atoms/HomeLink';
import { Row, Col } from 'styled-bootstrap-grid';
import LanguageSwitcher from '@molecules/LanguageSwitcher';
import { LanguageFlagProps } from '@atoms/LanguageFlag';

export interface NavbarProps {
  languages: Array<LanguageFlagProps>
};

const Navbar: FC<NavbarProps> = ({ languages }) => {
  const { opened } = useMainSelector(state => state.mobileNavigation);
  const dispatch = useMainDispatch();
  const onBurgerButtonClick = () => {
    dispatch(setMobileNavigationOpened(true));
  };

  return (
    <S.Navbar>
      <Container>
        <Row justifyContent="between" alignItems="center">
          <Col auto>
            <HomeLink />
          </Col>
          <Col auto>
            <LanguageSwitcher languages={languages} />
            <BurgerButton onClick={onBurgerButtonClick} animated={opened} />
          </Col>
        </Row>
      </Container>
    </S.Navbar>
  );
};


export default Navbar;