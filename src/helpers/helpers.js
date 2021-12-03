import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
export const client = Client.buildClient({
  domain: 'spursexpress.myshopify.com',
  storefrontAccessToken: 'a10215a168b0af950c473d7d0a8c92bc'
});

export const client.product.fetchAll().then((products) => {
  // Do something with the products
  console.log(products);
});