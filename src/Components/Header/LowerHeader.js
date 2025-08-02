import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import classes from "./Header.module.css"
function LowerHeader() {
  return (
    <div className={classes.lower_container}>
        <ul>
            <li>
                <MenuOutlinedIcon />
                <p>All</p>
            </li>
            <li>Todays Deals</li>
            <li>customer service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader