import React, { FC } from 'react';
import * as S from './Header.styled';
import Image, { ImageProps } from 'next/image'
import Container from '@styles/Container';
import { Col, Row } from 'styled-bootstrap-grid';
import H1 from '@atoms/H1';
import Paragraph from '@atoms/Paragraph';

export interface HeaderProps {
  title: string,
  intro?: string,
  image?: ImageProps
};

const Header: FC<HeaderProps> = ({ title, intro, image }) => {
  return (
    <S.Header>
      <Container>
        <Row justifyContent="center" lgAlignItems="center">
          {image &&
            <Col col={9} lg={4} lgOffset={1}>
              <S.HeaderImage>
                <Image layout="responsive"  {...image} />
              </S.HeaderImage>
            </Col>
          }
          <Col lg={5} lgOrder={-1}>
            <H1 text={title}></H1>
            {intro && <Paragraph text={intro}></Paragraph>}
          </Col>
        </Row>
      </Container>
    </S.Header>
  );
};


export default Header;