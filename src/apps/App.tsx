import React, { useState } from "react";
import "../styles/App.css";
import { v4 as uuid } from "uuid";
import { CardTodo } from "../components/card-todo/card-todo";
import { Button, Input, PageHeader } from "antd";

export interface TodoInterface {
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

  const AppView = (
    <div>
      <PageHeader className="site-page-header" title="Todo App With React" />
      <Input
        placeholder="Enter your TODO"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      />
      <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            onSubmit();
          }}
        >
          Add
        </Button>
      </div>

      <CardTodo
        todos={todos}
        deleteCallback={(todo) => {
          setTodos(todo);
        }}
        editCallback={(todo) => {
          setTodos(todo);
        }}
      />
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {AppView}
    </div>
  );
}

export default App;
