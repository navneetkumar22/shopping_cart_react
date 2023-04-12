import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let isAdded = false;

    cart.forEach((item) => {
      if (product.id === item.id) {
        isAdded = true;
      }
    })
    if (isAdded) {
      window.alert("Product is already added to Cart!")
      return;
    }

    setCart([...cart, product]);
  }



  return (
    <BrowserRouter>
      <Navbar size={cart.length} />
      <Routes>
        <Route path='/' element={<Products addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
