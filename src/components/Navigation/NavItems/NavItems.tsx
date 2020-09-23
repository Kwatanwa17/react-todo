import React from "react"
import styled from "styled-components"
import NavItem from "./NavItem/NavItem"

const Nav = styled.nav`
  display: flex;
`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`
const NavItems = () => {
  return (
    <Nav>
      <Ul>
        <NavItem link="/">home</NavItem>
        <NavItem link="/todos">another link</NavItem>
        <NavItem link="/">yet another link</NavItem>
      </Ul>
    </Nav>
  )
}

export default NavItems
