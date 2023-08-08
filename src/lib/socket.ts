import { io } from 'socket.io-client';
import { BACKEND_API_URL } from '../constants/api';

const token = localStorage.getItem('accessToken') as string;

// TODO:api 주소 차후 변경 예정 (현재는 경훈님 서버 주소)
export const socket = io(`${BACKEND_API_URL}/chat`, {
  extraHeaders: {
    Authorization: `Bearer ${token}`,
  },
});
