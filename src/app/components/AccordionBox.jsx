"use client";
import { useState } from "react";

import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

useState;
function AccordionBox({ question, answer }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <section className="flex flex-col py-4 justify-between- cursor-pointer border-b-[1.5px] border-tertiary " onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
      <div className="flex justify-between">
        <h4>{question}</h4>
        {isAccordionOpen ? <FiMinus size="1.2rem" /> : <GoPlus size="1.2rem" />}
      </div>
      <div className={`transition-all duration-200 ease-in-out ${isAccordionOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
        <p className="text-sm mt-2">{answer}</p>
      </div>
    </section>
  );
}

export default AccordionBox;
