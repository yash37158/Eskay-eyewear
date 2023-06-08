import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Provider store={store}>
  <React.StrictMode>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
  </React.StrictMode>
  </Provider>
  </Router>


  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
