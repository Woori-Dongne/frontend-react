import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KAKAO_AUTH_URL } from './KakaoLogin/KakaoOauth';
import Button from '../../components/Button/Button';
import logoIcon from '../../assets/logoIcon.png';
import logoText from '../../assets/logoText.png';
import * as S from './Login.style';

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken') as string;

  useEffect(() => {
    if (token === '') {
      navigate('/main');
    }
  }, []);

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
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
