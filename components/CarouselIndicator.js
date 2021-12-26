const CarouselIndicator = ({ list, current, setCurrent }) => {
  return (
    <>
      {list.map((item) => {
        if (Number(item) === current) {
          return (
            <li key={item} tabIndex='0' role='button' className='active'>
              {item}
            </li>
          );
        }
        return (
          <li
            key={item}
            tabIndex='0'
            role='button'
            onClick={() => {
              setCurrent((current = Number(item)));
            }}
          >
            {item}
          </li>
        );
      })}
    </>
  );
};

export default CarouselIndicator;
