import React from 'react'
import styled from 'styled-components'

const TodoItem = styled.p`
width: 100%;
padding: 4rem 3rem;
background-color: var(--color-mainLighter);
box-shadow: 0rem 0.5rem 3.5rem var(--color-shadow);
margin-bottom: 3rem;
font-size: 1.4rem;
color: var(--color-white);
`
const Todo = ({todo}) => {
    return (
        <TodoItem>{todo.todo}</TodoItem>
    )
}

export default Todo
