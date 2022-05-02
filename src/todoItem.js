import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import EditTodo from "./EditTodo";
import "./App.css";

export default function TodoItem({
  id,
  title,
  description,
  dueDate,
  onDeleteTodo = (f) => f,
  onEditTodo = (f) => f,
}) {
  const dateObj = new Date(dueDate);
  const formattedDate = `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
  const [show, setShow] = useState(false);

  const onhandleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ cursor: "pointer", width: "auto" }} className="todoborder">
      <h2>{title}</h2>
      <pre>{description}</pre>
      <span class="badge badge-pill badge-dark">{formattedDate}</span>
      <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteTodo(id)} />
      <FontAwesomeIcon icon={faEdit} onClick={() => setShow(true)} />
      {show && <EditTodo show={show} handleClose={onhandleClose} />}
    </div>
  );
}
