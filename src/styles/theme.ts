import { DefaultTheme } from "styled-components";

const colors = {
  mainYellow: "#FFDC89",
  mainRed: "#FF6F62",
  mainGreen: "#008080",
  white: "#FFFFFF",
};

export type ColorTypes = typeof colors;

const theme: DefaultTheme = {
  colors,
};

export default theme;
