import AstronautIllustration from '@assets/illustrations/astronaut.svg';
import H1 from '@atoms/H1';
import Paragraph from '@atoms/Paragraph';
import InterestsList, { InterestsListItem } from '@molecules/InterestsList/InterestsList';
import Container from '@styles/Container';
import { motion, Transition, Variants } from 'framer-motion';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { Col, Row } from 'styled-bootstrap-grid';
import * as S from './AboutMe.styled';

export interface AboutMeProps {
  title: string;
  intro: string;
  interests?: InterestsListItem[];
}

const AboutMe: FC<AboutMeProps> = ({ title, intro, interests }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const transition: Transition = {
    staggerChildren: 0.2,
  };

  const astronautVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <S.AboutMe ref={ref} navigable title={title}>
      <Container>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={transition}>
          <Row justifyContent="center" mdJustifyContent="between">
            <Col col={7} md={5}>
              <motion.div variants={astronautVariants}>
                <AstronautIllustration />
              </motion.div>
            </Col>
            <Col col={12} md={6}>
              <motion.div variants={textVariants}>
                <H1 text={title} />
              </motion.div>
              <motion.div variants={textVariants}>
                <Paragraph text={intro} />
              </motion.div>
              {interests && <InterestsList items={interests} />}
            </Col>
          </Row>
        </motion.div>
      </Container>
    </S.AboutMe>
  );
};

export default AboutMe;
