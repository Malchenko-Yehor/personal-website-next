import H2 from '@atoms/H2';
import HexagonList, { HexagonListProps } from '@organisms/HexagonList/HexagonList';
import { FC } from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import * as S from './Skills.styled';

export interface SkillsProps extends HexagonListProps {
  title: string;
}

const Skills: FC<SkillsProps> = ({ title, items }) => {
  return (
    <S.Skills>
      <Container>
        <Row justifyContent="center">
          <Col lg={10} xl={8}>
            <H2 text={title} />
            <HexagonList items={items} />
          </Col>
        </Row>
      </Container>
    </S.Skills>
  );
};

export default Skills;
