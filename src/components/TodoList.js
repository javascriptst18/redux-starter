import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchData } from '../actions';

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
    // Replace action with action creator
    this.props.addTodo(todo);
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

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
