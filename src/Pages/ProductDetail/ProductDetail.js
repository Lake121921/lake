import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loder from '../../Components/Loder/Loder'
function ProductDetail() {
  const [product,setproduct]=useState({})  
  const [isLoading,setIsLoading]=useState(false)
  const {productId}=useParams()
  useEffect(()=>{
     setIsLoading(true)
     axios.get(`${productUrl}/products/${productId}`)
     .then((res)=>{
      setproduct(res.data)
      setIsLoading(false)
     }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
     })
  },[])
  return (
    <LayOut>
      {isLoading?(<Loder/>):(<ProductCard
      Product={product}
      flex={true}
      renderDesc={true}
      renderAdd={true}
      />)}
    </LayOut>
    
  )
}

export default ProductDetail