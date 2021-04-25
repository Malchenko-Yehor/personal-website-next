import FadingLine from "@atoms/FadingLine/FadingLine.styled";
import styled from "styled-components";
import { CirleIcon } from "@atoms/CircleIcon/CircleIcon.styled";
import { bp, centerMixin } from "@styles/mixins";
import { DateRange } from "@molecules/DateRange/DateRange.styled";
import { cBlack } from "@styles/variables";

export const Timeline = styled.div`
  position: relative;

  & ${FadingLine} {
    position: absolute;
    top: 0;
    left: 24px;
    height: calc(100% + 50px);

    ${bp.sm} {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  & ${CirleIcon} {
    ${bp.sm} {
      ${centerMixin}
      display: flex;
    }
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