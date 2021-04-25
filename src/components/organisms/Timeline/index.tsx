import React, { FC, useState } from 'react';
import InfoCard, { InfoCardProps } from '@molecules/InfoCard';
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

interface Entry {
  id: string,
  infoCard: InfoCardProps
  iconUrl?: string,
};

export interface TimelineProps {
  entries: Array<EntryProps>
};

const Timeline: FC<TimelineProps> = ({ entries }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const fadingLineVariants = {
    hidden: { clipPath: `inset(0 0 100% 0)` },
    visible: { clipPath: `inset(0 0 0% 0)` },
  };
  const animate = inView ? 'visible' : 'hidden';

  return (
    <Container>
      <S.Timeline ref={ref}>
        <FadingLine
          initial="hidden"
          animate={animate}
          variants={fadingLineVariants}
          transition={{
            ease: "linear",
            duration: entries.length * entryAnimationDuration,
            delay: 0.2
          }}
        />
        <S.EntriesList>
          {entries.map((entry, index) => (
            <Entry key={entry.id} {...entry} index={index} startAnimation={inView} />
          ))}
        </S.EntriesList>
      </S.Timeline>
    </Container>
  );
};

interface EntryProps extends Entry {
  index: number,
  startAnimation: boolean
};

const Entry: FC<EntryProps> = ({ iconUrl, infoCard, index, startAnimation }) => {
  const { width } = useViewport();
  const isBigPhoneResolution = width >= devices.bigPhone.width;
  const isReversed = isEven(index + 1) && isBigPhoneResolution;
  const [animtaionCompleted, setAnimtaionCompleted] = useState(false);

  const getTransition = (duration: number) => ({
    duration,
    delay: animtaionCompleted ? 0 : index * entryAnimationDuration,
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
    <S.Entry>
      <Row smJustifyContent={isReversed ? 'start' : 'end'}>
        <Col col={3} sm={2} xl={1}>
          <motion.div
            initial="hidden"
            animate={startAnimation ? 'visible' : 'hidden'}
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
            initial="hidden"
            animate={startAnimation ? 'visible' : 'hidden'}
            variants={infoCardVariants}
            onAnimationComplete={() => setAnimtaionCompleted(true)}
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