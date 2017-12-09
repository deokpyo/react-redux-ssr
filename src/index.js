import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "./stores";
import { Provider } from "react-redux";
import { Admin } from "./components/containers";

const initialState = window.__INITIAL_STATE__;

const app = (
  <Provider store={store.configure(initialState)}>
    <Admin />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
