import React from 'react';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  
  const checkboxHandler = () => {
    toggleComplete(todo.id);
  }

  const removeClickHandler = () => {
    removeTodo(todo.id);
  }
  
  return (
    <div className="list-item-container">
      <input type="checkbox" onClick={checkboxHandler}/>
      <li style={{
        textDecoration: todo.completed ? "line-through" : null
      }}>{todo.task}</li>
      <button onClick={removeClickHandler}>X</button>
    </div>
  )
}

export default Todo;