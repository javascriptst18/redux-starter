import React, { Component } from 'react';
import TodoList from './TodoList';
import BoredComponent from './BoredComponent';

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
        {/* <TodoList /> */}
        <BoredComponent />
      </div>
    );
  }
}

export default App;
