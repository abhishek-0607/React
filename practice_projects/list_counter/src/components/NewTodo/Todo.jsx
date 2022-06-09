import React from "react";
import { useState } from "react";
import { Todoinput } from "./Todoinput";
import { Todolist } from "./Todolist";
import { v4 as uuid } from "uuid";

function Todo() {
  const [list, setList] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const handleAdd = (data) => {
    let payload = {
      title: data,
      status: false,
      id: uuid(),
    };
    setList([...list, payload]);
  };

  const handleDelete = (id) => {
    const updatedTodo = list.filter((item) => item.id !== id);
    setList(updatedTodo);
  };
  const handleToggle = (id) => {
    const updatedTodo = list.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
    setList(updatedTodo);
  };
  return (
    <div>
      <Todoinput handleClick={handleAdd} />
      {list
        .filter((item) => (showAll ? true : !item.status))
        .map((item) => (
          <Todolist
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            key={item.id}
            {...item}
          />
        ))}
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show All Unfinished Task" : "Show All Tasks"}
      </button>
    </div>
  );
}
export { Todo };
