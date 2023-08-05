export interface Item {
  id: number;
  title: string | number;
}

export interface DataList {
  [key: string]: Item[];
  category: Item[];
  personal: Item[];
  year: Item[];
  month: Item[];
  day: Item[];
  hour: Item[];
  minute: Item[];
}

export interface Placeholder {
  [key: string]: string | number;
  category: string;
  personal: string;
  year: string | number;
  month: string | number;
  day: string | number;
  hour: string | number;
  minute: string | number;
}
