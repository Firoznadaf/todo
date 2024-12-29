import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  
  </React.StrictMode>
);

// Start measuring performance in your app
// Pass a function to log results (for example: reportWebVitals(console.log))
// Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
