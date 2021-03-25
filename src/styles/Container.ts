import styled from 'styled-components';
import { media, Container as sbgContainer } from 'styled-bootstrap-grid';

const Container = styled(sbgContainer)`
  box-sizing: border-box;
  padding-right: 20px;
  padding-left: 20px;

  ${media.sm`
    padding-right: 25px;
    padding-left: 25px;
  `}

  ${media.md`
    padding-right: 30px;
    padding-left: 30px;
  `}

  ${media.lg`
    padding-right: 35px;
    padding-left: 35px;
  `}

  ${media.xl`
    padding-right: 50px;
    padding-left: 50px;
  `}
`;

export default Container;