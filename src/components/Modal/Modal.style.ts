import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';

export const DimmedBackground = styled.div`
  ${mixins.flexBox()};
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  ${mixins.columnFlexBox()}
  gap: 25px;
  padding: 15px;
  width: 259px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ConfrimContent = styled.div`
  ${({ theme }) => theme.colors.black}
  ${typo.normal};
  width: 200px;
  text-align: center;
  line-height: 1.4;
  word-wrap: break-word;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
`;
