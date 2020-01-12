import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Import CSS
import "./index.css";
// Import others
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
