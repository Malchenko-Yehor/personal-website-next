import { FC } from 'react';
import * as S from './ColouredIcon.styled';
import { StrapiFile } from '@api/types';
import { getDesiredColorByFilters } from '@helpers/css-filters';

export interface ColouredIconProps {
  icon: StrapiFile;
  color: string;
}

const ColouredIcon: FC<ColouredIconProps> = ({ icon, color }) => {
  const cssFilters = getDesiredColorByFilters(color);

  return (
    <S.ColouredIcon
      filters={cssFilters}
      src={icon.url}
      alt={icon?.alternativeText}
      layout="fill"
      objectFit="contain"
      objectPosition="center"
    />
  );
};

export default ColouredIcon;
