import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./store"
import theme from "./themes/Theme"
import GlobalStyles from "./themes/GlobalStyles"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
