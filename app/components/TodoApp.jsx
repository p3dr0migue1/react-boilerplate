import React from 'react';

// local imports
import TodoList from 'TodoList';

const TodoApp = React.createClass({
  getInitialState() {
    return {
      todos: [
        {
          'id': 1,
          'text': 'Walk the dog',
        },
        {
          'id': 2,
          'text': 'Clean the yard',
        },
        {
          'id': 3,
          'text': 'Do react course',
        },
        {
          'id': 4,
          'text': 'Do laundry',
        }
      ]
    }
  },

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}); 

module.exports = TodoApp;
