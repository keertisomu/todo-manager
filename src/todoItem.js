import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

export default function TodoItem({
  id,
  title,
  description,
  dueDate,
  onDeleteTodo = (f) => f,
}) {
  const dateObj = new Date(dueDate);
  const formattedDate = `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
  return (
    <div style={{ cursor: "pointer", width: "auto" }} className="todoborder">
      <h2>{title}</h2>
      <pre>{description}</pre>
      <span class="badge badge-pill badge-dark">{formattedDate}</span>
      <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteTodo(id)} />
    </div>
  );
}
