import React  from "react";
import "./App.css";

export default function TodoItem({title, description, dueDate})
{
    const dateObj = new Date(dueDate);
    const formattedDate = `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
    return (
        <div style={{cursor: "pointer" , width: "30%"}} className="todoborder">
            <h2>{title}</h2>
            <pre>{description}</pre>
            <span class="badge badge-pill badge-dark">{formattedDate}</span>
          </div>
    );
}
