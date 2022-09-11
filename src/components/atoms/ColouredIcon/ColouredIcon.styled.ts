import styled from 'styled-components';
import Image from 'next/image';

interface ColouredIconProps {
  filters: string;
}

export const ColouredIcon = styled(Image)<ColouredIconProps>`
  height: 300px;
  width: 300px;
  ${(props) => props.filters};
`;
