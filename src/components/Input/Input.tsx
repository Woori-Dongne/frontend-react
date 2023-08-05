import InputProps from './Input.type';
import * as S from './Input.style';

const Input = (props: InputProps) => {
  const { title, $inputname, required, ...rest } = props;

  return (
    <>
      {title !== '' && (
        <div>
          <label htmlFor={$inputname} />
          {required === true ? (
            <S.InputTitleWrapper>
              <span>*</span> {title}
              <S.Input {...rest} id={$inputname} required />
            </S.InputTitleWrapper>
          ) : (
            <S.InputTitleWrapper>
              {title}
              <S.Input {...rest} id={$inputname} />
            </S.InputTitleWrapper>
          )}
        </div>
      )}
    </>
  );
};

export default Input;
