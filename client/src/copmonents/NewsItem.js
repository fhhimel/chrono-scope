import React from "react";

const NewsItem = (props) => {
  return (
    <>
      <div
        className="card news_item_card m-2"
        style={{ width: "" }}
        key={props.article_id}
      >
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary">
            Click here
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
