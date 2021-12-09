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

	return (
  <div>
    <Header cart={cart}  removeItem={removeItem} productList={productList}/>
    <div class="container mx-auto p-20">
    
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Address line 1</label>
          <input onChange={(e) => setAdd1(e.target.value)} type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='1 George St' />
        </div>
        <div class="mb-6">
          <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Address line 2</label>
          <input onChange={(e) => setAdd2(e.target.value)} type="address" id="addressLine2" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Apartment 2' />
        </div>
        <div class="mb-6">
          <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">City</label>
          <input onChange={(e) => setCity(e.target.value)} type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Sydney' />
        </div>
        <div class="mb-6">
          <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Country</label>
          <input onChange={(e) => setCountry(e.target.value)} type="text" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Australia' />
        </div>
        <div class="mb-6">
          <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">First Name</label>
          <input onChange={(e) => setFirstName(e.target.value)} type="text" id="firstname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Bobby' />
        </div>
        <div class="mb-6">
          <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Last Name</label>
          <input onChange={(e) => setLastName(e.target.value)} type="text" id="lastname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Brady' />
        </div>
        <div class="mb-6">
          <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Phone</label>
          <input onChange={(e) => setPhone(e.target.value)} type="number" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='0412 345 678'  />
        </div>
        <div class="mb-6">
          <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">State</label>
          <input onChange={(e) => setState(e.target.value)} type="text" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='NSW'  />
        </div>
        <div class="mb-6">
          <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Postcode</label>
          <input onChange={(e) => setPostcode(e.target.value)} type="number" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='2000'  />
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
        </button>
      </form>

    </div>
  </div>
  )
}

export default Checkout;