import React  from "react";
import "./App.css";

export default function TodoItem({title})
{
    return (
        <div className="todoborder" style={{ width: "50%" }}>
            <h3 style={{ cursor: "pointer" }}>{title}</h3>
          </div>
    );
}
