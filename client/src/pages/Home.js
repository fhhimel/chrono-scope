import React from "react";
import News from "../copmonents/News";
import Navbar from "../copmonents/Navbar";

const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="row p-2">
          {" "}
          <News />
        </div>
      </div>
    </>
  );
};

export default Home;
