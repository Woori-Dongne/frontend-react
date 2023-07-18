import InputProps from './Input.type';
import * as S from './Input.style';

const Input = (props: InputProps) => {
  return (
    <label>
      {props.title !== '' && (
        <S.InputTitleWrapper>
          {props.required === true && <span>*</span>} {props.title}
        </S.InputTitleWrapper>
      )}
      {props.type === 'checkbox' ? (
        <S.CheckboxInput {...props} />
      ) : (
        <S.InputTeg {...props} />
      )}
    </label>
  );
};

export default Input;
