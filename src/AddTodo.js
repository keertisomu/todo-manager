import React, { useState } from "react";
import "./App.css";

export default function AddTodo({ submitCallBack = (f) => f }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDate, setTodoDate] = useState();

  const submit = (e) => {
    e.preventDefault();
    submitCallBack(todoTitle, todoDescription, todoDate);
  };
  return (
    <>
      <div class="form-width">
        <form onSubmit={submit}>
          <div class="form-group">
            <label class="label label-default">Todo Name</label>
            <input
              type="text"
              value={todoTitle}
              class="form-control"
              placeholder="add a todo"
              onChange={(e) => setTodoTitle(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label class="label label-default">Todo Description</label>
            <textarea
              class="form-control"
              value={todoDescription}
              placeholder="provide some desrcription"
              onChange={(e) => setTodoDescription(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="label label-default">Due date</label>
            <input
              type="datetime-local"
              class="form-control"
              value={todoDate}
              placeholder="add a todo"
              onChange={(e) => setTodoDate(e.target.value)}
            />
          </div>
          <button class="btn btn-primary">Add</button>
        </form>
      </div>
    </>
  );
}
