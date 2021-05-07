import { ADD_ARTICLE } from "../constants/action-types";
// for custom middle ware
export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload,
  };
}

// thunk middle ware for async call we return function instead of object which help to do async call in action
/* export function getData() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
} */

export function getData() {
  return { type: "DATA_REQUESTED" };
}
