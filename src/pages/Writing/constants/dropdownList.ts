import { Item, RegionItem } from '../types/writingType';

export const CATEGORY_SORT: Item[] = [
  { id: 1, title: '배달' },
  { id: 2, title: '공구' },
  { id: 3, title: '산책' },
  { id: 4, title: '운동' },
];

export const PERSONNEL_LIMIT: Item[] = [
  { id: 1, title: 2 },
  { id: 2, title: 3 },
  { id: 3, title: 4 },
  { id: 4, title: 5 },
];

export const DEADLINE_YEAR: Item[] = [
  { id: 1, title: 2023 },
  { id: 2, title: 2024 },
  { id: 3, title: 2025 },
  { id: 4, title: 2026 },
];

export const DEADLINE_MONTH: Item[] = [
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
  { id: 4, title: 4 },
  { id: 5, title: 5 },
  { id: 6, title: 6 },
  { id: 7, title: 7 },
  { id: 8, title: 8 },
  { id: 9, title: 9 },
  { id: 10, title: 10 },
  { id: 11, title: 11 },
  { id: 12, title: 12 },
];

export const DEADLINE_DAY: Item[] = [
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
  { id: 4, title: 4 },
  { id: 5, title: 5 },
  { id: 6, title: 6 },
  { id: 7, title: 7 },
  { id: 8, title: 8 },
  { id: 9, title: 9 },
  { id: 10, title: 10 },
  { id: 11, title: 11 },
  { id: 12, title: 12 },
  { id: 13, title: 13 },
  { id: 14, title: 14 },
  { id: 15, title: 15 },
  { id: 16, title: 16 },
  { id: 17, title: 17 },
  { id: 18, title: 18 },
  { id: 19, title: 19 },
  { id: 20, title: 20 },
  { id: 21, title: 21 },
  { id: 22, title: 22 },
  { id: 23, title: 23 },
  { id: 24, title: 24 },
  { id: 25, title: 25 },
  { id: 26, title: 26 },
  { id: 27, title: 27 },
  { id: 28, title: 28 },
  { id: 29, title: 29 },
  { id: 30, title: 30 },
  { id: 31, title: 31 },
];

export const DEADLINE_HOUR: Item[] = [
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
  { id: 4, title: 4 },
  { id: 5, title: 5 },
  { id: 6, title: 6 },
  { id: 7, title: 7 },
  { id: 8, title: 8 },
  { id: 9, title: 9 },
  { id: 10, title: 10 },
  { id: 11, title: 11 },
  { id: 12, title: 12 },
  { id: 13, title: 13 },
  { id: 14, title: 14 },
  { id: 15, title: 15 },
  { id: 16, title: 16 },
  { id: 17, title: 17 },
  { id: 18, title: 18 },
  { id: 19, title: 19 },
  { id: 20, title: 20 },
  { id: 21, title: 21 },
  { id: 22, title: 22 },
  { id: 23, title: 23 },
  { id: 24, title: 24 },
];

export const DEADLINE_MINUTE: Item[] = [
  { id: 1, title: 0 },
  { id: 2, title: 5 },
  { id: 3, title: 10 },
  { id: 4, title: 15 },
  { id: 5, title: 20 },
  { id: 6, title: 25 },
  { id: 7, title: 30 },
  { id: 8, title: 35 },
  { id: 9, title: 40 },
  { id: 10, title: 45 },
  { id: 11, title: 50 },
  { id: 12, title: 55 },
];

export const SI_LIST: Item[] = [
  { id: 1, title: '서울시' },
  { id: 2, title: '수원시' },
  { id: 3, title: '청주시' },
];

export const GU_LIST: RegionItem[] = [
  { id: 1, title: '중랑구', prev: '서울시' },
  { id: 2, title: '송파구', prev: '서울시' },
  { id: 3, title: '영통구', prev: '수원시' },
  { id: 4, title: '장안구', prev: '수원시' },
  { id: 5, title: '상당구', prev: '청주시' },
];

export const DONG_LIST: RegionItem[] = [
  { id: 1, title: '중화동', prev: '중랑구' },
  { id: 2, title: '가락동', prev: '송파구' },
  { id: 3, title: '영통동', prev: '영통구' },
  { id: 4, title: '연무동', prev: '장안구' },
  { id: 5, title: '용암동', prev: '상당구' },
];
