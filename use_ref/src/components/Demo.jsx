import React, { useState, useRef } from "react";

export const Demo = () => {
  //const test = useRef(1);
  //console.log("Rerendered: ", test);
  //const [d, setD] = useState(1);
  const a = useRef(null);
  const b = useRef(1);
  const c = useRef(2);
  const d = useRef(3);

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
      <button
        onClick={() => {
          a.current.scrollIntoView({
            behavior: "smooth",
          });
          console.log(a.current.value);
        }}
      >
        Scroll on 1
      </button>
      <button
        onClick={() => {
          b.current.scrollIntoView({
            behavior: "smooth",
          });
          console.log(b.current.value);
        }}
      >
        Scroll on 2
      </button>
      <button
        onClick={() => {
          c.current.scrollIntoView({
            behavior: "smooth",
          });
          console.log(c.current.value);
        }}
      >
        Scroll on 3
      </button>
      <button
        onClick={() => {
          d.current.scrollIntoView({
            behavior: "smooth",
          });
          console.log(d.current.value);
        }}
      >
        Scroll on 4
      </button>

      <div
        ref={a}
        style={{
          width: "300px",
          height: "300px",
          background: "coral",
        }}
      >
        1
      </div>
      <div
        ref={b}
        style={{
          width: "300px",
          height: "300px",
          background: "cyan",
        }}
      >
        2
      </div>
      <div
        ref={c}
        style={{
          width: "300px",
          height: "300px",
          background: "coral",
        }}
      >
        3
      </div>
      <div
        ref={d}
        style={{
          width: "300px",
          height: "300px",
          background: "cyan",
        }}
      >
        4
      </div>
    </div>
  );
};
