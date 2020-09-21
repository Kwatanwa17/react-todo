import React from "react"
import styled from "styled-components"
import { Logo } from "../../../components"
import { Container } from "../../../elements"

const FixedWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background1};
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
          <nav>
            <ul>
              <li>navbarnavbar</li>
            </ul>
          </nav>
        </FlexWrapper>
      </Container>
    </FixedWrapper>
  )
}
