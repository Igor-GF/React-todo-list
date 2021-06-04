import React, { useState } from "react";
import uuid from 'react-uuid';

const TodoForm = ({ addTodo }) => {

  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  const handleTaskInput = (e) => {
    setTodo({ ...todo, task: e.target.value});
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid()});
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInput}
      />
      <button type="submit">ADD</button>
    </form>
  )
}

export default TodoForm;