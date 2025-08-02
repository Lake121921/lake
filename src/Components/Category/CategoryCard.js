import React from 'react'
import classes from './Category.module.css'
import { Link } from 'react-router-dom';
function CategoryCard({data}) {// destructuring here
  return (
    <div className={classes.Cat}>
        {/*dayanamic roue emigegnew data wesite silehone new */}
        <Link to={`/category/${data.name}`}>
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imgLink} alt=''/>
            <p>shop now</p>
        </Link>
    </div>
  )
}

export default CategoryCard;