import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

const rootEl = document.getElementById("root");

function render() {
  ReactDOM.createRoot(rootEl).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();

reportWebVitals();
