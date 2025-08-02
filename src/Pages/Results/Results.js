import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Product from '../../Components/Product/Product'
import ProductCard from '../../Components/Product/ProductCard'
import {productUrl} from '../../Api/EndPoints'
import Loder from '../../Components/Loder/Loder'
function Results() {
  const [results,setResults]= useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const {categoryName}=useParams()
  useEffect(()=>{
     setIsLoading(true)
      axios.get(`${productUrl}/products/category/${categoryName}`)
      //axios.get(`${productUrl}/products/category/${categoryName}`)
       .then ((res)=>{
        setResults(res.data)
        setIsLoading(false)
  })
      .catch((err)=>{
      console.log(err)
      setIsLoading(false)
  })
  },[])
  
  return (
    <LayOut>
  <section>
    <h1 style={{padding:"30px"}}>Results</h1>
    <p style={{padding:"30px"}}>Category/{categoryName}</p>
    <hr />
    {/*results?..emilew kelay bemetaw data sihone ke eyandandy product ga map adiregen le ProductCard*/}
    {isLoading?(
      <Loder/>
    ):(<div className={classes.products_container}>
      {results?.map((Product)=>(
        //product is an object that contains the product details
        //we are passing the product object to the product card component
        //renderDesc is used to hide the description of the product in the results page
        //renderAdd is used to show the add to cart button in the results page
        //flex is used to make the product card flexed
        //we can use the id of the product as the key because it is unique
        //we are using the ProductCard component to show the product details
        // results is an array that contains the products in the category
        //we are using the map function to iterate over the results array and return a ProductCard component for each product
        <ProductCard
          key={Product.id}
          Product={Product}
          renderDesc={false}
          renderAdd={true}
          />
      ))}
    </div>)}
    
  </section>
    </LayOut>
    
  )
}

export default Results;