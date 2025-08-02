import React from 'react'
import { Carousel } from 'react-responsive-carousel'//we have to come it from doc. and install it
import {img} from "./img/Data"
import classes from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader..used to align properly and style implement ..is comes from doc.

function CarouselEffect() {
  return (
    <div>
<Carousel 
   autoPlay={true}//image will be atutomatically play
   infiniteLoop={true}// endayakome ..reloop eyadereg enidichawet
   showIndicators={true}// dot dot mechersha lay alu enesun one and off lemadereg
   showThumbs={true}//imageu list via horizontal mecheresha betinesh betineshu eniditayu or endayitayu
>
    

    {
        img.map((imageItemLink)=>{
            return <img src={imageItemLink}/>
        })//map the image from the data
    }
</Carousel>
    </div>
  )
}

export default CarouselEffect;