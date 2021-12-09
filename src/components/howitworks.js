import React from 'react';

const HowItWorks = () => {

	return(
		<div className="container mx-auto mt-8">

			<div className="text-4xl text-purple-700 text-center text-opacity-75 font-sans">How it works</div>

		<div className="flex flex-wrap justify-center mx-auto mt-3">

		<div className="m-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
		  <div className="md:flex">
		    <div className="md:flex-shrink-0">
		      <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/kicking.jpg" alt="Man looking at item at a store" />
		    </div>
		    <div className="p-8">
		      <a href="#" className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">1. Choose a player and place your order.</a>
		      <p className="mt-2 text-xl text-gray-500">Head on over to our shop to see which players can sign your shirt.</p>
		    </div>
		  </div>
		</div>

		<div className="m-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
		  <div className="md:flex">
		    <div className="md:flex-shrink-0">
		      <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/post.jpg" alt="Man looking at item at a store" />
		    </div>
		    <div className="p-8">
		      <a href="#" className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">2. Send your existing shirt in.</a>
		      <p className="mt-2 text-xl text-gray-500">We'll get your favourite Spurs shirt signed.</p>
		    </div>
		  </div>
		</div>

		<div className="m-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
		  <div className="md:flex">
		    <div className="md:flex-shrink-0">
		      <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/overit.jpg" alt="Man looking at item at a store" />
		    </div>
		    <div className="p-8">
		      <a href="#" className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">3. We'll get it signed and send it back.</a>
		      <p className="mt-2 text-xl text-gray-500">Once we receive your shirt we'll have it signed and send it back within 20 days.</p>
		    </div>
		  </div>
		</div>

		</div>

		</div>
	)
}

export default HowItWorks;