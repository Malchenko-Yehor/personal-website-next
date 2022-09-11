import { FC } from 'react';
import * as S from './HoloStand.styled';
import HolosStandIllustration from './HoloStand.svg';

export interface HoloStandProps {
  color: string;
}

const HoloStand: FC<HoloStandProps> = ({ color }) => {
  return (
    <S.HoloStandContainer color={color}>
      <HolosStandIllustration />
    </S.HoloStandContainer>
  );
};

export default HoloStand;
