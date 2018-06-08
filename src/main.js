import React from "react";
import { render } from "react-dom";
import App from "../containers/App";
import { HashRouter } from "react-router-dom";

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("container")
);