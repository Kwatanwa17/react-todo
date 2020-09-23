import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Device } from "../../../../utils"

type ClickedProps = {
  clicked?: (value: React.SetStateAction<boolean>) => void
}

const Li = styled.li`
  display: flex;
  height: 100%;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0 1rem;
  color: white;
  transition: all 0.2s;

  &:hover {
    border-bottom: 2px solid white;
  }

  &.active {
    border-bottom: 2px solid white;
  }

  @media ${Device.smallOnly} {
    border-bottom: 1px solid transparent;
    padding: 0.5rem 2rem;
    margin: 2rem 0;
    &:hover {
      border-bottom: 1px solid white;
    }
    &.active {
      border-bottom: 1px solid white;
    }
  }
`
const NavItem = ({ link, children, clicked }) => {
  return (
    <Li>
      <StyledNavLink onClick={clicked} activeClassName="active" exact to={link}>
        {children}
      </StyledNavLink>
    </Li>
  )
}

export default NavItem
