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

const ButtonComponent = (props: Props) => {
  return <Button {...props}>{props.title}</Button>;
};
export default ButtonComponent;

const Button = styled.button<CSSProperties>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
`;
