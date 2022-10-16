import HexagonList, { HexagonListProps } from '@organisms/HexagonList/HexagonList';
import { FC } from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import * as S from './Skills.styled';
import AnimatedH2 from '@atoms/AnimatedH2';

export interface SkillsProps extends HexagonListProps {
  title: string;
}

const Skills: FC<SkillsProps> = ({ title, items }) => {
  return (
    <S.Skills navigable title={title}>
      <Container>
        <Row justifyContent="center">
          <Col lg={10} xl={8}>
            <AnimatedH2 text={title} />
            <HexagonList items={items} />
          </Col>
        </Row>
      </Container>
    </S.Skills>
  );
};

export default Skills;
