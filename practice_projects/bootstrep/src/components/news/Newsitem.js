import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-sm btn-primary">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
