import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const Checkout = () => {

	return (
  <div class="container mx-auto p-20">
  
    <form>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Address line 1</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Address line 2</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">City</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Company</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Country</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">First Name</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Last Name</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Phone</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">State</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <div class="mb-6">
        <label for="addressLine1" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Postcode</label>
        <input type="address" id="addressLine1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Chestnut Street 92' required />
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

  </div>
  )
}

export default Checkout;