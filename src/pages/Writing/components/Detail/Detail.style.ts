import { styled } from 'styled-components';
import { typo } from '../../../../styles/typo';

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const DetailName = styled.h3`
  width: 74px;
  height: 20px;
  ${typo.normal}
`;

export const DetailContent = styled.textarea`
  height: 128px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.mainYellow};
  margin-top: 9px;
  resize: none;
  padding: 5px 9px 5px 10px;
  ::placeholder {
    &::placeholder {
      color: #9e9e9e;
      ${typo.small}
    }
  }
`;
