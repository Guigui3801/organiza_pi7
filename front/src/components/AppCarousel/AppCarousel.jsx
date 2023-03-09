import React from 'react';
import { Carousel } from 'antd';
import './AppCarousel.styles.scss';

const AppCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" autoplay>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/600x400/000000/FFFFFF" alt="Carousel Item 1" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/600x400/333333/FFFFFF" alt="Carousel Item 2" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/600x400/666666/FFFFFF" alt="Carousel Item 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default AppCarousel;
