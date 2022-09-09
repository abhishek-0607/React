import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  constructor() {
    console.log("contructor");
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }
  async componentDidMount() {
    console.log("did mount");
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=396c5457c306470294820130bdaebee5&page=1&pageSize=20`
    );
    const data = await res.json();
    // console.log(data.articles);
    this.setState({ articles: data.articles });
  }

  //   handleClick(value) {
  //     this.setState({
  //       page: this.state.page + value,
  //     });
  //   }

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-center">Top headlines</h1>
        <div className="row">
          {this.state.articles.map((e, i) => (
            <div className="col-md-4" key={i}>
              <Newsitem
                title={e.title != null ? e.title.slice(0, 40) : ""}
                description={
                  e.description != null ? e.description.slice(0, 85) : ""
                }
                imgUrl={e.urlToImage}
                newsUrl={e.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            // onClick={this.handleClick(-1)}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-dark"
            // onClick={this.handleClick(1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
