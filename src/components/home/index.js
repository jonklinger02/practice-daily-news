import React from "react";
import NewsLetter from "../utils.js/newsletter";
import HomePosts from "./homePosts";

const Home = () => {
  return (
    <>
      <HomePosts />
      <NewsLetter />
    </>
  );
};

export default Home;
