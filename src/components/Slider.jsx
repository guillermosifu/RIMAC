import { useState } from 'react' 

export const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      {images?.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          {index === currentIndex && <img src={image} alt={`Slide ${index}`} />}
        </div>
      ))}
      <button className="next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};