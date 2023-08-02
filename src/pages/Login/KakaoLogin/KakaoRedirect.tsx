import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI } from './KakaoOauth';

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
        // 토큰이 있을 때 분기처리
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
          localStorage.setItem('token', getBackendToken);
          alert('추가적인 회원정보를 입력해주세요!');
          navigate('/signup');
        } else {
          // 토큰이 없을 때 분기처리
          alert('다시 시도해주세요');
          navigate('/login');
        }
      } catch (error) {
        // 에러가 발생했을 때 분기처리
        console.error('Error fetching Kakao token:', error);
      }
    };
    void token();
  }, []);
  return <div>welcome</div>;
};

export default KakaoRedirect;
