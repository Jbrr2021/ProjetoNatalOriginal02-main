import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CustomCarousel() {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      <div>
        <img src="/1.png" />
        
      </div>
      <div>
        <img src="/2.png" />
        
      </div>
      <div>
        <img src="/3.png" />
        
      </div>
    </Carousel>
  );
}

export default CustomCarousel;
