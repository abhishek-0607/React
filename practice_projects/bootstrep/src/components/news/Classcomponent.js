import React, { Component } from "react";
import Navbar from "./Navbar";
import News from "./News";

export default class Classcomponent extends Component {
  render() {
    return (
      <div>
        <Navbar />
        Hello this is class practice component
        <News />
      </div>
    );
  }
}
