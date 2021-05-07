import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions";

const Post = () => {
  const dispatch = useDispatch();
  const remoteArticles = useSelector((state) => state.remoteArticles);

  useEffect(() => {
    dispatch(getData());
    return () => {};
  }, [dispatch]);
  return (
    <div>
      lists...
      <ul>
        {remoteArticles.map((remoteArticle) => (
          <li key={remoteArticle.id}>{remoteArticle?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
