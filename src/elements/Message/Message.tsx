import React from 'react';
import styled from 'styled-components';

type Props = {
  error?: any;
  success?: any;
  show?: any;
};

const P = styled.p<Props>`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ error, success }) => {
    if (error) return 'red';
    if (success) return 'green';
    else return 'var(--color-text)';
  }};
`;

const Message: React.FC<Props> = ({ children, error, success, show }) => {
  return (
    <P error={error} success={success}>
      {children}
    </P>
  );
};

export default Message;
