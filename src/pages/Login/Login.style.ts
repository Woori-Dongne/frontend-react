import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  ${mixins.columnFlexBox('space-between', 'center')}
  margin-top: 55px;
  height: 80vh;
`;
