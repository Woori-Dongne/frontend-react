export interface Feed {
  id?: number;
  userId?: number;
  regionId?: number;
  detailRegion: string;
  category: number;
  personnel: number;
  title: string;
  content: string;
  deadline: string;
  imageUrl?: string;
  createAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  roomName: string;
  user: Follow;
}

export interface Follow {
  id?: number;
  userName?: string;
  imageUrl?: string | null;
}

export interface Info {
  id: number;
  icon: string;
  subText: string;
}

export interface InfoDetail {
  [key: string]: string | number;
  personnel: number;
  deadline: string;
  detailRegion: string;
}

export interface FeedInfo {
  title: string;
  content: string;
  personnel: number;
  category: number;
  regionId: number;
  detailRegion: string;
  imageUrl?: string;
  deadline: Date;
}
