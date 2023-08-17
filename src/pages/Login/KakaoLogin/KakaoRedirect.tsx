import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI } from './KakaoOauth';
import { BACKEND_API_URL, GET_KAKAO_TOKEN } from '../../../constants/api';
import Icon from '../../../components/Icon/Icon';
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
        const response = await fetch(GET_KAKAO_TOKEN, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          body: `grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        });
        const jsonResponse = await response.json();

        // 토큰이 있을 때 분기처리 (백엔드 통신)
        if (jsonResponse.access_token.length > 0) {
          const backendResponse = await fetch(`${BACKEND_API_URL}/auth/kakao`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              AccessToken: jsonResponse.access_token,
            }),
          });
          console.log(backendResponse);
          const getBackendData = await backendResponse.json();
          localStorage.setItem('accessToken', getBackendData.accessToken);
          localStorage.setItem('refreshToken', getBackendData.refreshToken);
          localStorage.setItem('newbie', getBackendData.newbie);
          console.log('getBackendToken', getBackendData);
          if (getBackendData.newbie === true) {
            alert('추가적인 회원정보를 입력해주세요! ');
            navigate('/signup');
          } else {
            navigate('/main');
          }
        } else {
          // 토큰이 없을 때 분기처리
          alert('다시 시도해주세요');
          navigate('/login');
        }
      } catch (error) {
        // 에러가 발생했을 때 분기처리 (refresh token으로 재발급)
        if (error === 401 || error === 'The token has expired.') {
          const refreshToken = localStorage.getItem('refreshToken') as string;
          try {
            const refreshResponse = await fetch(
              `${BACKEND_API_URL}/auth/refresh`,
              {
                method: 'POST',
                headers: { Authorization: `Bearer ${refreshToken}` },
              },
            );
            const getNewAccessToken = await refreshResponse.json();
            localStorage.setItem('accessToken', getNewAccessToken.accessToken);
            localStorage.setItem(
              'refreshToken',
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
      <Icon name="loginLogo" width="260px" />
      <S.Text>로그인 중 ...</S.Text>
    </S.Container>
  );
};

export default KakaoRedirect;
