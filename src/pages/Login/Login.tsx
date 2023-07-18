import Button from '../../components/Button/Button';
import * as S from './Login.style';
import logoIcon from '../../assets/logoIcon.png';
import logoText from '../../assets/logoText.png';

const Login = () => {
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  const { Kakao } = window;

  const handleKakaoLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/kakao',
      scope: 'profile_nickname, gender, birthday',
    });
  };

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
