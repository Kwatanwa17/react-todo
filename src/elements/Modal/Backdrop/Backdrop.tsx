import React from 'react';
import styled from 'styled-components';

type Props = {
  opened?: boolean;
  closed?: any;
  clicked?: boolean;
};

const BackdropWrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  transition: all 0.3s;
`;

const Backdrop: React.FC<Props> = ({ opened, clicked, closed }) => {
  return <BackdropWrapper opened={opened} onClick={closed} clicked={clicked} />;
};

export default Backdrop;
