import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ThemeProvider } from "styled-components"

import theme from "./themes/Theme"
import GlobalStyles from "./themes/GlobalStyles"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
)
