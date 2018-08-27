import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  
  state = {
    todo: ''
  }

  onChange = e => this.setState({ todo: e.target.value })

  addTodo = () => {
    const todo = {
      text: this.state.todo,
      id: 2
    }
    this.props.dispatch({ type: 'ADD_TODO', todo })
  }

  render() {
    const todoList = this.props.todos.map(todo => (
      <p key={todo.id}>{todo.text}</p>
    ))
    
    return (
      <div>
        <input 
            type="text"
            name="todo"
            onChange={this.onChange}
            value={this.state.todo}
            placeholder="Write something nice"
            autoComplete="off"
        />
        <button onClick={this.addTodo}>Add Todo</button>
        {todoList}
      </div>
    );
  }
}

export default connect(state => state)(TodoList);
