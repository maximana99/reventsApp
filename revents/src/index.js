import React from "react";
import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/layout/ScrollToTop";
import "react-toastify/dist/ReactToastify.min.css";
import { loadEvents } from "./features/events/eventActions";
import "react-calendar/dist/Calendar.css";

const store = configureStore();

store.dispatch(loadEvents());

const rootEl = document.getElementById("root");

function render() {
  ReactDOM.createRoot(rootEl).render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();

reportWebVitals();
