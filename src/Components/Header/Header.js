import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LowerHeader from './LowerHeader';
import classes from "./Header.module.css"
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
function Header() {
    //dispatch is a function you use to send an action to your reducer to update the state.
   const [{basket},dispatch]= useContext(DataContext)
   const totalItem= basket?.reduce((amount,item)=>{
    return item.amount + amount
   },0)
   //basket is an array that contains the items in the cart
   //we can use basket.length to get the number of items in the cart
   //useContext is a hook that allows you to access the context value
   //DataContext is the context we created in DataProvider.js
   //DataProvider is a component that provides the context value to its children
   //context value ia an array that contains the state and dispatch function
   //state is the current satate of the context
   //reducer is a function that takes the current state and an action and returns a new state
   //dispatch is a function that takes an action and sends it to the reducer to update the sate
   console.log(basket.length)
  return (
    //"fixed" wana tikemua headerachen hide endayihone new lelochen scrol sinaderge..css lay ajust adirgenatal 
    <section className={classes.fixed}>
        <section>
            <div className={classes.header_container}>
                {/*logo section */}
                <div className={classes.logo_container}>
                    <Link to='/'>
                        <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
                    </Link>
                    <div className={classes.delivery}>
                        <span>
                            <LocationOnIcon />
                        </span>
                        <div >
                            <p>Deliver to</p>
                            <span>Ethiopia</span>
                        </div>
                    </div>
                </div>
                {/*search section */}
                <div className={classes.search}>
                    <section name="" id="">
                        <option value="">All</option>
                    </section>
                    <input type='text' />
                    <SearchIcon size={25} />
                </div>
                {/*other section*/}
                <div className={classes.order_container}>
                    <Link to='/EN' className={classes.language}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1024px-Flag_of_the_United_States.png' alt=''/>
                        <select name="" id= "">
                            <option value="">EN</option>
                        </select>
                    </Link>
                    <Link to='/Sign In-and-Account & Lists'>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </Link>
                    <Link to="/orders">
                        <p>returns</p>
                        <span>&orders</span>
                    </Link>
                    <Link to='/cart' className={classes.cart}>
                        <ShoppingCartIcon size={35} />
                        <span>{totalItem}</span>
                    </Link>
                </div>
            </div>
        </section>
        <LowerHeader />
    </section>
  );
};

export default Header;