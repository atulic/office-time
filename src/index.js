import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

// blueprintjs css
import "../node_modules/normalize.css/normalize.css";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

ReactDOM.render(
  <Provider store={createStore(rootReducer, devToolsEnhancer())}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
