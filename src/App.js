import React, { useState, useEffect } from "react";
import todoJson from "./todo";
import TodoItem from "./todoItem";
import AddTodo from "./AddTodo";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./App.css";

export default function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState(todoJson);

  useEffect(() => {
    console.log(todos);
  });

  const submit = (title, description, todoDate) => {
    setTodos([
      ...todos,
      {
        id: "sjdjdjdj-jdjdjdjd-djdj",
        title: title,
        color: "sdfdsfd",
        description,
        dueDate: todoDate,
      },
    ]);
  };

  const logTodoDeletItem = (id) => {
    console.log(`the todo item we want to delete :  ${id}`);
    const newListWithDeletedTodo = todos.filter((item) => item.id !== id);
    setTodos(newListWithDeletedTodo);
  };

  return (
    <>
      <div class="flex-container">
        <div class="flex-child">
          <AddTodo submitCallBack={submit} />
        </div>
        <div class="flex-child sec-child">
          {todos.map((item) => {
            return (
              <TodoItem {...item} onDeleteTodo={(id) => logTodoDeletItem(id)} />
            );
          })}
        </div>
        <div class="flex-child">{/* <span>third child for test</span> */}</div>
      </div>
    </>
  );
}
