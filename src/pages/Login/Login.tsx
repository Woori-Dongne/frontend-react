// import ButtonComponent from '../../components/ButtonComponent';
import InputComponent from '../../components/InputComponent';
import * as S from './Login.style';

const Login = () => {
  return (
    <>
      <S.Container>
        {/* <ButtonComponent
          title="재활용 버튼"
          width={'300px'}
          height={'60px'}
          background={'#FFDC89'}
        ></ButtonComponent> */}
        <InputComponent
          type="checkbox"
          title="이름"
          required={true}
          placeholder="이름을 작성해주세요."
        />
      </S.Container>
    </>
  );
};

export default Login;
