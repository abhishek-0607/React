import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addData,
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getData,
  getTodoError,
  getTodoSuccess,
} from "../features/Todos/actions";

export const Todos = () => {
  const [text, setText] = useState("");

  const { loading, todos, error } = useSelector(
    (state) => ({
      loading: state.todosState.loading,
      todos: state.todosState.todos,
      error: state.todosState.error,
    })
    // function (prev, curr) {
    //   if (
    //     prev.todosState.todos === curr.todosState.todos &&
    //     prev.todosState.loading === curr.todosState.loading &&
    //     prev.todosState.error === curr.todosState.error
    //   ) {
    //     return true;
    //   }
    //   return false;
    // }
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    dispatch(getData());
    // try {
    //   dispatch(addTodoLoading());
    //   const data = await fetch("http://localhost:8080/todos");
    //   const res = await data.json();
    //   dispatch(getTodoSuccess(res));
    // } catch (err) {
    //   dispatch(getTodoError(err));
    // }
  }

  const addTodo = () => {
    // dispatch(addData());
    dispatch(addTodoLoading());
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: false, title: text }),
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(addTodoSuccess(res));
        getTodos();
      })
      .catch((err) => {
        dispatch(addTodoError(err));
      });
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>something went wrong!</div>
  ) : (
    <div>
      <input
        value={text}
        type="text"
        placeholder="enter Todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todos.map((todo) => (
          <h3 key={todo.id}>
            {todo.title}-{!todo.status ? "Not Done" : "Done"}
          </h3>
        ))}
      </div>
    </div>
  );
};
