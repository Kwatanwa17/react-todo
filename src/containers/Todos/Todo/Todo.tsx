import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import DeleteTodo from './DeleteTodo/DeleteTodo';

const Wrapper = styled.p`
  width: 100%;
  padding: 4rem 3rem;
  background-color: var(--color-mainLighter);
  box-shadow: 0rem 0.5rem 3.5rem var(--color-shadow);
  margin-bottom: 3rem;
  font-size: 1.4rem;
  color: var(--color-white);
  text-align: center;
`;

const Controls = styled.div`
  /* position: absolute; */
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;

  i {
    margin: 0 0.5rem;
  }
`;

const Todo = ({ todo }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Wrapper>
      {todo.todo}
      <Controls>
        <i style={{ color: 'var(--color-main)' }}>
          <FontAwesomeIcon icon={faEdit} />
        </i>
        <i style={{ color: 'var(--color-error)' }}>
          <FontAwesomeIcon icon={faTrashAlt} onClick={() => setIsDeleting(true)} />
        </i>
        <DeleteTodo todo={todo} show={isDeleting} close={() => setIsDeleting(false)} />
      </Controls>
    </Wrapper>
  );
};

export default Todo;
