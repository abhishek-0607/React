import React, { useEffect } from "react";
import { Newsitem } from "./Newsitem";
import { Spinner } from "./Spinner";
import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export const Newsinfinite = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    const res = await fetch(url);
    const data = await res.json();
    props.setProgress(70);
    // console.log(data.articles);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category
    )} - NewsApp By AB360`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.articles);
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  console.log("render");
  return (
    <div className="container my-3">
      <h2
        className="text-center"
        style={{
          margin: "30px 0",
          marginTop: "80px",
          textDecoration: "underline",
        }}
      >
        Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <>
          <div className="row">
            {articles.map((e, i) => (
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
};

Newsinfinite.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
Newsinfinite.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
