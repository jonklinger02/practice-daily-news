import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/actions";

import Masonry from "react-masonry-css";
import Moment from "react-moment";
import { LinkContainer } from "react-router-bootstrap";

const HomePosts = () => {
  const homePosts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);

  useEffect(() => {
    dispatch(getPosts({}, 1, "desc", 6));
  }, [dispatch]);

  const loadMorePosts = () => {
    const page = homePosts.page + 1;
    setloading(true);
    dispatch(getPosts(homePosts, page, "desc", 6)).then(() =>
      setloading(false)
    );
  };

  return (
    <>
      <Masonry
        breakpointCols={{ default: 3, 800: 2, 400: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {homePosts.posts
          ? homePosts.posts.map((item) => (
              <div key={item.id}>
                <img
                  style={{ width: "100%", height: "200px" }}
                  src={item.image}
                />
                <div className="author">
                  <span>{item.author} -</span>
                  <Moment format="DD MMMM">{item.createdat}</Moment>
                </div>
                <div className="content">
                  <div className="title">{item.title} </div>
                  <div className="excerpt">{item.excerpt}</div>
                  <LinkContainer to={`/article/${item.id}`}>
                    <Button variant="light">Read More</Button>
                  </LinkContainer>
                </div>
              </div>
            ))
          : null}
      </Masonry>
      {loading ? (
        <div style={{ textAlign: "center " }}>
          <Spinner animation="border" role="status" />
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}
      {!homePosts.end && !loading ? (
        <Button variant="outline-dark" onClick={() => loadMorePosts()}>
          Load more Assets
        </Button>
      ) : null}
    </>
  );
};

export default HomePosts;
