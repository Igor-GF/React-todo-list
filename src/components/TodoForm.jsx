import React, { useState } from "react";

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
      addTodo({ ...todo, id: Math.random()*1000});
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={submitHandler}>
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