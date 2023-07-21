import { styled } from 'styled-components';
import { typo } from '../../../../styles/typo';

export const CategoryBox = styled.div`
  margin-top: 20px;
`;

export const CategoryName = styled.h3`
  ${typo.normal}
  span {
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.mainRed};
  }
`;
