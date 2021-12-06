import Client from 'shopify-buy'

	export const client = Client.buildClient({
	  domain: 'spursexpress.myshopify.com',
	  storefrontAccessToken: process.env.REACT_APP_STOREFRONT_TOKEN
	});
