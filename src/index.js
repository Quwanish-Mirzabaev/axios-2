import ReactDOM from "react-dom/client";
import React from "react";
// import App from "./App";
import "./index.css"
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  return (
    <div className="conteiner">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Добавить заметку..."
        onKeyPress={(e) => {
          if (e.key === "Enter" && e.target.value) {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Удалит</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);