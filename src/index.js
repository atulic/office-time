import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "../../../../Library/Caches/typescript/3.0/node_modules/redux";
import rootReducer from "./reducers";

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Provider store={createStore(rootReducer, devToolsEnhancer())}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
