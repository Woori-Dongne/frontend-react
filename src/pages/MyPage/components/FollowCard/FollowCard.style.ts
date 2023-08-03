import { styled } from 'styled-components';
import { typo } from '../../../../styles/typo';

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserImg = styled.div`
  width: 56px;
  height: 56px;
  border: 1px solid black;
  border-radius: 50px;
`;

export const NickName = styled.span`
  ${typo.h1};
`;
