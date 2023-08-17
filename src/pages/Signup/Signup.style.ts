import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';

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

export const RegionBox = styled.div`
  ${typo.normal};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RegionTitle = styled.div`
  width: 100%;

  &::before {
    content: '*';
    height: 14px;
    margin-right: 6px;
    color: ${({ theme }) => theme.colors.reportRed};
    text-align: center;
  }
`;
