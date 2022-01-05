import { useEffect, useState } from "react/cjs/react.development";

export const Timer = () => {
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((p) => {
        if (p === 0) {
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => {
      // unmounting
      console.log("unmounting");
      clearInterval(interval);
    };
  }, []);
  return <div>Count is {counter}</div>;
};
