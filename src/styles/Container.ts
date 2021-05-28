import styled from 'styled-components';
import { Container as sbgContainer } from 'styled-bootstrap-grid';
import { sideIndentsMixin } from './mixins';

const Container = styled(sbgContainer)`
  ${sideIndentsMixin}
  box-sizing: border-box;
`;

export default Container;