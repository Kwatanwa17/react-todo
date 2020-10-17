import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../../../../components';
import { ButtonWrapper, Message, MessageWrapper, Modal } from '../../../../elements';
import * as actions from '../../../../store/actions/';

const TodoWrapper = styled.div`
  margin: 1rem 0rem;
  font-size: 1.3rem;
`;

const DeleteTodo = ({ todo, show, close, deleteTodo, error, loading }) => {
  console.log();

  return (
    <Modal opened={show} closed={close}>
      本当にTODOを削除しますか？
      <TodoWrapper>{todo.todo}</TodoWrapper>
      <ButtonWrapper>
        <Button
          contain
          type="submit"
          onClick={() => deleteTodo(todo.id)}
          disabled={loading}
          loading={loading ? 'お待ちください' : null}
        >
          削除
        </Button>
        <Button color="var(--color-main)" contain onClick={() => close()}>
          キャンセル
        </Button>
      </ButtonWrapper>
      <MessageWrapper>
        <Message error show={error}>
          {error}
        </Message>
      </MessageWrapper>
    </Modal>
  );
};

const mapStateToProps = state => ({ todos }) => ({
  loading: todos.deleteTodo.loading,
  error: todos.deleteTodo.error,
});

const mapDispatchToProps = {
  deleteTodo: actions.deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
