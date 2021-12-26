// import Image from "next/image";
const CarouselImage = ({ paths, current }) => {
  return (
    <>
      {paths.map((path) => {
        if (Number(path) === current) {
          return (
            <img
              key={path}
              src={`/images/${path}.jpg`}
              alt='slide'
              className='carousel__img--active'
              // layout='fill'
              // placeholder='blur'
              // blurDataURL={`/images/${path}.jpg`}
            />
          );
        }
        return (
          <img
            key={path}
            src={`/images/${path}.jpg`}
            alt='slide'
            className='carousel__img'
          />
        );
      })}
    </>
  );
};

export default CarouselImage;
