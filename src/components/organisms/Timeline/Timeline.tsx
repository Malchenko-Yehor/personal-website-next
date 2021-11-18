import React, { FC } from 'react';
import InfoCard, { InfoCardProps } from '@molecules/InfoCard/InfoCard';
import * as S from './Timeline.styled';
import CircleIcon from '@atoms/CircleIcon';
import { Col, Row } from 'styled-bootstrap-grid';
import Container from '@styles/Container';
import FadingLine from '@atoms/FadingLine/FadingLine.styled';
import { useViewport } from '@hooks/index';
import { devices } from '@styles/variables';
import { isEven } from '@helpers/math';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const entryAnimationDuration = 0.4;

export interface Entry {
  id: string,
  infoCard: InfoCardProps
  iconUrl?: string,
};

export interface TimelineProps {
  entries: Array<Entry>
};

const Timeline: FC<TimelineProps> = ({ entries }) => {
  const { ref: fadingLineRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const fadingLineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animate = inView ? 'visible' : 'hidden';


  return (
    <Container>
      <S.Timeline ref={fadingLineRef}>
        <FadingLine
          animate={animate}
          variants={fadingLineVariants}
          transition={{ duration: 0.5 }}
        />
        <S.EntriesList>
          {entries.map((entry, index) => (
            <Entry key={entry.id} {...entry} index={index} />
          ))}
        </S.EntriesList>
      </S.Timeline>
    </Container>
  );
};

interface EntryProps extends Entry {
  index: number
};

const Entry: FC<EntryProps> = ({ iconUrl, infoCard, index }) => {
  const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: true });
  const { width } = useViewport();
  const isBigPhoneResolution = width >= devices.bigPhone.width;
  const isReversed = isEven(index + 1) && isBigPhoneResolution;

  const getTransition = (duration: number) => ({
    duration,
    type: "spring",
    damping: 10,
    mass: 0.75,
    stiffness: 100,
  });

  const infoCardVariants = {
    hidden: (isReversed: boolean) => ({
      opacity: 0,
      x: isReversed ? -200 : 200
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: getTransition(entryAnimationDuration),
    },
    hover: (isReversed: boolean) => ({
      x: isReversed ? 15 : -15,
    })
  };

  const circleIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <S.Entry ref={ref}>
      <Row smJustifyContent={isReversed ? 'start' : 'end'}>
        <Col col={3} sm={2} xl={1}>
          <motion.div
            animate={inView ? 'visible' : 'hidden'}
            variants={circleIconVariants}
            transition={getTransition(entryAnimationDuration)}
          >
            <CircleIcon src={iconUrl} />
          </motion.div>
        </Col>
        <Col col={9} sm={5} lg={4} xl={3} smOrder={isReversed && -1}>
          <motion.div
            whileHover="hover"
            custom={isReversed}
            animate={inView ? 'visible' : 'hidden'}
            variants={infoCardVariants}
          >
            <InfoCard {...infoCard} arrowOnRightSide={isReversed} />
          </motion.div>
        </Col>
        {/* Spacer */}
        <Col lg={1} xl={2.5} smOrder={isReversed && -2} />
      </Row>
    </S.Entry>
  );
};

export default Timeline;