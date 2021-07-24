import styled from "styled-components";

export const LanguageSwitcher = styled.div`
  position: relative;
  display: inline-flex;
`

export const OpenButton = styled.button`
  padding: 0;
  height: 40px;

  & svg {
    height: 100%;
    width: auto
  }
`;

export const WhiteCircle = styled.div`
  width: 14.9px;
  height: 14.9px;
  border-radius: 50%;
  background-color: #fff;
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