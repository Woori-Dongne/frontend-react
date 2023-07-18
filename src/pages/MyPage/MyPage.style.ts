import { styled } from 'styled-components';

export const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

export const UserInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 53px 0;
`;

export const UserImg = styled.div`
  width: 56px;
  height: 56px;
  border: 1px solid black;
  border-radius: 50px;
`;

export const UserNickName = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
`;

export const UserEmail = styled.span`
  margin-top: 11px;
  font-size: 14px;
  color: #808080;
`;

export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitle = styled('div')<{ type: boolean }>`
  width: 100px;
  padding: 18px;
  border-bottom: ${(props) => (props.type ? '3px solid #ffdc89' : '')};
  text-align: center;
  font-size: 14px;
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
  font-size: 18px;
  font-weight: 600;
`;
