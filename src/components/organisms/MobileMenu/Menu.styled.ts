import { CrossButton } from '@atoms/CrossButton/CrossButton.styled';
import { LanguageSwitcher } from '@molecules/LanguageSwitcher/LanguageSwitcher.styled';
import { flexCenterMixin } from '@styles/mixins';
import { cDarkBlue, ziOverlay } from '@styles/variables';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface MenuProps {
  opened: boolean;
}

export const Menu = styled(motion.div)<MenuProps>`
  ${flexCenterMixin};
  flex-direction: column;
  position: fixed;
  z-index: ${ziOverlay};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${(props) => (props.opened ? 'all' : 'none')};

  & > * {
    pointer-events: inherit;
  }

  ${CrossButton} {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  ${LanguageSwitcher} {
    ${flexCenterMixin};
    aspect-ratio: 1/1;
    padding: 20px;
    background-color: ${cDarkBlue};
    border-radius: 50%;
  }
`;
