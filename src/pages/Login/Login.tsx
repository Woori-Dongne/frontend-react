import { KAKAO_AUTH_URL } from './KakaoLogin/KakaoOauth';
import Button from '../../components/Button/Button';
import * as S from './Login.style';
import logoIcon from '../../assets/logoIcon.png';
import logoText from '../../assets/logoText.png';

const Login = () => {
  function handleKakaoLogin() {
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <>
      <S.Container>
        <S.LogoContainer>
          <S.LogoIcon src={logoIcon} />
          <S.LogoText src={logoText} />
        </S.LogoContainer>
        <S.ButtonContainer>
          <Button
            title="카카오톡으로 시작하기"
            $border="none"
            $buttonsize="large"
            $buttonbackground="kakao"
            $font="black"
            onClick={handleKakaoLogin}
          />
        </S.ButtonContainer>
      </S.Container>
    </>
  );
};

export default Login;
