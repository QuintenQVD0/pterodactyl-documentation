import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slideshow.css'; // Import the CSS file for custom styling

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the duration (in milliseconds) between each slide here

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
      <h2 className="slideshow-heading">Screenshots</h2>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={3000} // Adjust the duration (in milliseconds) between each slide here
        selectedItem={currentImageIndex}
        onChange={(index) => setCurrentImageIndex(index)}
        transitionTime={0} // Set the transition time to 0 for an instant transition
        infiniteLoop={true} // Enable infinite loop
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="slideshow-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
