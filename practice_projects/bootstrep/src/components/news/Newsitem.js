import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: 1 }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imgUrl} className="card-img-top" alt="" height="200px" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {author ? "by " + author : ""} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="norerror" className="btn btn-sm btn-dark">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
