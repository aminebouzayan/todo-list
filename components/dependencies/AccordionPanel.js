import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const AccordionPanel = (item) => {
  const { title, content } = item;
  const [showContent, setShowContent] = useState(false);
  return (
    <div
      className={`accordion__panel accordion__panel--${
        showContent === false ? `collapsed` : `expanded`
      }`}
    >
      <h3 className='panel__title'>{title}</h3>
      <p className='panel__content'>{content}</p>
      <button
        className='btn btn--circular'
        onClick={() => setShowContent(!showContent)}
      >
        <span>
          {showContent === false ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </span>
      </button>
    </div>
  );
};

export default AccordionPanel;
