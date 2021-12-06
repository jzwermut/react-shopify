import React, {useState} from 'react';
import Home from './pages/home'
import Products from './pages/products'
import Checkout from './pages/checkout'
import Playground from './pages/playground'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "tailwindcss/tailwind.css"

const App = () => {

const [cart, setCart] = useState([])

  return (
    <div>
    <Router>
        <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/shop">
                <Products />
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
