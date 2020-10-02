import React from 'react';
import styled from 'styled-components';

type Props = {
  opened?: boolean;
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
  transition: all 0.1s;
`;

const Backdrop: React.FC<Props> = ({ opened, clicked }) => {
  return <BackdropWrapper opened={opened} clicked={clicked} />;
};

export default Backdrop;
