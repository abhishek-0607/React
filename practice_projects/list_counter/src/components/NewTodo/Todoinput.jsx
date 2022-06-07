import React from "react";

function Todoinput({ handleClick }) {
  const [text, setText] = React.useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="add in list"
      ></input>
      <button
        onClick={() => {
          handleClick(text);
        }}
      >
        ADD
      </button>
    </div>
  );
}
export { Todoinput };
