import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import './App.css';

const LOCAL_STORAGE_KEY = "REACT-simple-todo-list";

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleComplete = (todoId) => {
    setTodos(
      todos.map(todoItem => {
        if (todoItem.id === todoId) {
          return { ...todoItem, completed: !todoItem.completed}
        }
        return todoItem;
      })
    );
  }

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const removeTodo = (id) => {
    setTodos(
      todos.filter(todoItem => todoItem.id !== id)
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>What do you have to do today?</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
