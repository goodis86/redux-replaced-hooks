import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import productReducer from "./store/reducers/products";
// import ProductsProvider from './context/products-context';
import configureProductsStore from "./hooks-store/products-store";

configureProductsStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
// starting project's state is managed using redux store and reducer, actions....
// we will convert this approach to react hooks!!

// redux is great to use in bigger applications where we have a very large state to manage!
// context API is great for low frequency rendering chunks of state management
// custom hooks (hook stores) are great for state management if we dont want to have extra library dependencies, and we want to use react and js only
