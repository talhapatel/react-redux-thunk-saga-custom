import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const List = () => {
  const articles = useSelector((state) => state.articales);
  console.log(articles);
  return (
    <ul>
      {articles &&
        articles.length > 0 &&
        articles.map((el, index) => <li key={index}>{el.title}</li>)}
    </ul>
  );
};

export default List;
