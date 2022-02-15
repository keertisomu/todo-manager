import React, { useState, useEffect } from "react";
import todoJson from "./todo";
import TodoItem from "./todoItem";
import "./App.css";

export default function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState(todoJson);
  
  useEffect(() => {
    console.log(todos);
  })

  const submit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: "sjdjdjdj-jdjdjdjd-djdj",
        title: todoTitle,
        color: "sdfdsfd"
      }
    ]);
    setTodoTitle("");
  };

  return (
    <>
      <form onSubmit={submit}>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <button style={{ margin: "5px" }}>Add</button>
        </div>
      </form>
      {todos.map((item) => {
        return (
          <TodoItem {...item} />  
        );
      })}
    </>
  );
}
