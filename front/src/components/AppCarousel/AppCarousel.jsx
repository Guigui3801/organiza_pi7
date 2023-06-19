import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./AppCarousel.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../images/1R.png";
import img2 from "../../images/2R.png";
import img3 from "../../images/3R.png";

const AppCarousel = () => {
  return (
    <div className="wrapper-carousel">
      <Carousel
        className="carousel"
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        
      >
        <div>
          <img src={img1} alt="Item1" />
        </div>
        <div>
          <img src={img2} alt="Item1" />
        </div>
        <div>
          <img src={img3} alt="Item1" />
        </div>
      </Carousel>
    </div>
  );
};

export default AppCarousel;
