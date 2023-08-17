export interface UserAddInfo {
  id: number;
  title: string;
  placeholder: string;
  name: string;
}

export interface UserInput extends UserDataType {
  [key: string]: string;
  gender: string;
}

export interface UserDataType {
  userName: string;
  region: string;
  phoneNumber: string;
  imageUrl: string;
}

export interface DetailRegionType {
  [key: string]: string;
  si: string;
  gu: string;
  dong: string;
}
