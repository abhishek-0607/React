import React, { useState } from "react";

const Child = ({ value }) => {
  return (
    <div>
      <h3>count is - {value}</h3>
    </div>
  );
};
const Button = ({ label, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
};
function Siblings() {
  const [count, setCount] = useState(0);
  const handlechange = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <Child value={count} />
      <Button
        label="-"
        handleClick={() => {
          handlechange(-1);
        }}
      ></Button>
      <Button
        label="+"
        handleClick={() => {
          handlechange(1);
        }}
      ></Button>
    </div>
  );
}
export { Siblings };
