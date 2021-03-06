import React, {useState, useEffect} from 'react';
import Home from './pages/home'
import Products from './pages/products'
import Checkout from './pages/checkout'
import Header from './components/header'
import Client from 'shopify-buy'
import { client } from './helpers/helpers'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "tailwindcss/tailwind.css"

const App = () => {

const [cart, setCart] = useState([])
const [open, setOpen] = useState(true)
const [items, setItems] = useState([])
const [productList, setProductList] = useState([])

const createCheckout = async () => { //creates a new checkout when the app loads and sets the state of cart to the checkout array
  const carty = localStorage.getItem('cart')

  if(carty === null) {
    const checkout = await client.checkout.create()
    localStorage.setItem('cart', JSON.stringify(checkout))
    setCart(checkout)
  }
  else {
    let nice = JSON.parse(carty)
    setCart(nice)
  }
}

const getCheckout = async(checkoutId) => { //fetches an existing checkout
    const checkout = await client.checkout.fetch(checkoutId)
    return checkout
}

const addToCart = async (checkoutId, lineItemsToAdd) => { //adds items to cart, fetches the checkout and updates the state of the cart
    const add = await client.checkout.addLineItems(checkoutId, lineItemsToAdd)
    const checkout =  await getCheckout(checkoutId)
    localStorage.setItem('cart', JSON.stringify(checkout))
    setCart(checkout)
}

const removeFromCart = async (checkoutId, lineItemIds) => { //removes items from cart, fetches the checkout and updates the state of the cart
    const remove = await client.checkout.removeLineItems(checkoutId, lineItemIds)
    const checkout =  await getCheckout(checkoutId)
    localStorage.setItem('cart', JSON.stringify(checkout))
    setCart(checkout)
}

const getProducts = async () => {

    const listy = []
    const products = await client.product.fetchAll()

      products.forEach((p) => {

      let item = {
        id: p.id,
        name: p.title,
        href: '#',
        price: '??' + p.variants[0].price,
        imageSrc: p.images[0].src,
        imageAlt: p.handle,
        variantId: p.variants[0].id,
        clicked: false
        }

      listy.push(item)  

    })
   setProductList(listy)
  }

const getItems = () => {

  const arr = []

  cart.lineItems.forEach((lineItem) => {

    let item = {
      id: lineItem.id,
      name: lineItem.title,
      price: lineItem.variant.price,
      quantity: lineItem.quantity,
      imageSrc: lineItem.variant.image.src,
      imageAlt: lineItem.title,
      variantId: lineItem.variant.id
    }
    arr.push(item)
  })

  setItems(arr)
}

const createLineItem = (variantId) => {
  return [
    {
      variantId: variantId,
      quantity: 1
    }
    ];
}

const getLineItemId = (variantId) => {
  const arr = []
  cart.lineItems.forEach((lineItem) => {
    if(lineItem.variant.id === variantId) {
      arr.push(lineItem.id)
    }
  })
  return arr
}

const cartAdder = async (variantId, index) => {
    const lineItems = await createLineItem(variantId);
    await addToCart(cart.id, lineItems)
    let newArr = [...productList]; 
    newArr[index].clicked = true; 
    setProductList(newArr);
}

const removeItem = async (variantId, index) => {
    const idsToRemove = await getLineItemId(variantId)
    await removeFromCart(cart.id, idsToRemove);
    let newArr = [...productList]
    newArr[index].clicked = false;
    setProductList(newArr);
}

useEffect(() => {
    createCheckout()
    getProducts()
    },[]);

  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home cart={cart} items={items} getItems={getItems} removeItem={removeItem} productList={productList}/>
            </Route>
            <Route path="/shop">
              <Products cartAdder={cartAdder} removeItem={removeItem} cart={cart} addToCart={addToCart} cartId={cart.id} removeFromCart={removeFromCart} items={items} getItems={getItems} productList={productList} getProducts={getProducts} setProductList={setProductList}/>
            </Route>
            <Route path="/checkout">
              <Checkout cart={cart}  removeItem={removeItem} productList={productList}/>
            </Route>
          </Switch>        
      </Router>
    </div>
  );
}

export default App;
