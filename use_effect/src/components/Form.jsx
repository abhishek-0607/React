import { useEffect, useState } from "react";

export const Form = () => {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(0);

  console.log("Before useEffect");

  useEffect(() => {
    //Mounting
    console.log("First useEffect");
  });
  useEffect(() => {
    //updating
    console.log("Second useEffect");
    // only Once!
  }, []);
  useEffect(() => {
    //Updating
    console.log("Third useEffect");
  }, [counter, age]);
  console.log("After useEffect");

  return (
    <div>
      <h3>
        counter:{counter},age:{age}
      </h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter
      </button>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        age
      </button>
    </div>
  );
};
