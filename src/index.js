import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [logger, ReduxThunk, sagaMiddleware],
  },
  composeWithDevTools()
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
