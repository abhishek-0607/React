import React from "react";
import { useState } from "react";
import { Todoinput } from "./Todoinput";
import { Todolist } from "./Todolist";
import { v4 as uuid } from "uuid";

function Todo() {
  const [list, setList] = useState([]);
  const handleAdd = (data) => {
    let payload = {
      title: data,
      status: false,
      id: uuid(),
    };
    setList([...list, payload]);
  };
  return (
    <div>
      <Todoinput handleClick={handleAdd} />
      {list.map((item) => (
        <Todolist {...item} />
      ))}
    </div>
  );
}
export { Todo };
