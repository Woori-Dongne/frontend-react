import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import { mixins } from '../../../styles/mixins';
import { typo } from '../../../styles/typo';

export const Container = styled.div`
  ${mixins.columnFlexBox()}
  height: 80vh;
`;

export const Text = styled.p`
  color: ${theme.colors.black};
  ${typo.h1};
`;
