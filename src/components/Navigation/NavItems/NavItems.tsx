import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';
import { Device } from '../../../utils';

type Props = {
  clicked?: (value: React.SetStateAction<boolean>) => void;
  loggedIn: any;
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
const NavItems: React.FC<Props> = ({ clicked, loggedIn }) => {
  let links;
  if (loggedIn.uid) {
    links = (
      <Ul>
        <NavItem clicked={clicked} link="/">
          Home
        </NavItem>
        <NavItem clicked={clicked} link="/todos">
          Todos
        </NavItem>
        <NavItem clicked={clicked} link="/logout">
          Logout
        </NavItem>
      </Ul>
    );
  } else {
    links = (
      <Ul>
        <NavItem clicked={clicked} link="/">
          Home
        </NavItem>
        <NavItem clicked={clicked} link="/login">
          Login
        </NavItem>
        <NavItem clicked={clicked} link="/signup">
          SignUp
        </NavItem>
      </Ul>
    );
  }
  return <Nav>{links}</Nav>;
};

export default NavItems;
