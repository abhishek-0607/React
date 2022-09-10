import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    console.log("contructor");
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }
  async componentDidMount() {
    console.log("did mount");
    this.setState({ loading: true });
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=396c5457c306470294820130bdaebee5&page=1&pageSize=${this.props.pageSize}`
    );
    const data = await res.json();
    // console.log(data.articles);
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log("did mount");
    this.setState({ loading: true });

    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=396c5457c306470294820130bdaebee5&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`
    );
    const data = await res.json();
    // console.log(data.articles);

    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("did mount");
    this.setState({ loading: true });
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=396c5457c306470294820130bdaebee5&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`
    );
    const data = await res.json();
    // console.log(data.articles);

    this.setState({
      page: this.state.page + 1,
      articles: data.articles,
      loading: false,
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-center">Top headlines</h1>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
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
                onClick={() => {
                  this.handlePrevClick();
                }}
              >
                Prev
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  this.handleNextClick();
                }}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
