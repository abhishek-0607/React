import React from "react";
import { Todoitem } from "./Todoitem";

function Todo() {
  const [query, setQuery] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const handleAdd = () => {
    let payload = {
      title: query,
      status: false,
    };
    let newTasks = [...tasks, payload];
    setTasks(newTasks);
    console.log(tasks);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        value={query}
        onChange={handleChange}
        placeholder="write something"
      />
      <button onClick={handleAdd}>ADD</button>
      <div>
        {tasks.map((items) => {
          return <Todoitem {...items} />;
        })}
      </div>
    </div>
  );
}
export { Todo };
