import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }

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
    font-family: Noto Sans;
    color: ${theme.colors.mainBlack};
    line-height: normal;
  }

  * {
    box-sizing: border-box;
  }
`;
