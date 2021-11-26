import BurgerButton from '@atoms/BurgerButton';
import HomeLink from '@atoms/HomeLink';
import { useMainDispatch, useMainSelector } from '@hooks/index';
import LanguageSwitcher from '@molecules/LanguageSwitcher';
import { setMobileNavigationOpened } from '@slices/mobile-navigation';
import Container from '@styles/Container';
import { FC } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';
import { StrapiFile } from 'api/types';
import * as S from './Navbar.styled';

export interface NavbarProps {
  mediaFiles?: StrapiFile[]
};

const Navbar: FC<NavbarProps> = ({ mediaFiles }) => {
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
            <LanguageSwitcher mediaFiles={mediaFiles} />
            <BurgerButton onClick={onBurgerButtonClick} animated={opened} />
          </Col>
        </Row>
      </Container>
    </S.Navbar>
  );
};


export default Navbar;