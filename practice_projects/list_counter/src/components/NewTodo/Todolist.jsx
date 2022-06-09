import { useState } from "react";
import React from "react";

function Todolist({ title, status, id, handleToggle, handleDelete }) {
  return (
    <div>
      <h3>{title}</h3>
      <button
        onClick={() => {
          handleToggle(id);
        }}
      >
        {status ? "TRUE" : "FALSE"}
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        REMOVE
      </button>
    </div>
  );
}
export { Todolist };
