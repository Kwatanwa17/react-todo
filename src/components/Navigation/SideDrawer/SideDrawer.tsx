import React, { useState } from "react"
import styled from "styled-components"
import { Logo } from "../../../components"
import Hamburger from "./Hamburger/Hamburger"
import { Device } from "../../../utils"

const FixedWrapper = styled.div`
  position: fixed;
  /* background-color: ${({ theme }) => theme.colors.background2}; */
  background-color: black;
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;

  @media ${Device.smallOnly} {
    display: flex;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
`
const SideDrawer = () => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <FixedWrapper>
      <FlexWrapper>
        <Logo />
        <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
      </FlexWrapper>
    </FixedWrapper>
  )
}

export default SideDrawer
