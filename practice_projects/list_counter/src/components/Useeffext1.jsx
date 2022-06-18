import React, { useEffect, useState } from "react";

const Useeffext1 = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getTodos(page);
  }, [page]);
  const getTodos = (page = 1) => {
    setIsLoading(true);
    return fetch(
      `https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=2`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const addTodos = (title) => {
    const payload = {
      title,
      status: false,
    };
    setIsLoading(true);
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos();
      })
      .catch((e) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return isLoading ? (
    isError ? (
      <h3>something went wrong</h3>
    ) : (
      <h3>...Loading</h3>
    )
  ) : (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="add something"
      />
      <button onClick={() => addTodos(title)}>ADD</button>

      <ul>
        {data.map((item) => (
          <li key={item.id}>{`${item.title} - ${item.status}`}</li>
        ))}
      </ul>

      <br />
      <h3>Page: {page}</h3>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Useeffext1;
