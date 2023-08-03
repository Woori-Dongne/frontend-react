import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';

export const Container = styled.div`
  ${mixins.columnFlexBox()}
  gap: 20px;
  height: 45vh;
`;

export const Text = styled.h2`
  ${typo.h2}
  text-align: center;
  line-height: 1.4;
`;
