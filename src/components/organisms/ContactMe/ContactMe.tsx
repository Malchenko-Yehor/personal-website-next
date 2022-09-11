import AnimatedH2 from '@atoms/AnimatedH2';
import Section from '@atoms/Section';
import HoloList, { HoloListProps } from '@organisms/HoloList/HoloList';
import Container from '@styles/Container';
import { FC } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';

export interface ContactMeProps extends HoloListProps {
  title: string;
}

const ContactMe: FC<ContactMeProps> = ({ title, items }) => {
  return (
    <Section>
      <Container>
        <AnimatedH2 text={title} />

        <Row justifyContent="center">
          <Col lg={8}>
            <HoloList items={items} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactMe;
