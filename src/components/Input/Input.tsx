import InputProps from './Input.type';
import * as S from './Input.style';

const Input = (props: InputProps) => {
  return (
    <>
      {props.title !== '' && (
        <S.InputTitleWrapper>
          {props.required === true && <span>*</span>} {props.title}
        </S.InputTitleWrapper>
      )}
      <S.CheckContainer>
        {props.type === 'checkbox' ? (
          GENDER_INFO.map(({ id, gender, value }) => (
            <S.GenderContainer key={id}>
              <S.GenderCheckbox {...props} value={value} />
              <S.GenderLabel>{gender}</S.GenderLabel>
            </S.GenderContainer>
          ))
        ) : (
          <S.InputTeg {...props} />
        )}
      </S.CheckContainer>
    </>
  );
};

export default Input;

const GENDER_INFO = [
  { id: 1, gender: '남성', value: 'male' },
  { id: 2, gender: '여성', value: 'female' },
];
