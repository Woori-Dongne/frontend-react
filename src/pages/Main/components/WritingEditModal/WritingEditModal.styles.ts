import { styled } from 'styled-components';
import { mixins } from '../../../../styles/mixins';
import { typo } from '../../../../styles/typo';
export const WritingEditModalBox = styled.div`
  ${mixins.flexBox()}
  position: absolute;
  top: 37px;
  right: 0;
  z-index: 2;
  width: 116px;
  height: 34px;
  ${typo.h3}
  border-radius: 8px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
