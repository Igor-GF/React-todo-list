import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <li>{todo.task}</li>
      <button>X</button>
    </div>
  )
}

export default Todo;