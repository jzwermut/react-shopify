import React, {useState, useEffect} from 'react';
import Home from './pages/home'
import Products from './pages/products'
import Checkout from './pages/checkout'
import Playground from './pages/playground'
import Client from 'shopify-buy'
import { client } from './helpers/helpers'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "tailwindcss/tailwind.css"

const App = () => {

const [cart, setCart] = useState({})

const createCheckout = async () => {
    const checkout = await client.checkout.create()
    setCart(checkout)
}

const getCheckout = async(checkoutId) => {
  const checkout = await client.checkout.fetch(checkoutId)
  return checkout
}

const addToCart = async (checkoutId, lineItemsToAdd) => {
    const add = await client.checkout.addLineItems(checkoutId, lineItemsToAdd)
    const checkout =  await getCheckout(checkoutId)
    setCart(checkout)
}

const removeFromCart = async (checkoutId, lineItemIds) => {
    const remove = await client.checkout.removeLineItems(checkoutId, lineItemIds)
    const checkout =  await getCheckout(checkoutId)
    setCart(checkout)
}

useEffect(() => {
    createCheckout()
    },[]);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Products cart={cart} addToCart={addToCart} cartId={cart.id} removeFromCart={removeFromCart}/>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/playground">
            <Playground />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
