type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: string;
  title?: string;
  placeholder?: string;
  required?: boolean;
};

export default InputProps;
