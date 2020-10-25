import React, { useState } from 'react';
import styled from 'styled-components';
import 'firebase/database';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, Heading, Loader } from '../../elements';
import InputTodo from './InputTodo/InputTodo';
import Todo from './Todo/Todo';
import { firestore } from 'firebase';
import { Button } from '../../components';

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

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
`;

const Todos = ({ todos, requesting, requested, userId }) => {
  const [isAdding, setIsAdding] = useState(false);

  let content;
  if (!todos) {
    content = <Loader color="var(--color-white)" />;
  } else if (!todos[userId] || !todos[userId].todos) {
    content = <Heading size="h4">TODOがありません</Heading>;
  } else if (todos[userId].todos.length === 0) {
    content = <Heading size="h4">TODOがありません</Heading>;
  } else {
    content = todos[userId].todos
      .slice(0)
      .reverse()
      .map(todo => <Todo key={todo.id} todo={todo} />);
  }

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading size="h1">Your TODOS</Heading>
          <Heading size="h4" margin="2rem">
            This is the TODOS.
          </Heading>
          <Button contain onClick={() => setIsAdding(true)}>
            Add Todo
          </Button>
          <InputTodo opened={isAdding} close={() => setIsAdding(false)} />
          <ContentWrapper>{content}</ContentWrapper>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  todos: firestore.data.todos,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested,
});

const mapDispatchToProps = {};

type Props = {
  userId: any;
};

export default compose<any>(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props: Props) => [`todos/${props.userId}`])
)(Todos);
