import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./approutes";
import ReduxStore from "./store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
