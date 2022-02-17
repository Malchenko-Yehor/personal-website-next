import { cBlack } from '@styles/variables';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LanguageSwitcher = styled.div`
  position: relative;
  display: inline-flex;
`;

export const OpenButton = styled.button`
  position: relative;
  padding: 0;
  height: 55px;
  cursor: pointer;

  & svg {
    height: 100%;
    width: auto;
  }
`;

export const SelectedLanguageFlagIcon = styled.img`
  display: block;
  position: absolute;
  left: 26.3px;
  top: 17.4px;
  width: 18.9px;
  height: 18.9px;
  border-radius: 50%;
  border: 1px solid ${cBlack};
`;

export const Switch = styled(motion.div)`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const FlagsAnchor = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 0;
  margin: 0;
  width: 0px;
  height: 0px;
`;
