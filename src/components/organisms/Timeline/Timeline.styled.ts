import { CirleIcon } from "@atoms/CircleIcon/CircleIcon.styled";
import FadingLine from "@atoms/FadingLine/FadingLine.styled";
import { DateRange } from "@molecules/DateRange/DateRange.styled";
import { centerMixin } from "@styles/mixins";
import { cBlack } from "@styles/variables";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

export const Timeline = styled.div`
  position: relative;

  & ${FadingLine} {
    position: absolute;
    top: 0;
    left: 24px;
    height: calc(100% + 50px);

    ${media.sm`
      left: 50%;
      transform: translateX(-50%);
    `}
  }

  & ${CirleIcon} {
    ${media.sm`
      ${centerMixin}
      display: flex;
    `}
  }

  & ${DateRange} {
    color: ${cBlack};
  }
`;

export const EntriesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Entry = styled.li`
  margin-bottom: 40px;
`;