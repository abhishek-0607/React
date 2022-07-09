import React, { useEffect, useState } from "react";

export const Todo = () => {
  const [item, setItem] = useState([]);
  const [button, setButton] = useState("get Data");
  const getTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItem(res);

        console.log(item);
      });
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItem(res);

        //console.log(item);
      });
  }, []);

  return (
    <div>
      <div>
        {item.map((e) => {
          return <p key={e.id}>{e.title}</p>;
        })}
      </div>
      <button
        onClick={() => {
          setButton("here the list");
        }}
      >
        {button}
      </button>
    </div>
  );
};
