export interface Feed {
  id?: number;
  title?: string;
  detail?: string;
  people: string;
  time: string;
  location: string;
}

export interface Info {
  id: number;
  icon: string;
  subText: string;
}

export interface InfoDetail {
  [key: string]: string;
  people: string;
  time: string;
  location: string;
}
