import React from "react";

function Todoitem({ title, status }) {
  return <div>{`${title}-${status}`}</div>;
}
export { Todoitem };
