import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import * as S from './AnimatedH2.styled';

export interface AnimatedH2Props {
  text: string;
}

const AnimatedH2: FC<AnimatedH2Props> = ({ text }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const variants = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <S.AnimatedH2
      ref={ref}
      variants={variants}
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
    >
      {text}
    </S.AnimatedH2>
  );
};

export default AnimatedH2;
