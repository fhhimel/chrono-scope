import React from "react";
import News from "../copmonents/News";
import Navbar from "../copmonents/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="top" category="top" />} />
            <Route
              exact
              path="/world"
              element={<News key="world" category="world" />}
            />
            <Route
              exact
              path="/politics"
              element={<News key="politics" category="politics" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" category="science" />}
            />
            <Route
              exact
              path="/tourism"
              element={<News key="tourism" category="tourism" />}
            />
            <Route
              exact
              path="/education"
              element={<News key="education" category="education" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" category="sports" />}
            />
            <Route
              exact
              path="/lifestyle"
              element={<News key="lifestyle" category="lifestyle" />}
            />
            <Route
              exact
              path="/health"
              element={<News key="health" category="health" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Home;
