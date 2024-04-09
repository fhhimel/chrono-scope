import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    let response = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&country=bd`
    );
    setArticles(response.data.results);
    console.log(response.data.results);
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      {articles.map((element) => {
        return (
          <div className="col-lg-4">
            <NewsItem
              article_id={element.article_id}
              title={element.title}
              description={element.description.slice(0, 200) + "..."}
              //description={element.description}
              image={element.image_url}
              link={element.link}
            />
          </div>
        );
      })}
    </>
  );
};

export default News;
