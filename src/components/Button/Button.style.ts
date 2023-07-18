import ButtonProps from './Button.type';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { typo } from '../../styles/typo';

const ButtonComponent = styled.button<ButtonProps>`
  text-align: center;
  font-style: normal;
  line-height: normal;

  cursor: pointer;

  ${(props) => BORDER[props.$border]}
  ${(props) => SIZE[props.$buttonsize]}
  ${(props) => BACKGROUND[props.$buttonbackground]}
  ${(props) => FONT[props.$font]}
`;

export default ButtonComponent;

const BORDER = {
  none: css`
    border: none;
    border-radius: 8px;
  `,
  bottom: css`
    border: 1px solid rgba(255, 255, 255, 1);

    &:hover {
      border-bottom-color: ${theme.colors.mainYellow};
    }
  `,
};

const SIZE = {
  large: css`
    width: 320px;
    height: 60px;
  `,
  medium: css`
    width: 100px;
    height: 34px;
  `,
  small: css`
    width: 85px;
    height: 34px;
  `,
};

const BACKGROUND = {
  mainYellow: css`
    background-color: ${theme.colors.mainYellow};
  `,
  mainRed: css`
    background-color: ${theme.colors.mainRed};
  `,
  mainGreen: css`
    background-color: ${theme.colors.mainGreen};
  `,
  white: css`
    background-color: ${theme.colors.white};
  `,
  kakao: css`
    background-color: ${theme.colors.kakao};
  `,
  disable: css`
    background-color: ${theme.colors.disable};
  `,
};

const FONT = {
  white: css`
    color: ${theme.colors.white};
    ${typo.h3};
  `,
  black: css`
    color: ${theme.colors.mainBlack};
    ${typo.h3};
  `,
};
