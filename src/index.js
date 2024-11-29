import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import userReducer from "./feature/Users";
 const Store = configureStore({
  reducer:{
       users:userReducer,
  }
 })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {Store} >
    <App />
    </Provider>
  </React.StrictMode>
);


