import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Navbar } from '../components';
import { SideDrawer } from '../components';

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  /* Navbar height */
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children, loggedIn }) => {
  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <SideDrawer loggedIn={loggedIn} />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Layout);
