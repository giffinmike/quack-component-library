import React, { useState } from 'react';
import './Carousel.module.css';
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: prevImage }, "Prev"),
        React.createElement("img", { src: images[currentIndex], alt: `carousel-${currentIndex}`, style: { width: '100%' } }),
        React.createElement("button", { onClick: nextImage }, "Next")));
};
export default Carousel;
//# sourceMappingURL=Carousel.js.map