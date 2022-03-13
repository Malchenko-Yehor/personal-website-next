import BurgerButton from '@atoms/BurgerButton';
import HomeLink from '@atoms/HomeLink';
import { useMainDispatch, useMainSelector } from '@hooks/index';
import { setMobileNavigationOpened } from '@slices/mobile-navigation';
import Container from '@styles/Container';
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';
import * as S from './Navbar.styled';
import throttle from '@helpers/throttle';
import { Variants } from 'framer-motion';

export interface NavbarProps {
  scrollContainerRef?: MutableRefObject<HTMLElement>;
}

const Navbar: FC<NavbarProps> = ({ scrollContainerRef }) => {
  const prevScrollPos = useRef<number>(0);
  const [visible, setVisible] = useState(true);
  const { opened } = useMainSelector((state) => state.mobileNavigation);
  const dispatch = useMainDispatch();
  const onBurgerButtonClick = () => {
    dispatch(setMobileNavigationOpened(true));
  };

  const handleScroll = throttle(() => {
    const currentScrollPos = scrollContainerRef.current.scrollTop;
    const isScrolledUp = prevScrollPos.current > currentScrollPos;

    setVisible(isScrolledUp || currentScrollPos < 10);

    prevScrollPos.current = currentScrollPos;
  }, 150);

  useEffect(() => {
    scrollContainerRef.current.addEventListener('scroll', handleScroll);

    return () => scrollContainerRef.current.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants: Variants = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: '0%',
    },
  };

  return (
    <S.Navbar
      variants={navbarVariants}
      animate={visible ? 'visible' : 'hidden'}
      initial="visible"
      transition={{ duration: 0.3 }}
    >
      <Container>
        <Row justifyContent="between" alignItems="center">
          <Col auto style={{ flexGrow: 1 }}>
            <HomeLink />
          </Col>
          <Col auto>
            <BurgerButton onClick={onBurgerButtonClick} animated={opened} />
          </Col>
        </Row>
      </Container>
    </S.Navbar>
  );
};

export default Navbar;
