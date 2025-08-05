import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Auth from './Pages/Auth/Auth'
import Signup from './Pages/Auth/Signup'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>} />
            {/*<Route path='/auth' element={<Signup/>} />*/}
            <Route path='/auth' element={<Auth />} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/orders' element={<Orders/>} />
            {/*'/category :categoryName' yiche execute sitedereg call emiadergew Results emilewn new...Resultes emilewe degemo emiteraw CategorCard emilew js lay Category/ bilen kasikemetenew lay new */}
            <Route path='/category/:categoryName' element={<Results/>} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default Routing