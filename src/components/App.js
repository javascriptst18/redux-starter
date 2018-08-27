import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';

function counter(state = 0, action){
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT_BY_5':
      return state + 5;
    case 'INCREMENT_BY_ANYTHING': 
      return state + action.value; // 0 + undefined === NaN
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'LIST_ALL_TODOS':
      return state;
    case 'ADD_TODO':
      const copy = [...state];
      copy.push(action.todo);
      return copy;
    default:
      return state;
  }
}

const rootReducer = combineReducers({counter, todos});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT_BY_ANYTHING', value: 10 });
store.dispatch({ type: 'ADD_TODO', todo: 'Buy Redux' });


class App extends Component {

  state = {
    counter: 0
  }

  componentDidMount() {
    store.subscribe(() => {
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
