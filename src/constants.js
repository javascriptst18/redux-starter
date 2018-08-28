/**
 * Save all strings as a variable and export it.
 * If we do it this way we can reference this variable
 * any place we use the string 'ADD_TODO', this means
 * that this is the only place where we can misspell
 * the string. We also get an overview of which actions
 * we can do.
 */
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const LIST_TODOS = 'LIST_TODOS';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
