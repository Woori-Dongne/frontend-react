export interface GetUserInfo {
  [key: string]: string;
  gender: string;
  imageUrl: string;
  phoneNumber: string;
  region: string;
  userName: string;
}

export interface GetFeed {
  id: number;
  userId: number;
  title: string;
  category: number;
  content: string;
  personnel: number;
  regionId: number;
  detailRegion: string;
  imageUrl: string;
  deadline: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  chattingRoom: ChattingRoom;
}

export interface ChattingRoom {
  createdAt: string;
  deadline: string;
  hostId: number;
  id: number;
  postId: number;
  roomName: string;
}
