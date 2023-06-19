import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
