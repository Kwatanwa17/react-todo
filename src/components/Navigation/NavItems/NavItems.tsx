import React from 'react';
import { connect, useSelector } from 'react-redux';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';
import { Device } from '../../../utils';

type Props = {
  clicked?: (value: React.SetStateAction<boolean>) => void;
  loggedIn: any;
  emailVerified: any;
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
const NavItems: React.FC<Props> = ({ clicked, emailVerified, loggedIn }) => {
  // TODO: male use of useSelector
  // const loggedIn = firebase.auth.uid

  let links;
  // if (loggedIn && !emailVerified) {
  //   links = (
  //     <Ul>
  //       <NavItem clicked={clicked} link="/logout">
  //         Logout
  //       </NavItem>
  //     </Ul>
  //   );
  // }
  if (loggedIn && emailVerified) {
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

const mapStateToProps = ({ firebase }) => ({
  emailVerified: firebase.auth.emailVerified,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(NavItems);
