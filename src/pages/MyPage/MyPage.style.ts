import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';

export const MenuBox = styled.div`
  ${mixins.flexBox('space-between')};
`;

export const MenuTitle = styled.h2`
  ${typo.h2};
`;

export const UserInfoBox = styled.div`
  ${mixins.columnFlexBox()};
  padding: 53px 0;
`;

export const UserImg = styled.div`
  width: 56px;
  height: 56px;
  border: 1px solid black;
  border-radius: 50px;
`;

export const UserNickName = styled.span`
  ${typo.h1};
  margin-top: 15px;
`;

export const UserEmail = styled.span`
  ${typo.normal};
  margin-top: 11px;
  color: ${({ theme }) => theme.colors.mainGray};
`;

export const CategoryBox = styled.div`
  ${mixins.flexBox('space-between')};
`;

export const CategoryTitle = styled.div<{ $cur: boolean }>`
  ${typo.normal};
  ${mixins.flexBox()};
  height: 60px;
  flex: 1;
  border-bottom: ${(props) => (props.$cur ? '3px solid #ffdc89' : '')};
  white-space: pre-wrap;
  line-height: 1.4;
  cursor: pointer;
`;
