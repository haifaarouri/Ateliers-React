import { Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'
import NavigationBar from './Components/NavigationBar'

function App() {

  const Products = React.lazy(()=>import('./Components/Products'))
  const ProductDetails = React.lazy(()=>import('./Components/ProductDetails'))
  const NotFound = React.lazy(()=>import('./Components/NotFound'))

  return (
    <>
    <NavigationBar></NavigationBar>
    <Suspense fallback={<p>Loading ...</p>}>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/details/:name' element={<ProductDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
