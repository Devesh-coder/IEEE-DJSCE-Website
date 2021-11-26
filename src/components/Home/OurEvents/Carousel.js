import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img from "./dummy.jpg"

const CarouselComp = () => {
  return (
    <Carousel autoPlay>
        <div>
            <img alt="download" src={img} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="download" src={img} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="download" src={img} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="download" src={img} />
            <p className="legend">Legend 4</p>
        </div>
    </Carousel>
  )
}; 

export default CarouselComp;