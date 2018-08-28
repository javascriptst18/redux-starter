/**
 * 'ADD_TODO' is used in both the action and the reducer
 * replace the original string with the imported variable
 * if the variable is nonexistent, we get an error. If the
 * string is misspelled, we know where to change it.
 */
import { ADD_TODO } from './constants';

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
