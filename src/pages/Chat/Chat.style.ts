import { css, styled } from 'styled-components';
import { ChatUser } from './chat.type';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';

export const Container = styled.div`
  ${mixins.columnFlexBox()};
  gap: 20px;
`;

export const MenuBox = styled.div`
  ${mixins.flexBox('space-between')};
  gap: 28px;
`;

export const RoomTitle = styled.h2`
  ${typo.h3};
  padding: 10px 15px;
  width: 250px;
  border: 1px solid ${({ theme }) => theme.colors.mainGreen};
  border-radius: 8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatBox = styled.div`
  padding: 13px;
  width: 100%;
  height: 70vh;
  border-radius: 8px;
  background-color: rgba(255, 220, 137, 0.5);
  overflow: scroll;
`;

export const ChatCard = styled.div<{ type: string }>`
  ${mixins.flexBox('flex-end')};
  flex-direction: ${({ type }) => type !== 'admin' && 'row-reverse'};
  gap: 13px;
  margin-bottom: 15px;
`;

export const UserImg = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  border: 1px solid black;
  border-radius: 50px;
`;

export const TextWrap = styled.div<{ type: string }>`
  ${({ type }) =>
    type === 'admin'
      ? `${mixins.columnFlexBox('', 'flex-end')}`
      : `${mixins.columnFlexBox('', 'flex-start')}`};
  gap: 8px;
`;

export const NickName = styled.span`
  ${typo.h2}
`;

export const ChatText = styled.div<{ type: string }>`
  ${typo.h3};
  ${({ type }) => chatText[type]};
  padding: 7px 10px;
  max-width: 200px;
  height: fit-content;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  word-wrap: break-word;
  line-height: 1.4;
`;

export const PersonWrap = styled.div`
  ${mixins.flexBox('', 'flex-start')};
  gap: 13px;
`;

export const InfoBox = styled.form`
  display: flex;
  align-content: center;
  position: relative;
  width: 100%;

  & > button {
    position: absolute;
    right: 0;
  }
`;

export const InfoInput = styled.input`
  padding: 0 90px 0 10px;
  width: 100%;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.colors.mainYellow};
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

const chatText: ChatUser = {
  admin: css`
    background-color: ${({ theme }) => theme.colors.mainGreen};
  `,
  person: css`
    background-color: ${({ theme }) => theme.colors.mainRed};
  `,
};
