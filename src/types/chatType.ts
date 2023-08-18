import { RuleSet } from 'styled-components';

export interface ChatUser {
  [key: string]: RuleSet<object>;
  admin: RuleSet<object>;
  person: RuleSet<object>;
}

export interface Message {
  id: number;
  auth: string;
  userId: number;
  username: string;
  message: string;
  imageUrl?: string;
}

export interface JoinRoom {
  success: boolean;
  title: string;
}

export interface CreateRoom extends JoinRoom {
  roomName: string;
}

export interface ReportData {
  [key: string]: string | number;
  friendId: number;
  content: string;
}
