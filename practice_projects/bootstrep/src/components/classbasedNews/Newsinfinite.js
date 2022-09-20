import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    console.log("contructor");
    super(props);
    this.state = { articles: [], loading: false, page: 1, totalResults: 0 };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsApp By AB360`;
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    const res = await fetch(url);

    const data = await res.json();
    this.props.setProgress(70);

    // console.log(data.articles);
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apikey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.articles);

    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalResults: data.totalResults,
      page: this.state.page + 1,
    });
  };

  //   handlePrevClick = async () => {
  //     console.log("handlePrevClick", this.state.page);
  //     this.setState({ page: this.state.page - 1 });
  //     this.updateNews();
  //   };

  //   handleNextClick = async () => {
  //     console.log("handleNextClick", this.state.page);
  //     this.setState({ page: this.state.page + 1 });
  //     this.updateNews();
  //   };

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2
          className="text-center"
          style={{ margin: "30px 0", textDecoration: "underline" }}
        >
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <>
            <div className="row">
              {this.state.articles.map((e, i) => (
                <div className="col-md-4" key={i}>
                  <Newsitem
                    source={e.source.name}
                    title={e.title != null ? e.title.slice(0, 40) : ""}
                    description={
                      e.description != null ? e.description.slice(0, 80) : ""
                    }
                    imgUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                  />
                </div>
              ))}
            </div>
          </>
        </InfiniteScroll>
      </div>
    );
  }
}
