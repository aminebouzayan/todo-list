const CarouselImage = ({ items }) => {
  return (
    <>
      {items.map((path) => {
        if (path === "10") {
          return (
            <img
              key={path}
              src={`/images/${path}.jpg`}
              alt='slide'
              className='carousel__img--active'
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

export default Carouse