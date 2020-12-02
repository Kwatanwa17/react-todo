import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
      --color-main: ${props => props.theme.colors.main};
      --color-mainDark: ${props => props.theme.colors.mainDark};
      --color-mainLight: ${props => props.theme.colors.mainLight};
      --color-mainLighter: ${props => props.theme.colors.mainLighter};
      --color-text:  ${props => props.theme.colors.text};
      --color-white: ${props => props.theme.colors.white};
      --color-error: ${props => props.theme.colors.error};
      --color-shadow: ${props => props.theme.colors.shadow};
    }

    *, *:before, *:after {
    box-sizing: border-box;
    margin:0;
    padding:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   }
  
   html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Roboto", sans-serif;
    /* TODO: set to 16px and add support for extrasmall mobile screen sizes */
    /* font-size: 2.5vmax; */
    /* font-size: 16px; */
    font-size: 62.5%;
    height: 100%;
    margin:0;
    padding:0;

    a {
      text-decoration: none;
    }


  `;

export default GlobalStyles;
