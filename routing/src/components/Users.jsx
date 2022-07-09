import { Link } from "react-router-dom";
export const Users = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      {arr.map((e, i) => (
        <div
          key={i}
          style={{
            marginBottom: "10px",
            textDecoration: "none",
          }}
        >
          <Link to={`/users/${e}`}>User{e}</Link>
        </div>
      ))}
    </div>
  );
};
