import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articales: [],
  remoteArticles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return (state = {
      ...state,
      articales: [...state.articales, action.payload],
    });
  }
  if (action.type === "DATA_LOADED") {
    return (state = {
      ...state,
      remoteArticles: [...action.payload],
    });
  }
  return state;
}

export default rootReducer;
