import React from 'react'
import {CategoryInfos} from './CategoryFull'
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'
function Category() {
  return (
  
         <section className={classes.Cat_container}>
                  {
                    CategoryInfos.map((infos)=>(
                        <CategoryCard data={infos}/>
                    ))
                  }
                </section>
  )
}

export default Category;