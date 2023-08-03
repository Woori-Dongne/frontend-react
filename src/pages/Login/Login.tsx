import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KAKAO_AUTH_URL } from './KakaoLogin/KakaoOauth';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import * as S from './Login.style';

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken') as string;

  useEffect(() => {
    token === null ? navigate('/') : navigate('/main');
  }, []);

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.Container>
      <div />
      <Icon name="loginLogo" width="260px" />
      <Button
        title="카카오톡으로 시작하기"
        $border="none"
        $buttonsize="large"
        $buttonbackground="kakao"
        $font="black"
        onClick={handleKakaoLogin}
      />
    </S.Container>
  );
};

export default Login;
