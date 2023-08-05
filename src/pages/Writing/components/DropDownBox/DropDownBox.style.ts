import { CSSProperties } from 'react';
import styled from 'styled-components';
import { mixins } from '../../../../styles/mixins';
import { typo } from '../../../../styles/typo';

export const CategoryDropDown = styled.div<CSSProperties>`
  position: relative;
  width: ${({ width }) => width};
  border: 1px solid ${({ theme }) => theme.colors.mainYellow};
  border-radius: 8px;
  margin-top: 10px;
`;

export const CategoryValue = styled.div`
  ${mixins.flexBox('space-between', 'center')};
  ${typo.small};
  padding: 5px 10px;
`;
