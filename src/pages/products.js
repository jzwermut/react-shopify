import React, { useState, useEffect } from 'react';
import Header from '../components/header'
import Client from 'shopify-buy'
import { client } from '../helpers/helpers'

const Products = ({cart, addToCart, cartId }) => {

const [productList, setProductList] = useState([])

const createLineItem = (variantId) => {
	return [
		{
			variantId: variantId,
			quantity: 1
		}
		];
}

const cartAdder = async (variantId, index) => {

		const lineItems = await createLineItem(variantId);
		addToCart(cartId, lineItems)
		let newArr = [...productList]; // copying the old datas array
  	newArr[index].clicked = true; // replace e.target.value with whatever you want to change it to
  	setProductList(newArr);
}

const getProducts = async () => {

		const listy = []
		const products = await client.product.fetchAll()

	  	products.forEach((p) => {

	  	console.log(p)

	  	let item = {
	  		id: p.id,
	  		name: p.title,
	  		href: '#',
	  		price: '£' + p.variants[0].price,
	  		imageSrc: p.images[0].src,
	  		imageAlt: p.handle,
	  		variantId: p.variants[0].id,
	  		clicked: false
	  		}

	  	listy.push(item)	

	  })
	 setProductList(listy)
	}

const button = (clicked, vId, index) => {
  if (clicked) {
   return (<button className="w-full mt-2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">True</button>);
  }
  return (<button 
  onClick={() => cartAdder(vId, index)}	
  className="w-full mt-2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">False</button>);
}

useEffect(() => {
    getProducts()
  	},[]);



	return (
		<div>
			<Header />
			<div className="bg-white">
      			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        		<h2 className="sr-only">Products</h2>
					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          			{productList.map((product, index) => (
            			<div key={product.id} href={product.href} className="group">
              				<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
				                <img
				                  src={product.imageSrc}
				                  alt={product.imageAlt}
				                  className="w-full h-full object-center object-cover group-hover:opacity-75"
				                />
              				</div>
              				<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              				<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>

              				{button(product.clicked, product.variantId, index)}
              				
              				  <button onClick={() => cartAdder(product.variantId, index)} type="button" 
              				  className="w-full mt-2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    										<svg className="-ml-1 mr-2 h-5 w-5 text-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
    										Buy now
  											</button>
            			</div>
          			))}
        			</div>
      			</div>
    		</div>
		</div>
	)
}

export default Products;
