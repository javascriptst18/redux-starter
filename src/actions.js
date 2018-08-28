/**
 * 'ADD_TODO' is used in both the action and the reducer
 * replace the original string with the imported variable
 * if the variable is nonexistent, we get an error. If the
 * string is misspelled, we know where to change it.
 */
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, LIST_TODOS, INCREMENT, DECREMENT } from './constants';

/**
 * Action creator
 * @param {object} todo the whole todo object
 * @returns {object} action 
 * An action creator is an ordinary function that returns
 * an action-object that describes which actions we have taken
 * and what the reducer must do.
 */
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    todo
  }
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    todo
  }
}

export function listTodos(todos) {
  return {
    type: LIST_TODOS,
    todos
  }
}

export function incrementCounter(){
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function fetchData(){
  return function(dispatch){
    return fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCHED_DATA', data });
      })
  }
}