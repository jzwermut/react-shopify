import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Header from '../components/header'
import Client from 'shopify-buy'
import { client } from '../helpers/helpers'
import { useHistory } from 'react-router-dom'

const Checkout = ({cart, productList, removeItem}) => {

const [add1,setAdd1] = useState('')
const [add2,setAdd2] = useState('')
const [city,setCity] = useState('')
const [company,setCompany] = useState('')
const [country,setCountry] = useState('')
const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [phone,setPhone] = useState('')
const [state,setState] = useState('')
const [postcode,setPostcode] = useState('')
const [open,setOpen] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault()

  const shippingAddress = {
   address1: add1,
   address2: add2,
   city: city,
   company: null,
   country: country,
   firstName: firstName,
   lastName: lastName,
   phone: phone,
   province: state,
   zip: postcode
 };

 const checkout = await client.checkout.updateShippingAddress(cart.id, shippingAddress)

 window.location.href = `${cart.webUrl}`
}

if (cart.lineItems === undefined ) {
  return (
  <h1>...Loading</h1>
  )
}
else {


	return (
  <div>
    <Header cart={cart}  removeItem={removeItem} productList={productList}/>

    <div className="container mx-auto flex flex-wrap grid grid-cols-3 p-20">
      <div className="text-center text-2xl mb-10 col-span-2 px-5"> Shipping details
    
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label for="addressLine1" className="text-sm text-left font-medium text-gray-900 block mb-2 dark:text-gray-300">Address line 1</label>
          <input onChange={(e) => setAdd1(e.target.value)} type="address" id="addressLine1" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='1 George St' />
        </div>
        <div className="mb-6">
          <label for="addressLine1" className="text-sm text-left font-medium text-gray-900 block mb-2 dark:text-gray-300">Address line 2</label>
          <input onChange={(e) => setAdd2(e.target.value)} type="address" id="addressLine2" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Apartment 2' />
        </div>
        <div className="mb-6">
          <label for="addressLine1" className="text-sm text-left font-medium text-gray-900 block mb-2 dark:text-gray-300">City</label>
          <input onChange={(e) => setCity(e.target.value)} type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Sydney' />
        </div>
        <div className="mb-6">
          <label for="addressLine1" className="text-sm text-left font-medium text-gray-900 block mb-2 dark:text-gray-300">Country</label>
          <input onChange={(e) => setCountry(e.target.value)} type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Australia' />
        </div>
        <div className="mb-6">
          <label for="addressLine1" className="text-sm text-left font-medium text-gray-900 block mb-2 dark:text-gray-300">First Name</label>
          <input onChange={(e) => setFirstName(e.target.value)} type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Bobby' />
        </div>
        <div className="mb-6">
          <label for="addressLine1" className="text-sm text-left font-medium text-gray-900 block mb-2 dark:text-gray-300">Last Name</label>
          <input onChange={(e) => setLastName(e.target.value)} type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Brady' />
        </div>
        <div className="mb-6">
          <label for="addressLine1" className="text-sm text-left font-medium text-gray-900 block mb-2 dark:text-gray-300">Phone</label>
          <input onChange={(e) => setPhone(e.target.value)} type="number" id="addressLine1" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='0412 345 678'  />
        </div>
        <div className="mb-6">
          <label for="addressLine1" className="text-sm text-left font-medium text-gray-900 block mb-2 dark:text-gray-300">State</label>
          <input onChange={(e) => setState(e.target.value)} type="text" id="addressLine1" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='NSW'  />
        </div>
        <div className="mb-6">
          <label for="addressLine1" className="text-sm text-left font-medium text-gray-900 block mb-2 dark:text-gray-300">Postcode</label>
          <input onChange={(e) => setPostcode(e.target.value)} type="number" id="addressLine1" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='2000'  />
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
        </button>
      </form>

      </div>

                  <div className="text-2xl flex-none text-center col-span-1 bg-blue-800 bg-opacity-25 rounded-lg">Cart
                    <div className="mt-8 px-5 rounded">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200 bg-white rounded-lg">
                          {cart.lineItems.map((item) => (
                            <li key={item.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 bg-white border border-gray-200 rounded-md overflow-hidden">
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
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  


    </div>
    
  </div>
    )
  }
}

export default Checkout;

