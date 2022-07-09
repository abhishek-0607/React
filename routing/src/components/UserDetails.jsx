import { useContext, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const UserDetails = () => {
  const { token } = useContext(AuthContext);
  const { userid } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userid}`)
      .then((res) => res.json())
      .then((d) => {
        setUser(d.data);
        console.log(d.data);
      });
  }, [userid]);

  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <img src={user.avatar} alt="test" />
      <p>
        Firstname:- {user.first_name}
        <br />
        Lastname:- {user.last_name}
        <br />
        Email:- {user.email}
      </p>
    </div>
  );
};
