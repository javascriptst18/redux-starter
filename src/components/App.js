import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';

function increment(previousState) {
  return {
    counter: previousState + 1
  }
}

class App extends Component {

  state = {
    counter: 0 
  }

  increment = () => {
    this.setState(increment)
  }

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
