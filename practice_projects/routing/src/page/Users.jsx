import React from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <div>
      <h3>Users</h3>
      {[1, 2, 3].map((id) => (
        <div>
          <Link to={`/users/${id}`}>User {id}</Link>
        </div>
      ))}
    </div>
  );
};
