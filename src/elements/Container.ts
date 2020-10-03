import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  border-radius: 1rem;
  padding: 4rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-mainDark);
  /* box-shadow: 0rem 0.5rem S */
`;

export const DeleteWrapper = styled.div`
  cursor: pointer;
  color: var(--color-error);
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 2rem;
`;
