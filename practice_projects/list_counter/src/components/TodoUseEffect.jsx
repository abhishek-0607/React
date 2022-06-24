import React, { useState, useEffect } from "react";

export const TodoUseEffect = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getTodo();
  }, [page]);
  const getTodo = () => {
    fetch(`http://localhost:8080/todos?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((res) => {
        setTodos(res);
      });
    //   setTodos([...todos, text]
  };

  const addTodo = () => {
    const payload = {
      title: text,
      status: false,
    };

    fetch("http://localhost:8080/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getTodo();
      setText("");
    });
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="enter Todo"
        type="text"
      />
      <button onClick={addTodo}>Add Todo</button>

      {todos.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}

      {/* pagination */}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        prev
      </button>
      <button onClick={() => setPage(page + 1)}>next</button>
    </div>
  );
};
