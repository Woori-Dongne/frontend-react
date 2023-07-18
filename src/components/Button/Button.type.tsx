import { DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title?: string;
  width?: string;
  height?: string;
  background?: string;
  color?: string | number;
  fontSize: string;
  fontWeight: number;
};

export default ButtonProps;
