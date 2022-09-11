import BurgerButton from '@atoms/BurgerButton';
import HomeLink from '@atoms/HomeLink';
import throttle from '@helpers/throttle';
import useNavigationStore from '@hooks/useNavigationStore';
import Container from '@styles/Container';
import { Variants } from 'framer-motion';
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';
import shallow from 'zustand/shallow';
import * as S from './Navbar.styled';

export interface NavbarProps {
  scrollContainerRef?: MutableRefObject<HTMLElement>;
}

const Navbar: FC<NavbarProps> = ({ scrollContainerRef }) => {
  const prevScrollPos = useRef<number>(0);
  const [visible, setVisible] = useState(true);
  const [opened, setNavigationOpened] = useNavigationStore(
    (state) => [state.opened, state.setNavigationOpened],
    shallow
  );

  const onBurgerButtonClick = () => {
    setNavigationOpened(true);
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
