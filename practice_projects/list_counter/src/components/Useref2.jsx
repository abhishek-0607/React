import React, { useEffect, useRef } from "react";

export default function Useref2() {
  const ref = useRef();
  useEffect(() => {
    console.log(ref);
  }, []);
  const onSubmit = () => {
    console.log(ref.current.files[0]);
  };

  return (
    <div ref={ref}>
      <h1>Image</h1>
      <input type="file" ref={ref} />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
}
