import { DefaultTheme } from 'styled-components';

const colors = {
  mainYellow: '#FFDC89',
  mainRed: '#FF6F62',
  mainGreen: '#008080',
  mainGray: '#808080',
  mainBlack: '#292D32',
  white: '#FFFFFF',

  kakao: '#F9DF4A',
  disable: '#9E9E9E',
  hover: '#D9D9D9',
  feedBack: '#FCFCFC',
};

export type ColorTypes = typeof colors;

const theme: DefaultTheme = {
  colors,
};

export default theme;
