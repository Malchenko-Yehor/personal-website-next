import AnimatedH2 from '@atoms/AnimatedH2';
import PlanetsList from '@organisms/PlanetsList';
import { PlanetsListProps } from '@organisms/PlanetsList/PlanetsList';
import Container from '@styles/Container';
import { FC } from 'react';
import * as S from './Portfolio.styled';

export interface PortfolioProps extends PlanetsListProps {
  title: string;
}

const Portfolio: FC<PortfolioProps> = ({ title, items }) => {
  return (
    <S.Portfolio navigable title={title}>
      <Container>
        <AnimatedH2 text={title} />
        <PlanetsList items={items} />
      </Container>
    </S.Portfolio>
  );
};

export default Portfolio;
