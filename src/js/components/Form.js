import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticle } from "../actions";

function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addArticle({ title }));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button type='submit'>SAVE</button>
    </form>
  );
}

export default Form;
