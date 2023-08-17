export interface Item {
  id: number;
  title: string | number;
}

export interface DataList {
  [key: string]: Item[];
  category: Item[];
  personnel: Item[];
  year: Item[];
  month: Item[];
  day: Item[];
  hour: Item[];
  minute: Item[];
}

export interface Placeholder {
  [key: string]: string | number;
  category: string | number;
  personnel: string | number;
  year: string | number;
  month: string | number;
  day: string | number;
  hour: string | number;
  minute: string | number;
}

export interface DateTypeList {
  [key: string]: string | number;
  year: string | number;
  month: string | number;
  day: string | number;
  hour: string | number;
  minute: string | number;
}

export interface CategoryId {
  [key: string]: number;
  배달: number;
  공구: number;
  산책: number;
  운동: number;
}
