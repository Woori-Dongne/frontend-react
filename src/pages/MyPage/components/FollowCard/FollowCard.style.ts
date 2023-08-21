import { styled } from 'styled-components';
import { mixins } from '../../../../styles/mixins';
import { typo } from '../../../../styles/typo';

export const CardBox = styled.div`
  ${mixins.flexBox('space-between')};
`;

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50px;
`;

export const NickName = styled.span`
  ${typo.h1};
`;

export const DeleteButton = styled.button`
  ${typo.medium};
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.mainRed};
  cursor: pointer;
`;
