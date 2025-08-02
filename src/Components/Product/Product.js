import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loder from '../Loder/Loder'
function Product() {
    const[Products,setProducts]=useState([])//intiall an empty array
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true);
       axios.get('https://fakestoreapi.com/products')
       .then((res)=>{
        setProducts(res.data)
        //console.log(res);
        setIsLoading(false);
       }).catch((err)=>{
        console.log(err);
        setIsLoading(false);
       })
    },[])
  return (
    <div>
      {
         isLoading?(<Loder/>):( <section className={classes.product_container}>{
        //category lay return sanitekem be()seritenal

         Products.map((singleproduct)=>{
            return <ProductCard renderAdd={true} Product={singleproduct} key={singleproduct.id}/>
        })
       }
       </section>)
      }
      
    </div>
  )
}

export default Product