import React, { useState } from 'react';
import './Carousel.module.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={prevImage}>Prev</button>
      <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} style={{ width: '100%' }} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
