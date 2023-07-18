import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  ${mixins.columnFlexBox()}

  max-width: 480px;
  display: flex;
`;

export const InputDiv = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 320px;
  height: 50vh;
  margin-bottom: 10vh;

  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`;
