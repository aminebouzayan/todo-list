import { useContext } from "react";
import CarouselImage from "./dependencies/CarouselImage";
import { AppContext } from "./dependencies/CarouselContext";
import CarouselIndicator from "./dependencies/CarouselIndicator";

const Carousel = () => {
  const { items, index, setIndex, previousSlide, nextSlide } =
    useContext(AppContext);

  return (
    <section className='carousel'>
      <span className='badge bg-dark txt-light size-5'>slide N°{index}</span>
      <CarouselImage paths={items} current={index} />
      <div className='carousel__controls'>
        <button className='carousel__prev' onClick={previousSlide}>&lt;</button>
        <button className='carousel__next' onClick={nextSlide}>&gt;</button>
      </div>
      <ul className='carousel__indicators'>
        <CarouselIndicator list={items} current={index} setCurrent={setIndex} />
      </ul>
    </section>
  );
};

export default Carousel;
