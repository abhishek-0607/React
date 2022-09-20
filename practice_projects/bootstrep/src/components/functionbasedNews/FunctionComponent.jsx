import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Newsinfinite } from "./Newsinfinite";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export const FunctionComponent = () => {
  const pageSize = 6;
  const apikey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar />
      <LoadingBar color="#0d6efd" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Newsinfinite
              setProgress={setProgress}
              apikey={apikey}
              key="general"
              pageSize={pageSize}
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
              setProgress={setProgress}
              apikey={apikey}
              key="business"
              pageSize={pageSize}
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
              setProgress={setProgress}
              apikey={apikey}
              key="entertainment"
              pageSize={pageSize}
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
              setProgress={setProgress}
              apikey={apikey}
              key="sports"
              pageSize={pageSize}
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
              setProgress={setProgress}
              apikey={apikey}
              key="science"
              pageSize={pageSize}
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
              setProgress={setProgress}
              apikey={apikey}
              key="technology"
              pageSize={pageSize}
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
              setProgress={setProgress}
              apikey={apikey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        ></Route>
      </Routes>

      {/* <Newsinfinite setProgress={this.setprogress} apikey={this.apikey} key="" pageSize={this.pageSize} country="in" category="sports" /> */}
    </div>
  );
};
