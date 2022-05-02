import React, { useState, useEffect } from "react";
import todoJson from "./todo";
import TodoItem from "./todoItem";
import AddTodo from "./AddTodo";
import "./App.css";
import EditTodo from "./EditTodo";

export default function App() {
  const [todos, setTodos] = useState(todoJson);
  const [show, setShow] = useState(false);
  const [editTodoId, setEditTodoId] = useState("");

  useEffect(() => {
    console.log(todos);
  });

  useEffect(() => {
    if (!show) {
      setEditTodoId("");
    }
  }, [show]);

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

  // delete a todoItem
  const deleteTodoItem = (id) => {
    const newListWithDeletedTodo = todos.filter((item) => item.id !== id);
    setTodos(newListWithDeletedTodo);
  };

  // edit a todoItem
  const editTodoItem = (id) => {
    setEditTodoId(id);
    setShow(true);
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
              <TodoItem
                key={item.id}
                {...item}
                onDeleteTodo={(id) => deleteTodoItem(id)}
                onEditTodo={(id) => editTodoItem(id)}
              />
            );
          })}
        </div>
        <div class="flex-child">{/* <span>third child for test</span> */}</div>
      </div>
    </>
  );
}
