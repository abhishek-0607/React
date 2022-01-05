import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ margin: "10px", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "10px", textDecoration: "none" }}>
        About
      </Link>
      <Link
        to="/product/abhishek"
        style={{ margin: "10px", textDecoration: "none" }}
      >
        Products
      </Link>
      <Link to="/users" style={{ margin: "10px", textDecoration: "none" }}>
        Users
      </Link>
    </div>
  );
};
