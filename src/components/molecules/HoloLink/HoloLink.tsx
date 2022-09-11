import ColouredIcon, { ColouredIconProps } from '@atoms/ColouredIcon/ColouredIcon';
import HoloStand from '@atoms/HoloStand';
import { FC } from 'react';
import * as S from './HoloLink.styled';

export interface HoloLinkProps extends ColouredIconProps {
  url: string;
}

const HoloLink: FC<HoloLinkProps> = ({ color, icon, url }) => {
  return (
    <S.HoloLink href={url}>
      <HoloStand color={color} />

      <S.IconWrapper>
        <ColouredIcon color={color} icon={icon} />
      </S.IconWrapper>
    </S.HoloLink>
  );
};

export default HoloLink;
