import React, { useState } from "react";

const Child = ({ value }) => <h1>{value}</h1>;

function Parenttochild() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <Child value={count} />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export { Parenttochild };
