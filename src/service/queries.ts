import { api } from '../lib/api';
import { GetFeed, GetUserInfo } from './types';

export const getUserInfo = async () => {
  const { data } = await api.get<GetUserInfo>('/users');
  return data;
};

export const getFeed = async (id: string) => {
  const { data } = await api.get<GetFeed>(`/posts/${id}`);
  return data;
};

export const patchUserInfo = async (body: Record<string, any>) => {
  const { data } = await api.patch('/users', body);
  return data;
};

export const patchFeed = async (id: string, body: Record<string, any>) => {
  const data = await api.patch(`/posts/${id}`, body);
  return data;
};

export const postRegisteFriend = async (id: string) => {
  const { data } = await api.post(`/users/follow/${id}`);
  return data;
};

export const postReport = async (body: Record<string, any>) => {
  const { data } = await api.post('/users/report', body);
  return data;
};

export const deleteFeed = async (id: string) => {
  const data = await api.delete(`/posts/${id}`);
  return data;
};

export const deleteFriend = async (id: string) => {
  const data = await api.delete(`/users/follow/${id}`);
  return data;
};
