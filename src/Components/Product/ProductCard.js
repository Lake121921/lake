import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
function ProductCard({Product={},flex,renderDesc,renderAdd}) {
  const {image, title, id, rating={}, price,description}=Product;
 const [state,dispatch]= useContext(DataContext)
 console.log(state)
 const addToCart=()=>{
  //flex is used to check if we want to make the product card flexed or not
  //renderDesc is used to check if we want to render the description of the product or not
  //renderAdd is used to check if we want to render the add to cart button or not
  //type is the action type that we are going to use in the reducer to update the state
  //item is the item that we are going to add to the cart
  //we are using spread operator to copy the existing state and add the new item to the basket
  dispatch({
    type:Type.ADD_TO_BASKET,
    item:{image, title, id, rating, price,description
    }
  })
 }
  console.log(Product)
  return (
    <div className={`${classes.card_container} ${flex ? classes.Product_flexed: ''}`}>
      {/*for detail update */}
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container}/>
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth: "500px"}}>{description}</div>}
        <div className={classes.rating}>
          {/*rating */}
          <Rating value={rating} precision={0.1} />
          {/*count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/*price */}
          <CurrencyFormat amount={price} />
        </div>
        
        {//renderAdd is used to check if we want to render the add to cart button or not
        //if renderAdd is true then we will render the add to cart button
          renderAdd && <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
        }
        
      </div>
    </div>
  )
}

export default ProductCard