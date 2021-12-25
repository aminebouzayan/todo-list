import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (index === items.length) {
        setIndex((index = 0));
      }
      setIndex((index += 1));
    }, 3e3);
    return () => clearInterval(timerId);
  }, [index]);

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

  return (
    <AppContext.Provider
      value={{ items, index, setIndex, previousSlide, nextSlide }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
