import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import theme from "./themes/Theme"
import GlobalStyles from "./themes/GlobalStyles"

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
)
