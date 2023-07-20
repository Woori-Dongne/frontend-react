import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.nav`
  ${mixins.flexBox('space-between')};
  margin-bottom: 22px;
`;
