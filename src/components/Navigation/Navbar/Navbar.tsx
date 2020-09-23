import React from "react"
import styled from "styled-components"
import { Logo } from "../../../components"
import { Container } from "../../../elements"
import NavItems from "../NavItems/NavItems"

const FixedWrapper = styled.div`
  position: fixed;
  /* background-color: ${({ theme }) => theme.colors.background2}; */
  background-color: black;
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`
export default () => {
  return (
    <FixedWrapper>
      <Container>
        <FlexWrapper>
          <Logo />
          <NavItems />
        </FlexWrapper>
      </Container>
    </FixedWrapper>
  )
}
