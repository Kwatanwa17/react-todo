import React from "react"
import styled from "styled-components"

import { Navbar } from "../components"

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
`

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

export default Layout
