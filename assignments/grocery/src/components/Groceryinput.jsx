import { useState } from "react";

export const Groceryinput = ({ getData }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    getData(text);
  };

  return (
    <>
      <input onChange={handleChange} type="text" placeholder="enter grocery" />
      <button onClick={handleClick}>Add Grocery</button>
    </>
  );
};
