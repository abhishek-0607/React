import React from "react";

export const Newsitem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: 1 }}
          >
            {source}
          </span>
        </div>
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
};
