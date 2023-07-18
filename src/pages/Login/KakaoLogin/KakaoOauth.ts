export const CLIENT_ID: string = process.env.REACT_APP_CLIENT_ID ?? '';
export const REDIRECT_URI: string = process.env.REACT_APP_REDIRECT_URI ?? '';

export const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
