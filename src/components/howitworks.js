import React from 'react';

const HowItWorks = () => {

	return(
		<div className="container mx-auto mt-8">

		<div className="flex flex-wrap justify-center mx-auto">

			<div className="block mx-3 p-6 bg-white hover:bg-gray-100 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sm: my-3">
    			<h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">1. Choose a player and place your order.</h5>
    			<p className="font-normal text-gray-700 dark:text-gray-400">Head on over to our shop to which players can sign your shirt.</p>
			</div>

			<div className="block mx-3 p-6 bg-white hover:bg-gray-100 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sm: my-3">
    			<h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">2. Send your existing shirt in.</h5>
    			<p className="font-normal text-gray-700 dark:text-gray-400">We'll get your favourite Spurs shirt signed.</p>
			</div>

			<div className="block mx-3 p-6 bg-white hover:bg-gray-100 shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sm: my-3">
    			<h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">3. We'll get it signed and send it back.</h5>
    			<p className="font-normal text-gray-700 dark:text-gray-400">Once we receive your shirt we'll have it signed and send it back within 20 days.</p>
			</div>

		</div>

		</div>
	)
}

export default HowItWorks;