import React from "react";
import { Route } from "react-router-dom";

import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Users } from "./Users";

const Routes = () => {
  return (
    <>
      <Navbar />

      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/users/:userId">
        <Users />
      </Route>
    </>
  );
};
export { Routes };
