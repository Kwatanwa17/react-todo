import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../../../components';
import Hamburger from './Hamburger/Hamburger';
import NavItems from '../NavItems/NavItems';
import { Device } from '../../../utils';

type Props = {
  opened?: boolean;
  clicked?: any;
  loggedIn?: any;
};

const FixedWrapper = styled.div`
  position: fixed;
  /* background-color: ${({ theme }) => theme.colors.background2}; */
  background-color: black;
  padding: 0rem 2rem;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;

  @media ${Device.smallOnly} {
    display: flex;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
`;

const Menu = styled.div<{ opened: boolean }>`
  width: 100%;
  height: 100vh;
  display: none;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  background-color: black;
  color: white;
  visibility: ${props => (props.opened ? 'visible' : 'hidden')};
  transform: translateY(${props => (props.opened ? '0%' : '-100%')});
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  position: fixed;
  top: 0;
  left: 0;

  @media ${Device.smallOnly} {
    display: flex;
  }
`;
const SideDrawer: React.FC<Props> = ({ loggedIn }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <FixedWrapper>
        <FlexWrapper>
          <Logo />
          <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
        </FlexWrapper>
      </FixedWrapper>
      <Menu opened={isOpened}>
        <NavItems clicked={() => setIsOpened(false)} loggedIn={loggedIn} />
      </Menu>
    </>
  );
};

export default SideDrawer;
