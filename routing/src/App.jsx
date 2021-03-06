import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Login } from "./components/Login";

import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./common/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product/:id" element={<Products />}></Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/users/:userid"
          element={
            <PrivateRoute>
              <UserDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
