import { KAKAO_AUTH_URL } from './KakaoLogin/KakaoOauth';
import Button from '../../components/Button/Button';
import * as S from './Login.style';
import logoIcon from '../../assets/logoIcon.png';
import logoText from '../../assets/logoText.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('AccessToken') as string;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const goToMain = () => {
    navigate('/main');
  };
  return (
    <>
      <S.Container>
        <S.LogoContainer>
          <S.LogoIcon src={logoIcon} />
          <S.LogoText src={logoText} />
        </S.LogoContainer>
        <S.ButtonContainer>
          {typeof token === typeof null ? (
            <Button
              title="카카오톡으로 시작하기"
              $border="none"
              $buttonsize="large"
              $buttonbackground="kakao"
              $font="black"
              onClick={handleKakaoLogin}
            />
          ) : (
            <Button
              title="메인화면으로 입장하기"
              $border="none"
              $buttonsize="large"
              $buttonbackground="mainYellow"
              $font="black"
              onClick={goToMain}
            />
          )}
        </S.ButtonContainer>
      </S.Container>
    </>
  );
};

export default Login;
