import { io } from 'socket.io-client';
import { BACKEND_API_URL } from '../constants/api';

export const token = localStorage.getItem('accessToken') as string;

export const socket = io(`${BACKEND_API_URL}/chat`, {
  extraHeaders: {
    Authorization: `Bearer ${token}`,
  },
});
