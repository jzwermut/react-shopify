import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'spursexpress.myshopify.com',
  storefrontAccessToken: process.env.REACT_APP_STOREFRONT_TOKEN
});


ReactDOM.render(
  <React.StrictMode>
    <App  client ={client} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
