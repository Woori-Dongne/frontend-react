import ButtonProps from './Button.type';
import styled from 'styled-components';

const ButtonComponent = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background, theme }) =>
    background ?? theme[background as unknown as keyof typeof theme]};

  border: none;
  border-radius: 8px;

  color: ${({ color }) => color};
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};

  cursor: pointer;
`;

export default ButtonComponent;
