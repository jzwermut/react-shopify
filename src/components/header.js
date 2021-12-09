import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const Header = ({cart, getItems, items, removeItem, inCart, productList}) => {

const [open, setOpen] = useState(false)

const lineItems = []

const handler = async() => {
	await getItems()
	setOpen(true)
}

const remover = async(vId) => {
	const temp = vId;
	let indy = 0
	
	await productList.forEach((product, index) => {
		if(vId === product.variantId) {
			indy = index
		}
	})

	removeItem(vId, indy);
}

if (cart.lineItems === undefined ) {
	return (
	<h1>...Loading</h1>
	)
}
else {

	return (
	<>

	  <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {cart.lineItems.map((item) => (
                            <li key={item.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={item.variant.image.src}
                                  alt={item.title}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={item.href}>{item.title}</a>
                                    </h3>
                                    <p className="ml-4">{item.variant.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">Signed shirt</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty {item.quantity}</p>

                                  <div className="flex">
                                    <button onClick={() => remover(item.variant.id)}type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>£{cart.subtotalPrice}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Link to="/checkout"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

		<div className="flex justify-between bg-nav items-center px-5 py-3">
			<Link to="/">
				<div className="logo flex w-12">
					<img src={process.env.PUBLIC_URL + "/images/spursExpress.png"} alt="spursexpress logo" />
				</div>
			</Link>

			<Link to="/shop">
				<div className="links flex justify-center text-lg font-semibold text-white hover:text-blue-200 text-opacity-100">Shop</div>
			</Link>

			<button onClick={() => handler() }>
				<div className="flex content-end w-10 hover:bg-blue-300">
					<img src={process.env.PUBLIC_URL + "/images/cart3.png"} alt="shopping cart" />
				</div>
			</button>
		</div>
	</>
		)
	}
}

export default Header;