import React from 'react';
import Header from '../components/header'
import Hero from '../components/hero'
import HowItWorks from '../components/howitworks'

const Home = ({cart, getItems, items, removeItem, productList}) => {

	return (
		<div>
			<Header cart={cart} items={items} getItems={getItems} removeItem={removeItem}  productList={productList}/>
			<Hero />
			<HowItWorks />
		</div>
	)
}

export default Home;