import React from "react";

const NewsItem = (props) => {
  return (
    <>
      <div
        className="card news_item_card m-2"
        style={{ width: "" }}
        key={props.article_id}
      >
        <span class="badge position-absolute top-0 start-50 translate-middle rounded-pill text-bg-danger news_source">
          {props.source}
        </span>

        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.description}</p>
          <div className="text-center">
            <a href={props.link} className="btn btn-dark">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
