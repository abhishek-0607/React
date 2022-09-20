import React, { Component } from "react";
import Navbar from "./Navbar";
import Newsinfinite from "./Newsinfinite";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class Classcomponent extends Component {
  pageSize = 6;
  apikey = process.env.REACT_APP_API_KEY;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar color="#0d6efd" progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Newsinfinite
                setProgress={this.setProgress}
                apikey={this.apikey}
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
                setProgress={this.setProgress}
                apikey={this.apikey}
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
                setProgress={this.setProgress}
                apikey={this.apikey}
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
                setProgress={this.setProgress}
                apikey={this.apikey}
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
                setProgress={this.setProgress}
                apikey={this.apikey}
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
                setProgress={this.setProgress}
                apikey={this.apikey}
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
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
        </Routes>

        {/* <Newsinfinite setProgress={this.setprogress} apikey={this.apikey} key="" pageSize={this.pageSize} country="in" category="sports" /> */}
      </div>
    );
  }
}
