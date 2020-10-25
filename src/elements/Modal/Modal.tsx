import { log } from 'console';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Backdrop from './Backdrop/Backdrop';

type Props = {
  opened?: boolean;
  closed?: any;
  clicked?: boolean;
};

const ModalWrapper = styled.div<Props>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: ${({ opened }) => (opened ? 'translate(-50%, -50%)' : 'translate(-50%, -80%)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  justify-content: center;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visibility' : 'hidden')};
  width: 100%;
  max-width: 50rem;
  padding: 4rem 3rem;
  box-shadow: 0 0.5rem 3.5rem var(--shadow);
  border-radius: 1rem;
  background-color: var(--color-mainLighter);
  color: var(--color-white);
  transition: all 0.3s;
`;

const Modal: React.FC<Props> = React.memo(
  ({ opened, closed, children }) => {
    console.log('Modal rendered');
    return ReactDOM.createPortal(
      <>
        <Backdrop opened={opened} closed={closed} />
        <ModalWrapper opened={opened}>{children}</ModalWrapper>
      </>,
      document.getElementById('modal')
    );
  },
  (prevProps, nextProps) => {
    // rerender if these two props are different
    return prevProps.opened === nextProps.opened;
  }
);

export default Modal;
