import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import store from "./js/store";
import App from "./js/components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
