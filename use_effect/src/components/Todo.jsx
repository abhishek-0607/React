import { useEffect, useState } from "react";
export const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTodo(page);
  }, [page]);

  const getTodo = async (page) => {
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
      .then((d) => d.json())
      .then((res) => {
        setTodo(res);
      });
  };

  const addTodo = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:3001/todos", {
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
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="enter Todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      {todo.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
