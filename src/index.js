import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import { ADD_TODO } from './constants';

/**
 * @param {number} state state is always the previous state
 * @param {object} action the action parameter is always an object
 * with a key with the name 'type', anything else is extra
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT_BY_5':
      return state + 5;
    case 'INCREMENT_BY_ANYTHING':
      return state + action.value;
    // If no case is matched, just return the previous state, do not update this state
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'LIST_ALL_TODOS':
      return state;
    case ADD_TODO:
      /**
      * 'state' is all current todos, we must make a copy of that
      * state and push the new value into that array. action.todo is
      * being sent when we dispatch an action like: { type: 'ADD_TODO', todo: 'Learn Redux'}
      */
      const copy = [...state];
      copy.push(action.todo);
      return copy;
    case 'REMOVE_TODO':
      return state.filter(item => item.id !== action.todo.id);
    // If no case is matched, just return the previous state, do not update this state
    default:
      return state;
  }
}

/**
 * If we have multiple state variables we must combine all our reducers
 * into a single reducer. This is done by using the function built in into
 * the redux-library called 'combineReducers'. combineReducers takes an object
 * as argument where you send along your reducers.
 */
const rootReducer = combineReducers({ counter, todos });

/**
 * Then create the store by sending the combined reducers to the 'createStore'-function
 * The second argument is so we can use Redux DevTools inside of chrome
 */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
