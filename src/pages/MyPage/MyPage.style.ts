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

export const CategoryTitle = styled.div<{ type: boolean }>`
  ${typo.normal};
  padding: 18px;
  width: 100px;
  border-bottom: ${(props) => (props.type ? '3px solid #ffdc89' : '')};
  text-align: center;
  cursor: pointer;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
`;

export const ListCard = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 5px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
`;

export const FollowCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 5px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
`;

export const NickName = styled.span`
  ${typo.h1};
`;
