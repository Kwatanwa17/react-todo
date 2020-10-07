import React from 'react';
import styled from 'styled-components';
import { Container, Heading } from '../../elements';
import AddTodos from './AddTodo/AddTodo';

const Wrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5rem;
`;

const Todos = () => {
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading size="h1">Your TODOS</Heading>
          <Heading size="h4" margin="2rem">
            This is the TODOS.
          </Heading>
          <AddTodos />
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Todos;
