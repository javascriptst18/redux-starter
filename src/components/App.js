import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  render() {
    return (
      <div>
        <p>{this.props.counter}</p>
        <button onClick={this.increment}> Increment </button>
      </div>
    );
  }
}

// Puts all of my state into props
export default connect(state => state)(App);
