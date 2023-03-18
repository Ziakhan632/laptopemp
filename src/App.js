import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Login from './Login'
import Checkout from './Checkout'
import Product from './Components/Products/Product'
import Header from './Header'
import Footer from './Footer'
import Blogpage from './Blogpage'

import { BrowserRouter,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Header />

     <Routes>
        <Route path='/' element={<Home /> } />

        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<Product/>} />

        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/blog' element={<Blogpage/>} />



     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App