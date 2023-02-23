import { Route, Routes } from 'react-router-dom';
import React from 'react';
import NotFound from './Components/NotFound';
import Products from './Components/Products'
import NavigationBar from './Components/NavigationBar';
import ProductDetails from './Components/ProductDetails'

function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path='/detail' element={<ProductDetails/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
