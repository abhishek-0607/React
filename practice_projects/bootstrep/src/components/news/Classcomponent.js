import React, { Component } from "react";
import Navbar from "./Navbar";
import Newsinfinite from "./Newsinfinite";
import { Route, Routes } from "react-router-dom";

export default class Classcomponent extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Newsinfinite
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <Newsinfinite
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <Newsinfinite
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <Newsinfinite
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <Newsinfinite
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <Newsinfinite
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <Newsinfinite
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
        </Routes>

        {/* <Newsinfinite key="" pageSize={this.pageSize} country="in" category="sports" /> */}
      </div>
    );
  }
}
