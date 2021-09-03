import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  
  /* stylelint-disable-next-line selector-max-id */
  #root {
    min-height: 100%;
    min-width: 100%;
  }
`;
