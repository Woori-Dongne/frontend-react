import Button from '../../components/Button/Button';
import * as S from './Login.style';

const Login = () => {
  return (
    <>
      <S.Container>
        <Button
          title="카테고리"
          border="bottom"
          buttonbackground="white"
          buttonsize="medium"
          font="black"
        ></Button>
      </S.Container>
    </>
  );
};

export default Login;
