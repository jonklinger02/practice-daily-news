import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const HomePosts = () => {
  const homePost = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {});

  return <div>homeposts</div>;
};

export default HomePosts;
