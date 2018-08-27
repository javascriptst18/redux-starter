import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';

class App extends Component {

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

// Puts all of my state into props
export default connect(state => state)(App);
