import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

import loadingImage from "../images/loading.gif";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&language=en&category=${props.category}`
      );

      setArticles(response.data.results);
      setLoading(false);
    } catch (error) {
      if (error.response.data.results.code === "RateLimitExceeded") {
        setErrorFlag(true);
        setArticles([]);
      }
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <div className="row p-2">
        <div className="text-center">
          {" "}
          {loading && <img className="loading_img" src={loadingImage} alt="" />}
        </div>
        <div className="text-center">
          {" "}
          {errorFlag && <h1>Limit Reached! Please try later.</h1>}
        </div>

        {articles &&
          articles.map((element) => {
            return (
              <div className="col-lg-4">
                <NewsItem
                  article_id={element.article_id}
                  title={element.title}
                  description={
                    element.description
                      ? element.description.slice(0, 200) + "..."
                      : "N/A"
                  }
                  //description={element.description}
                  image={
                    element.image_url
                      ? element.image_url
                      : "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  link={element.link}
                  source={element.source_id}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default News;
