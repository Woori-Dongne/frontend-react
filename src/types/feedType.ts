export interface Feed {
  category: number;
  content: string;
  createdAt: string;
  deadline: string;
  detailRegion: string;
  deletedAt: string;
  id: number;
  imageUrl: string;
  personnel: number;
  regionId: number;
  title: string;
  updatedAt: string;
  userId: number;
  user: { id: string; userName: string; imageUrl: string };
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
  regionId: number;
}
