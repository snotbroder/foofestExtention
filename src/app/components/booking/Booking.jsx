"use client";
import { useState } from "react";

import BookingSteps from "./BookingSteps";
import Basket from "./Basket";
import TicketSelectParent from "./TicketSelectParent";
import CampingPage from "./CampingPage";
import CampingExtra from "./CampingExtras";
import ContactPage from "./ContactPage";
import PaymentInfo from "./PaymentInfo";

export default function Booking({ sendData, data }) {
  const [step, setStep] = useState(0);
  const [selectedCamping, setSelectedCamping] = useState("");
  const [basketTickets, setBasketTickets] = useState([]);
  const [basketCamp, setBasketCamp] = useState([]);

  //Bare for at visualisere den samlede data:
  const basketArray = [
    { "ticket info": basketTickets },
    { "choosen camp": selectedCamping, "camp info": basketCamp },
  ];

  function stepHandler(newStep) {
    if (newStep <= step) {
      setStep(newStep);
    }
  }

  //Håndter ændringer fra komponenter, og send til basket
  function handleTicketUpdate(updatedTickets) {
    setBasketTickets(updatedTickets);
  }
  function handleCampUpdate(updatedCamp) {
    setBasketCamp(updatedCamp);
  }

  //
  return (
    <>
      <p>
        step is <span className="font-bold text-red-600">{step}</span>
      </p>
      <button
        className="border-main-1 border-2"
        onClick={() => {
          setStep((prevState) => prevState - 1);
        }}
      >
        step -1
      </button>
      <button
        className="border-main-1 border-2"
        onClick={() => {
          setStep((prevState) => prevState + 1);
        }}
      >
        step +1
      </button>
      <BookingSteps stepHandler={stepHandler} step={step}></BookingSteps>
      <h1 className=" mb-3">
        {step === 0 && "Select Ticket Type"}
        {step === 1 && "Select Camp"}
        {step === 2 && "Guest Information"}
        {step === 3 && "Payment Information"}
        {step === 4 && "Booking Overview"}
      </h1>
      <section className="lg:grid grid-cols-[2fr_1fr] grid-rows-1 gap-4 ">
        {step === 0 && (
          <article>
            <TicketSelectParent
              onBasketUpdate={handleTicketUpdate}
            ></TicketSelectParent>

            <button className="button grid place-self-center lg:place-self-end">
              Next step
            </button>
          </article>
        )}
        {step === 1 && (
          <article>
            <section className="lg:grid grid-cols-2">
              <CampingPage
                regularTickets={basketTickets[0].itemMultiply}
                vipTickets={basketTickets[1].itemMultiply}
                selectedCamping={selectedCamping}
                setSelectedCamping={setSelectedCamping}
              ></CampingPage>
              <CampingExtra
                regularTickets={basketTickets[0].itemMultiply}
                vipTickets={basketTickets[1].itemMultiply}
                onBasketUpdate={handleCampUpdate}
              ></CampingExtra>
            </section>
            <button className="button grid place-self-center lg:place-self-end">
              Next step
            </button>
          </article>
        )}
        {step === 2 && (
          <article className="bg-primary rounded-rounded-reg p-10">
            <ContactPage basketTickets={basketTickets}></ContactPage>
          </article>
        )}
        {step === 3 && (
          <article className="bg-primary rounded-rounded-reg p-10">
            <PaymentInfo />
          </article>
        )}
        {step === 4 && <article></article>}
        <Basket
          selectedCamping={selectedCamping}
          basketCamp={basketCamp}
          basketTickets={basketTickets}
        ></Basket>
      </section>
      <pre>
        Data as JSON
        {/* {JSON.stringify(basketTickets, null, 2)}
        {JSON.stringify(selectedCamping, null, 2)} */}
        {JSON.stringify(basketArray, null, 2)}
      </pre>
    </>
  );
}
