export interface Feed {
  id?: number;
  userId?: number;
  regionId?: number;
  detailRegion: string;
  category?: number;
  personnel: number;
  title: string;
  content: string;
  deadline: string;
  imageUrl?: string;
  createAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface Follow {
  id?: number;
  userName?: string;
  imageUrl?: string;
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
