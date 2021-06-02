import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import Navbar from './components/utils/Navbar';
import './components/css/normalize.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/cart' component={Cart}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
