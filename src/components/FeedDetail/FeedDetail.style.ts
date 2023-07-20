import styled from 'styled-components';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.span`
  ${typo.h2};
  line-height: 1.4;
`;

export const SubTitle = styled.p`
  ${typo.normal};
  margin-top: 6px;
  line-height: normal;
`;

export const InfoWrap = styled.div`
  ${mixins.flexBox('space-between', 'flex-end')};
  gap: 8px;
  margin-top: 15px;
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 8px;
  width: 250px;
  flex-wrap: wrap;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.mainGray};
`;

export const InfoDetail = styled.span`
  font-size: 14px;
`;

export const Button = styled.button`
  ${typo.h3};
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.mainYellow};
`;
