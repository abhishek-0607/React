import React, { useState } from "react";
import { useEffect } from "react";
// import Counter from "./Counter";

const Useeffect = () => {
  const [count, setCount] = useState(30);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("inside setInterval");
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(id);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    //cleanup
    return () => {
      console.log("cleanup any setIntervals");

      clearInterval(id);
    };
  }, []);

  return (
    <div>
      {show && <h2>Counter:- {count}</h2>}
      <button
        onClick={() => {
          return setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>
    </div>
  );
};

export default Useeffect;
