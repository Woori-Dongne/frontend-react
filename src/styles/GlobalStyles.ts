import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`
  ${reset}

  a{
    cursor:pointer;
  }

  ul, ol, li {
    list-style:none;
  }
`;
