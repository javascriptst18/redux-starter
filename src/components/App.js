import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';

/**
 * @param {number} state state is always the previous state
 * @param {object} action the action parameter is always an object
 * with a key with the name 'type', anything else is extra
 */
function counter(state = 0, action){
  switch(action.type){
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
    case 'ADD_TODO':
      /**
      * 'state' is all current todos, we must make a copy of that
      * state and push the new value into that array. action.todo is
      * being sent when we dispatch an action like: { type: 'ADD_TODO', todo: 'Learn Redux'}
      */
      const copy = [...state];
      copy.push(action.todo);
      return copy;
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
const rootReducer = combineReducers({counter, todos});

/**
 * Then create the store by sending the combined reducers to the 'createStore'-function
 * The second argument is so we can use Redux DevTools inside of chrome
 */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * Store has 3 function, one of them is 'dispatch' which is used to change the 
 * state. The state can only be changed by dispatching an action. An action is
 * always an object with the key 'type' which describes (as a string) what needs to
 * be changed. 
 */
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT_BY_ANYTHING', value: 10 });
store.dispatch({ type: 'ADD_TODO', todo: 'Buy Redux' });

class App extends Component {

  state = {
    counter: 0
  }

  componentDidMount() {
    /**
     * The second function of the store is 'subscribe' which listens
     * for changes in the state and then runs a callback function when
     * this state changes. Here we are listening for redux state changes
     * and use those changes to update the component state.
     */
    store.subscribe(() => {
      /**
       * .getState is the third function of the store. This function returns
       * the current state of the redux store. Because we have multiple states
       * we much specify which part of the state we want to use.
       */
      this.setState({ counter: store.getState().counter });
    });
  }

  increment = () => {
    store.dispatch({ type: 'INCREMENT' });
  }

  render() {
    return (
      <div>
        { store.getState().counter }
        <button onClick={this.increment}> Increment </button>
      </div>
    );
  }
}

export default App;
