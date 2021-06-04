import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <lu>
      {todos.map(todo =>(
        <Todo key={todo.id} todo={todo} />
      ))}  
    </lu>
  )
}

export default TodoList;
