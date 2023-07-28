import { styled } from 'styled-components';
import { mixins } from '../../../../styles/mixins';

export const ButtonContainer = styled.div`
  ${mixins.flexBox('space-between')}
  margin-bottom: 41px;
`;

export const ButtonBox = styled.div`
  width: 179px;
  ${mixins.flexBox('space-between')}
`;
