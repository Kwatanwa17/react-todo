import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 3.5rem;
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  width: 100%;
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

const Error = styled.div<{ show: boolean }>`
  color: var(--color-error);
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(${({ show }) => (show ? '20px' : '10px')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: all 0.1s;
  padding: 0  2rem;
  font-weight: 500;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    /* <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>{errors[field.name]}
      </Error>
    </InputWrapper> */
    <StyledInput />
  );
};

export default Input;
