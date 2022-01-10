import H2 from '@atoms/H2';
import { Section } from '@atoms/Section/Section.styled';
import HexagonList, { HexagonListProps } from '@organisms/HexagonList/HexagonList';
import { FC } from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';

export interface SkillsProps extends HexagonListProps {
  title: string;
}

const Skills: FC<SkillsProps> = ({ title, items }) => {
  return (
    <Section>
      <Container>
        <Row justifyContent="center">
          <Col lg={10} xl={8}>
            <H2 text={title} />
            <HexagonList items={items} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Skills;
