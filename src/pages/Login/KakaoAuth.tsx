import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoAuth = () => {
  const navigate = useNavigate();
  const params = new URL(document.location.toString()).searchParams;
  const code = params.get('code') as string;
  // const grantType = 'authorization_code';
  // const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID as string;
  // const redirectUri = process.env.REACT_APP_CLIENT_BASE_URL as string;

  const clientId = '';
  const redirectUri = 'http://localhost:3000/kakao';

  useEffect(() => {
    const token = async () => {
      try {
        const response = await fetch('https://kauth.kakao.com/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          body: `grant_type=authorization_code&client_id=${clientId}&redirect_uri=${redirectUri}&code=${code}`,
        });
        const data = await response.json();
        // console.log(data); // Do something with the token data if needed
        if (data.access_token !== '') {
          console.log('정상작동하나?', 'data.access_token:', data.access_token);
          localStorage.setItem('token', data.access_token);
        } else {
          alert('다시 시도해주세요');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching Kakao token:', error);
      }
    };
    void token();
  }, []);
  return <div>welcome</div>;
};

export default KakaoAuth;
