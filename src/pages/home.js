import React from 'react';
import Header from '../components/header'
import Hero from '../components/hero'
import HowItWorks from '../components/howitworks'

const Home = ({cart, items}) => {

	return (
		<div>
			<Header cart={cart} items={items} />
			<Hero />
			<HowItWorks />
		</div>
	)
}

export default Home;