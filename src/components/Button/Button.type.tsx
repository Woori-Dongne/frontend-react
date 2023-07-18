import { DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  $border: 'none' | 'bottom';
  $buttonsize: 'large' | 'medium' | 'small';
  $buttonbackground:
    | 'mainYellow'
    | 'mainRed'
    | 'mainGreen'
    | 'white'
    | 'kakao'
    | 'disable';
  $font: 'black' | 'white';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default ButtonProps;
