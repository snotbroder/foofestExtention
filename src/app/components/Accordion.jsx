import AccordionBox from "./AccordionBox";

function Accordion() {
  return (
    <article className="">
      <div className="  bg-primary mt-6 p-6 md:p-12 flex flex-col text-main-1 rounded-rounded-reg -mr-mobile -ml-mobile md:mx-auto md:max-w-2xl">
        <h3 className=" border-b-[1.5px] border-tertiary  ">FAQ</h3>
        <div className="flex flex-col">
          <AccordionBox question="Can i get refund on my ticket?" answer="Yes, ticket refunds are available if requested at least 48 hours before the event. Please contact our customer service team with your ticket ID for processing." />
          <AccordionBox question="What do I do in case of an emergency?" answer="In case of an emergency, locate the nearest event staff or security personnel. Emergency assistance stations are also marked on the event map." />
          <AccordionBox question="What do I do if I loose something?" answer="Please visit the Lost and Found section at the main entrance. Alternatively, you can contact our support team after the event via email with a description of the lost item." />
          <AccordionBox question="How do I become a volunteer?" answer="To become a volunteer, complete our online volunteer application form and attend the mandatory orientation session. Check our website for upcoming volunteer opportunities." />
          <AccordionBox question="Where can I listen to music?" answer="Music performances are held at the main stage area, which is marked on the event map. Additional performances can be found in the acoustic garden and DJ pavilion." />
          <AccordionBox question="What are the options for camping sites?" answer="Camping sites are available near the event grounds. We offer standard, premium, and family-friendly zones. Visit our website for reservations and details." />
        </div>
      </div>
    </article>
  );
}

export default Accordion;
