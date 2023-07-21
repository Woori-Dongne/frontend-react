import { styled } from 'styled-components';
import { mixins } from '../../../../styles/mixins';
import { typo } from '../../../../styles/typo';

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ImageUpLoadName = styled.h3`
  ${typo.normal}
`;

export const ImageUpLoadBox = styled.label`
  ${mixins.flexBox()}
  margin-top: 9px;
  height: 128px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.mainYellow};
`;

export const ImageUpLoad = styled.img`
  width: 100%;
  height: 126px;
`;
