import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI } from './KakaoOauth';
import logoIcon from '../../../assets/logoIcon.png';
import * as S from './KakaoRedirect.style';

const KakaoRedirect = () => {
  const navigate = useNavigate();
  // 인가코드
  const params = new URL(document.location.toString()).searchParams;
  const code = params.get('code') as string;

  useEffect(() => {
    // 카카오에서 토큰 받기
    const token = async () => {
      try {
        const response = await fetch('https://kauth.kakao.com/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          body: `grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        });
        const jsonResponse = await response.json();
        localStorage.setItem('Token', jsonResponse);

        // 토큰이 있을 때 분기처리 (백엔드 통신)
        if (jsonResponse.access_token !== '') {
          const backendResponse = await fetch(
            'http://staging-api.woori-dongne.co.kr/auth/kakao',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                AccessToken: jsonResponse.access_token,
              }),
            },
          );
          const getBackendToken = await backendResponse.json();
          localStorage.setItem('AccessToken', getBackendToken.accessToken);
          localStorage.setItem('RefreshToken', getBackendToken.refreshToken);
          alert('추가적인 회원정보를 입력해주세요!');
          navigate('/signup');
        } else {
          // 토큰이 없을 때 분기처리
          alert('다시 시도해주세요');
          navigate('/login');
        }
      } catch (error) {
        // 에러가 발생했을 때 분기처리 (refresh token으로 재발급)
        if (error === 401 ?? error === 'The token has expired.') {
          const refreshToken = localStorage.getItem('RefreshToken') as string;
          try {
            const refreshResponse = await fetch(
              'http://staging-api.woori-dongne.co.kr/auth/refresh',
              {
                method: 'POST',
                headers: { Authorization: `Bearer ${refreshToken}` },
              },
            );
            const getNewAccessToken = await refreshResponse.json();
            localStorage.setItem('AccessToken', getNewAccessToken.accessToken);
            localStorage.setItem(
              'RefreshToken',
              getNewAccessToken.refreshToken,
            );
          } catch (error) {
            console.error('Error fetching Kakao token:', error);
          }
        }
      }
    };
    void token();
  }, []);

  return (
    <S.Container>
      <img src={logoIcon} />
      <S.Text>로그인 중 ...</S.Text>
    </S.Container>
  );
};

export default KakaoRedirect;
