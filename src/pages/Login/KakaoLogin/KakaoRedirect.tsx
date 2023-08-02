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
          console.log(
            '정상작동하나?',
            'data.access_token:',
            jsonResponse.access_token,
          );
          localStorage.setItem('token', jsonResponse.access_token);
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
