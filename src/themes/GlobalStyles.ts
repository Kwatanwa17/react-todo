import { createGlobalStyle } from "styled-components"
import { Device } from "../utils"

const GlobalStyles = createGlobalStyle`
 
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

   @media ${Device.smallOnly} {
      font-size: 90%;
     }
     
   @media ${Device.mobile} {
    font-size: 100%;
    }

  body {
    width: 100%;
    height: 100%;
    line-height: 1.5;
    letter-spacing: 0;
    background-color: '#C6CACC';
    color: #20201B;
  }

  ul {
    list-style-type: none;
    margin: 0;
    text-align: left;
  }

  ol {
    text-align: left;
  }

  li {
    /* font-size:0.8rem; */
  }

  a {
    text-decoration: none;
  }

  footer, header {
    background-color: #003300;
  }

  `

export default GlobalStyles
