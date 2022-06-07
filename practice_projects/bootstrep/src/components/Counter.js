import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const addCount = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          addCount(1);
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        REDUCE
      </button>
    </div>
  );
}
