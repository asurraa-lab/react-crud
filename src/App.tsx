import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { v4 as uuid } from "uuid";
interface TodoInterface {
  id: string;
  description: string;
  isDone: boolean;
}

function App() {
  const [description, setDescription] = useState<string>("");
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const onSubmit = () => {
    const todo: TodoInterface = {
      description: description,
      isDone: false,
      id: uuid(),
    };

    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <h1>TODO APP WITH REACT</h1>
      <hr />
      <h2>Form TODOs</h2>
      <input
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
      >
        Add
      </button>
      <hr />
      {todos.map((todo, index) => {
        return (
          <div>
            <b>{index}</b> :
            <span
              onClick={() => {
                const editedTodos = todos.map((t) => {
                  if (t.id === todo.id) {
                    return { ...t, isDone: true };
                  }
                  return { ...t };
                });
                setTodos(editedTodos);
              }}
            >
              {todo.description}
            </span>
            <input checked={todo.isDone} type={"checkbox"}></input>
            <button
              onClick={() => {
                const dataWithDelete = todos.filter(
                  (todossss) => todossss.id !== todo.id
                );
                setTodos(dataWithDelete);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
