import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import productReducer from "./store/reducers/products";
// import ProductsProvider from './context/products-context';
import configureProductsStore from './hooks-store/products-store';

configureProductsStore();


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  
  document.getElementById("root")
);
// starting project's state is managed using redux store and reducer, actions....
// we will convert this approach to react hooks!!
