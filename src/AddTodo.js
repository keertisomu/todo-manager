import React, { useState } from "react";
import "./App.css";

export default function AddTodo({submitCallBack = (f) => f}){
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
    const [todoDate, setTodoDate] = useState();

    const submit = (e) => {
        e.preventDefault();
        submitCallBack(todoTitle, todoDescription, todoDate);
    }
    return(
        <>
        <form onSubmit={submit}>
        <div class="add-todo">
            <span class="label label-default">Todo Name</span>
            <input
            type="text"
            value={todoTitle}
            placeholder="add a todo"
            onChange={(e) => setTodoTitle(e.target.value)}
            />
            <span class="label label-default">Todo Description</span>
            <input
            type="text"
            value={todoDescription}
            placeholder="add a todo"
            onChange={(e) => setTodoDescription(e.target.value)}
            />
             <span class="label label-default">Due date</span>
            <input
            type="text"
            value={todoDate}
            placeholder="add a todo"
            onChange={(e) => setTodoDate(e.target.value)}
            />
            <button  class="btn add-btn">Add</button>
        </div>
      </form>
        </>
    );
}