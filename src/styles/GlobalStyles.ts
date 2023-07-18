import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const GlobalStyle = createGlobalStyle`
  ${reset}

  a{
    cursor:pointer;
  }

  ul, ol, li {
    list-style:none;
  }

  body {
    margin: 0 auto;
    padding: 32px;
    max-width: 430px;
    font-family: 'Noto Sans KR', sans-serif;
    color: #292d32;
  }
`;
