import React, { Component } from 'react';
import { createStore } from 'redux';

function counter(state = 0, action){
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

console.log(store.getState());












class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
