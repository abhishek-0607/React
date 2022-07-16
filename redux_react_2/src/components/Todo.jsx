import "./Todo.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../redux/actions";

export const Todo = () => {
  const [text, setText] = useState("");
  const { list } = useSelector((state) => ({
    list: state.todoState.list,
  }));

  const dispatch = useDispatch();
  return (
    <>
      <div className="wrapper">
        <header>TODO APP</header>

        <div className="inputField">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Add Items.."
          />

          <button
            onClick={() => {
              dispatch(addTodo(text), setText(""));
            }}
          >
            +
          </button>
        </div>
        <ul className="todoList">
          {list.map((element) => (
            <li className="items" key={element.id}>
              {element.data}

              <button
                onClick={() => {
                  dispatch(deleteTodo(element.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="footer">
          <button onClick={() => dispatch(removeTodo())}>remove list</button>
        </div>
      </div>
    </>
  );
};
