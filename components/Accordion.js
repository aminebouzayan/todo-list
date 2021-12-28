import { useState } from "react";
import { data } from "./dependencies/AccordionData";
import AccordionPanel from "./dependencies/AccordionPanel";

const Accordion = () => {
  const [items] = useState(data);
  return (
    <section className='accordion'>
      {items.map((item) => {
        return <AccordionPanel key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Accordion;
