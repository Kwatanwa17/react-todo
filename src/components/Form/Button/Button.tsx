import React from 'react';
import styled from 'styled-components';

type Props = {
  disabled?: any;
  rest?: any;
  loading?: any;
  type?: any;
  onClick?: any;
  contain?: boolean;
  color?: string;
};

const StyledButton = styled.button<Props>`
  width: ${({ contain }) => (contain ? 'auto' : '100%')};
  outline: none;
  padding: 1.2rem 2rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: var(--color-white);
  font-weight: 500;
  box-shadow: 0rem 0.5rem 3.5rem var(--color-shadow);
  background-color: ${({ color }) =>
    color ? color : 'var(--color-mainLighter)'};
  border: none;
  transition: all 0.2s;

  &:hover {
    &:not([disabled]) {
      transform: translateY(-3px);
    }
  }

  &:active {
    &:not([disabled]) {
      transform: translateY(2px);
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: black;
  }
`;

const Button: React.FC<Props> = ({
  children,
  disabled,
  contain,
  loading,
  color,
  ...rest
}) => {
  return (
    <StyledButton color={color} disabled={disabled} contain={contain} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

export default Button;
