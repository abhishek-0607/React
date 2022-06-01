import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("enter text here");
  // text = "abhishek" wrong way to change the state
  // setText = "new text" correct way to change the state

  const handleOnChange = (e) => {
    console.log("onchange");
    setText(e.target.value);
  };

  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        convert to uppercase
      </button>
    </div>
  );
}
