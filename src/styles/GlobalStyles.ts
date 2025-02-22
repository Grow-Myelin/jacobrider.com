import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: 'Arial', sans-serif;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;