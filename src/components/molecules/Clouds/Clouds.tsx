import { getRandomInRange } from '@helpers/math';
import { cWhite80 } from '@styles/variables';
import { motion, Variants } from 'framer-motion';
import { FC } from 'react';
import * as S from './Clouds.styled';

export interface CloudsProps {
  cloudsAmount: number;
  animationSpeed: number;
  visible: boolean;
  delay?: number;
}

const Clouds: FC<CloudsProps> = ({ cloudsAmount, animationSpeed, delay, visible }) => {
  const arrayPlaceholder = new Array(cloudsAmount).fill('');

  return (
    <S.Clouds>
      {arrayPlaceholder.map((item, index) => (
        <Cloud
          key={index}
          order={index}
          cloudsAmount={cloudsAmount}
          animationSpeed={animationSpeed}
          delay={delay}
          visible={visible}
        />
      ))}
    </S.Clouds>
  );
};

interface CloudProps {
  visible: boolean;
  order: number;
  cloudsAmount: number;
  animationSpeed: number;
  delay?: number;
}

const Cloud: FC<CloudProps> = ({ visible, order, cloudsAmount, animationSpeed, delay = 0 }) => {
  const cy = 100 - (order / cloudsAmount) * 100 + '%';
  const cx = getRandomInRange(40, 60) + '%';
  const cloudVariants: Variants = {
    hidden: {
      opacity: 0,
      r: '5%',
      transition: {
        duration: 1,
        delay: (order * animationSpeed) / cloudsAmount,
      },
    },
    visible: {
      opacity: [0, 1, 1, 1],
      r: ['5%', '15%', '15%', '65%'],
      transition: {
        times: [0, 0.3, 0.5, 1],
        duration: 1.4,
        delay: (order * animationSpeed) / cloudsAmount + delay,
      },
    },
  };

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      fill={cWhite80}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      variants={cloudVariants}
    />
  );
};

export default Clouds;
