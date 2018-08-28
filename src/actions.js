import { ADD_TODO } from './constants';

// Action creator
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}
