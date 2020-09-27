import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';
import { Device } from '../../../utils';

type ClickedProps = {
  clicked?: (value: React.SetStateAction<boolean>) => void;
};

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  @media ${Device.smallOnly} {
    flex-direction: column;
  }
`;
const NavItems: React.FC<ClickedProps> = ({ clicked }) => {
  return (
    <Nav>
      <Ul>
        <NavItem clicked={clicked} link="/">
          Home
        </NavItem>
        <NavItem clicked={clicked} link="/todos">
          Todos
        </NavItem>
        <NavItem clicked={clicked} link="/login">
          Login
        </NavItem>
        <NavItem clicked={clicked} link="/signup">
          SignUp
        </NavItem>
      </Ul>
    </Nav>
  );
};

export default NavItems;
