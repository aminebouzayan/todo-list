import React, { useState, useEffect } from "react";
import CarouselImage from "./CarouselImage";
import CarouselIndicator from "./CarouselIndicator";

const Carousel = () => {
  const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [index, setIndex] = useState(1);
  useEffect(() => {
    setInterval(() => {
      if (index === items.length) {
        setIndex((index = 0));
      }
      setIndex((index += 1));
    }, 3e3);
  }, []);

  const previousSlide = () => {
    if (index === 1) {
      setIndex((index = items.length + 1));
    }
    setIndex((index -= 1));
  };

  const nextSlide = () => {
    if (index === items.length) {
      setIndex((index = 0));
    }
    setIndex((index += 1));
  };

  // const checkSlide = () => {};

  return (
    <section className='carousel'>
      <span className='badge bg-dark txt-light size-5'>slide N°{index}</span>
      <CarouselImage paths={items} currentSlide={index} />
      <div className='carousel__controls'>
        <button className='carousel__prev' onClick={previousSlide}>
          &lt;
        </button>
        <button className='carousel__next' onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <ul className='carousel__indicators'>
        <CarouselIndicator
          items={items}
          current={index}
          setCurrent={setIndex}
        />
      </ul>
    </section>
  );
};

export default Carousel;
