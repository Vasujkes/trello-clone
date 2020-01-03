import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.scss";

import App from "./App";
import store from "./store";

const render = Component => 
  ReactDOM.render(
    
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
  render(App);
  if (module.hot) {
    module.hot.accept("./App", () => {
      const nextApp = require("./App").default;
      render(nextApp);
    });
  }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
