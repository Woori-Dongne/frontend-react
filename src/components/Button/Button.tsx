import ButtonProps from './Button.type';
import ButtonComponent from './Button.style';

const Button = (props: ButtonProps) => {
  return <ButtonComponent {...props}>{props.title}</ButtonComponent>;
};

export default Button;
