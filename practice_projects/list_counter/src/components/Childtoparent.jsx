import React, { useState } from "react";

const Child = ({ value, handleAdd, handleSub }) => {
  return (
    <div>
      <h3>count is - {value}</h3>
      <button onClick={handleSub}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};
function Childtoparent() {
  const [count, setCount] = useState(0);
  const handlechange = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <Child
        value={count}
        handleAdd={() => {
          handlechange(1);
        }}
        handleSub={() => {
          handlechange(-1);
        }}
      />
    </div>
  );
}
export { Childtoparent };
