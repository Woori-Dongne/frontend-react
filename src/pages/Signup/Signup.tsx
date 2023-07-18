import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { INPUT_INFO } from './Signup.data';
import * as S from './Signup.style';

const Signup = () => {
  return (
    <S.Container>
      <S.InputContainer>
        {INPUT_INFO.map(({ id, title, type, required, placeholder }) => {
          return (
            <div key={id}>
              <Input
                title={title}
                type={type}
                required={required}
                placeholder={placeholder}
              />
            </div>
          );
        })}
      </S.InputContainer>

      <Button
        title="회원가입 하기"
        $border="none"
        $buttonsize="large"
        $buttonbackground="mainYellow"
        $font="black"
        onClick={() => {
          alert('클릭하면 회원가입~!');
        }}
      />
    </S.Container>
  );
};

export default Signup;
