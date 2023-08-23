import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BACKEND_API_URL } from '../constants/api';

import {
  errorInterceptor,
  requestInterceptor,
  successInterceptor,
} from './interceptors';

const token = localStorage.getItem('accessToken') as string;

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: BACKEND_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor);

export { api };
