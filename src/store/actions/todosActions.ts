import { getFirestore } from 'redux-firestore';
import * as actions from './actionTypes';

// Add a todo
export const addTodo = data => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.ADD_TODO_START });
  try {
    const res = await firestore.collection('todos').doc(userId).get();

    // console.log(res.data().todos)
    const newTodo = {
      id: new Date().valueOf(),
      todo: data.todo,
      done: false,
    };
    // if there is no todo
    if (typeof res.data() === 'undefined') {
      firestore
        .collection('todos')
        .doc(userId)
        .set({
          todos: [newTodo],
        });
    } else {
      firestore
        .collection('todos')
        .doc(userId)
        .set({
          todos: [...res.data().todos, newTodo],
        });
    }
    dispatch({ type: actions.ADD_TODO_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_TODO_FAIL, payload: err.message });
  }
};

// Delete todo
export const deleteTodo = id => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.DELETE_TODO_START });
  try {
    const res = await firestore.collection('todos').doc(userId).get();
    const previousTodos = res.data().todos;
    const newTodos = previousTodos.filter(todo => todo.id !== id);
    await firestore.collection('todos').doc(userId).update({
      todos: newTodos,
    });

    dispatch({ type: actions.DELETE_TODO_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.DELETE_TODO_FAIL, payload: err.message });
  }
};

// edit todo
export const editTodo = (id, data) => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.EDIT_TODO_START });
  try {
    const res = await firestore.collection('todos').doc(userId).get();
    const previousTodos = res.data().todos;
    const index = previousTodos.findIndex(todo => todo.id === id);
    previousTodos[index].todo = data.todo;

    await firestore.collection('todos').doc(userId).update({
      todos: previousTodos,
    });

    dispatch({ type: actions.EDIT_TODO_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.EDIT_TODO_FAIL, payload: err.message });
  }
};
