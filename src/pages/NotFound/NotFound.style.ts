import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';

export const Container = styled.div`
  ${mixins.columnFlexBox('space-between')};
  height: 85vh;
`;

export const AlertBox = styled.div`
  ${mixins.columnFlexBox('')};
  gap: 25px;
`;

export const Message = styled.span`
  ${typo.h1};
  text-align: center;
  line-height: 1.4;
`;
