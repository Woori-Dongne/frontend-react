import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.form`
  ${mixins.columnFlexBox('space-between')}
  height: 80vh;
`;

export const InputBox = styled.div`
  ${mixins.columnFlexBox('space-between', '')}
  margin-top: 100px;
  gap: 50px;
  width: 320px;
`;
