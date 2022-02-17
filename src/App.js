import React, { useState, useEffect } from "react";
import todoJson from "./todo";
import TodoItem from "./todoItem";
import AddTodo  from "./AddTodo";
import "./App.css";

export default function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState(todoJson);
  
  useEffect(() => {
    console.log(todos);
  })

  const submit = (title, description, todoDate) => {
    setTodos([
      ...todos,
      {
        id: "sjdjdjdj-jdjdjdjd-djdj",
        title: title,
        color: "sdfdsfd",
        description,
        dueDate: todoDate
      }
    ]);
  };

  return (
    <>
      <AddTodo submitCallBack={submit} />
      {todos.map((item) => {
        return (
          <TodoItem {...item} />  
        );
      })}
    </>
  );
}
