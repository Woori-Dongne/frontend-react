import React from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  title: string;
  placeholder?: string;
  required?: boolean;
};

const InputComponent = (props: Props) => {
  return (
    <label>
      {props.title !== '' && (
        <div>
          {props.title} {props.required === true && <span>*</span>}
        </div>
      )}
      <input {...props}></input>
    </label>
  );
};

export default InputComponent;
