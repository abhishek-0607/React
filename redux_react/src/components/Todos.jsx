import { useState } from "react";
import { useSelector, useDispatch } from "redux";
import { addTodo } from "./actions";
export const Todos = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="enter todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(text));
        }}
      >
        Add Todo
      </button>
      {todos.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
};
