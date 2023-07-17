import { CSSProperties, DetailedHTMLProps } from 'react';
import styled from 'styled-components';

type Props = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title?: string;
  width?: string | number;
  height?: string | number;
  background?: string | number;
  color?: string | number;
};

const Button = (props: Props) => {
  return <ButtonComponent {...props}>{props.title}</ButtonComponent>;
};
export default Button;

const ButtonComponent = styled.button<CSSProperties>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
`;
