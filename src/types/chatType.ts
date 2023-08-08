import { RuleSet } from 'styled-components';

export interface ChatUser {
  [key: string]: RuleSet<object>;
  admin: RuleSet<object>;
  person: RuleSet<object>;
}

export interface Message {
  id: number;
  auth: string;
  username: string;
  message: string;
}

export interface JoinRoom {
  success: boolean;
  title: string;
}

export interface CreateRoom extends JoinRoom {
  roomName: string;
}
