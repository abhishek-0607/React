import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="" height="200px" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="norerror" className="btn btn-sm btn-dark">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
