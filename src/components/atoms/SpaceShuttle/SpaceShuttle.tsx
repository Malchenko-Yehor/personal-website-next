import SpaceShuttleIllustration from '@icons/space-shuttle.svg';
import { Variants } from 'framer-motion';
import { FC } from 'react';
import * as S from './SpaceShuttle.styled';


export interface SpaceShuttleProps {
  visible: boolean,
  speed: number
}

const SpaceShuttle: FC<SpaceShuttleProps> = ({ visible, speed }) => {
  const spaceShuttleVariants: Variants = {
    hidden: {
      x: '-50%',
      y: 0
    },
    visible: {
      x: '-50%',
      y: 'calc(-100vh - 100%)',
      transition: {
        duration: speed
      }
    }
  };

  return (
    <S.SpaceShuttle
      variants={spaceShuttleVariants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
    >
      <SpaceShuttleIllustration style={{ width: 100 }} />
    </S.SpaceShuttle>
  );
};


export default SpaceShuttle;