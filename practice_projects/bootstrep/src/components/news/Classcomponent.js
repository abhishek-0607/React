import React, { Component } from "react";
import Navbar from "./Navbar";
import News from "./News";
import { Route, Routes } from "react-router-dom";

export default class Classcomponent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize={6} country="in" category="sports" />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={6}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={6} country="in" category="health" />
            }
          ></Route>
        </Routes>

        {/* <News key="" pageSize={6} country="in" category="sports" /> */}
      </div>
    );
  }
}
