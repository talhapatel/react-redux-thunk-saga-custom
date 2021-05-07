import React from "react";
import Form from "./Form";
import List from "./List";
import Post from "./Post";

function App() {
  return (
    <div>
      <h2>Articles</h2>
      <Form />
      <List />
      <h2>API Posts</h2>
      <Post />
    </div>
  );
}

export default App;
