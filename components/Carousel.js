import React from "react";
import CarouselImage from "./CarouselImage";

const Carousel = () => {
  const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <section className='carousel'>
      <span className='badge bg-dark txt-light size-5'>slide N°10</span>
      <CarouselImage items={items} />
      <div className='carousel__controls'>
        <button className='carousel__prev--disabled'>&lt;</button>
        <button className='carousel__next'>&gt;</button>
      </div>
      <ul className='carousel__indicators'></ul>
    </section>
  );
};

export default Carousel;
