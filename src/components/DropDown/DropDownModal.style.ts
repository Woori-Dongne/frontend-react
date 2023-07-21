import { CSSProperties } from 'react';
import { styled } from 'styled-components';
import { mixins } from '../../styles/mixins';
import { typo } from '../../styles/typo';

export const CategoryDropDownContainer = styled.div`
  position: relative;
`;

export const CategoryDropDown = styled.div<CSSProperties>`
  ${mixins.flexBox('space-between', 'center')}
  ${typo.small}
  width: ${({ width }) => width};
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.mainYellow};
  border-radius: 8px;
  margin-top: 15px;
  padding: 0 10px;
  z-index: 70;
`;
export const DropBox = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  border-radius: 8px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 10;
  overflow-y: scroll;
  background-color: white;
`;

export const DropBoxDetail = styled.div`
  ${mixins.flexBox()}
  margin-top:3px;
  padding: 15px 27px 15px 26px;
  text-align: center;
  ${typo.h3}
  &:hover {
    cursor: pointer;
    background-color: rgba(217, 217, 217, 0.3);
  }
`;
