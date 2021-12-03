import React from 'react';
import Client from 'shopify-buy';
import axios from 'axios';

const App = ( {client} ) => {

const getProducts = () => {
  client.product.fetchAll().then((products) => {
  // Do something with the products
  console.log(products);
  });
}

getProducts();

  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
