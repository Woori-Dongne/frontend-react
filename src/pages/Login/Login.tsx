import ButtonComponent from '../../components/ButtonComponent';
import * as S from './Login.style';

const Login = () => {
  return (
    <>
      <S.Container>
        <ButtonComponent
          title="재활용 버튼"
          width={'300px'}
          height={'60px'}
          background={'#FFDC89'}
        ></ButtonComponent>
      </S.Container>
    </>
  );
};

export default Login;
