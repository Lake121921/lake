import React from 'react'
import { useContext } from 'react'
import classes from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import { Type } from '../../Utility/action.type'
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
function Cart() {
  const [{basket,user},dispatch]= useContext(DataContext)
  const total= basket.reduce((amount,item)=>{
   return item.price*item.amount + amount
  },0)
  const increment=(item)=>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
      //item in this case is the product that we are going to add to the cart
    })
  }
  const decrement=(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <LayOut>
     <section className={classes.container}>
       <div className={classes.cart_container}>
        <h2>Hello</h2>
           <h3>Your Shopping Basket</h3>
           <hr />
           {
           // if basket is empty the show this meaasagn else map the basket and show the item
           // basket?.length is used to vheck if basket is not null or undefiend
           //we have to use product card to show the item in the basket because it has the same structure as the product card
           //renderDesc is used to show the description of the product in the cart
           //renderAdd is used to hide the add to cart button in the cart
           //flex is used to make the product card flexed
           // we can use the index because the basket is not  going to change
            basket?.length==0?(<p> opps! no item in your cart</p>):(
              basket?.map((item,i)=>{
                return<section className={classes.cart_product}>                 <ProductCard
                  key={i}
                  Product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}

                />
                <div className={classes.btn_container}>
                  <button className={classes.btn} onClick={()=>increment(item)}>
<KeyboardArrowUpSharpIcon size={30}/>
                  </button>
                  <span>{item.amount}</span>
                  <button className={classes.btn} onClick={()=>decrement(item.id)}>
<KeyboardArrowDownSharpIcon size={30}/>
                  </button>
                </div>
                </section>
              })
            )
           }
       </div>
       {basket?.length !==0 &&(
         <div className={classes.subtotal}>
           <div>
            <p>SubTotal({basket?.length} item)</p>
            <CurrencyFormat amount={total}/>
            {/*total is the total price of the items in the cart*/}
           </div>
           <span>
            <input type='checkbox'/>
            <small>This order contains a gift</small>
           </span>
           <Link to="/payments">Continue to checkout</Link>
       </div>
       )}
       
     </section>
    </LayOut>
    
  )
}

export default Cart