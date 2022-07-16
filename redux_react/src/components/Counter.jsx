import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incCount } from "../features/Counter/actions";

export const Counter = () => {
  const count = useSelector((state) => state.counterState.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          dispatch(incCount(1));
        }}
      >
        ADD 1
      </button>
    </div>
  );
};
