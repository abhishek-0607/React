import React, { useState, useRef } from "react";

export const Demo = () => {
  //const test = useRef(1);
  //console.log("Rerendered: ", test);
  //const [d, setD] = useState(1);
  const inputRef = useRef(null);

  return (
    <div>
      {/* <button
        onClick={() => {
          setD((e) => e + 1);
        }}
      >
        rerender
      </button>

      <button
        onClick={() => {
          test.current = test.current + 1;
          console.log(test);
        }}
      >
        Increment Test
      </button> */}

      <div
        ref={inputRef}
        style={{
          width: "300px",
          height: "300px",
          background: "coral",
        }}
      >
        1
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          background: "cyan",
        }}
      >
        2
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          background: "coral",
        }}
      >
        3
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          background: "cyan",
        }}
      >
        4
      </div>
      <button
        onClick={() => {
          inputRef.current.scrollIntoView({
            behavior: "smooth",
          });
          console.log(inputRef.current.value);
        }}
      >
        Scroll on top
      </button>
    </div>
  );
};
