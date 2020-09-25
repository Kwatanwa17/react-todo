import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.5rem;
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  background-color: var(--color-mainLight);
  color: var(--color-white);
  border: none;

  /* &:not(:last-of-type) {
    margin-bottom: 2.5rem;
  } */

  &::placeholder {
    color: var(--color-white);
  }
`;

const Error = styled.div`
  color: red;
  font-weight: 700;
`;
const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error />
    </InputWrapper>
  );
};

export default Input;
