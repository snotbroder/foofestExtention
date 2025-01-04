"use client";

import { useState, useRef, useEffect } from "react";
import { RiAddLine } from "react-icons/ri";
import { useBasketStore } from "@/stores/basket-stores";
import { useBasketFunctionality } from "@/stores/basket-functionality";
import Countdown from "react-countdown";
import { redirect } from "next/navigation";

function Basket() {
  //Toggle button for mobile
  const [openBasket, setOpenBasket] = useState(false);
  function handleOpenBasket() {
    setOpenBasket((prevState) => !prevState);
  }

  const reservationId = useBasketStore((state) => state.reservationId);
  const ticketInfo = useBasketStore((state) => state.ticketInfo);
  const campInfo = useBasketStore((state) => state.campInfo);
  const chosenCamp = useBasketStore((state) => state.chosenCamp);
  const greenCamping = useBasketStore((state) => state.greenCamping);

  //Resetable variables
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  const setChosenCamp = useBasketStore((state) => state.setChosenCamp);
  //Tjek om greencamping er true i basket store
  let greenCampingTrue = 0;
  if (greenCamping === true) {
    greenCampingTrue = 249;
  }
  //fundet hjælp herfra med for https://bito.ai/resources/javascript-calculate-total-price-javascript-explained/
  const reservationFee = 99;
  const ticketTotal = ticketInfo.reduce(
    (total, ticket) => total + ticket.itemPrice * ticket.itemMultiply,
    0
  );

  const campTotal = campInfo.reduce(
    (total, camp) => total + camp.itemPrice * camp.itemMultiply,
    0
  );
  const totalPrice =
    ticketTotal + campTotal + reservationFee + greenCampingTrue;

  function sessionInvalid() {
    setNewStep(0);
    setChosenCamp("");
    redirect("/session-invalid");
  }
  //Hent reservertionstiden fra zustand store, og startCountDown functionen

  //fallback for reservationtime
  const { reservationTime = 10000 } = useBasketFunctionality();
  const { startCountdown } = useBasketFunctionality();
  const startTimeRef = useRef(Date.now());

  //Når komponenten renderes, start
  useEffect(() => {
    startCountdown(startTimeRef);
    //hvis startTime ikke er noget, så set den til date.now
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
    }
  }, []); // kør kun en gang

  //initialize ref state, en state der gemmes
  const timeLeftRef = useRef("00:00");

  //renderingen
  const renderer = ({ minutes, seconds }) => {
    //få tiden til at se anderledes ud
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
    timeLeftRef.current = formattedTime; // Update time-left
    return (
      <span className="bg-secondary p-2 px-3 rounded-rounded-reg text-main-2 font-semibold">
        {formattedTime}
      </span>
    );
  };

  const errorCamp = false;
  const errorTents = false;

  //den gemte tid plus hvad den gemte tid/timeout er i zustand store
  const countdownDate = startTimeRef.current + reservationTime;
  //debug hvis countdown er forkert
  if (countdownDate <= Date.now()) {
    console.error("Countdown date is invalid or in the past:", countdownDate);
  }
  return (
    <div>
      <section className="fixed shadow-[-1px_-9px_56px_-13px_rgba(0,0,0,0.50)] md:shadow-none lg:shadow-none max-h-max -mx-mobile row-span-1 row-start-1 col-start-2 lg:mx-0 lg:relative    bottom-0 after:text-main-2  w-full bg-main-2 border-y-2 lg:border-2 border-main-1 border-solid p-8 rounded-rounded-reg z-50 ">
        <article className="font-rethink place-self-end">
          <Countdown
            onComplete={sessionInvalid}
            date={countdownDate}
            renderer={renderer}
          />
        </article>{" "}
        <div className={`${openBasket ? "block" : "hidden"} lg:block`}>
          <h2>Basket</h2>
          <article className="flex flex-col gap-2 my-6">
            <p className=" small py-1 border-b-[1px] border-tertiary border-solid  font-semibold w-max">
              Tickets
            </p>
            {
              //Tjek on nogen af billetterne har itemMultiply value 0, så vis det her
              ticketInfo.every((ticket) => ticket.itemMultiply === 0) && (
                <p className=" small text-feedback-error">
                  Please choose a ticket
                </p>
              )
            }

            {ticketInfo //Sørg for kun at loope gennem billetter der er med i beregningen, altså har en itemMultiply value over 0
              .filter((ticket) => ticket.itemMultiply > 0)
              .map((ticket, index) => {
                return (
                  <BasketItem
                    key={index}
                    itemTitle={ticket.itemTitle}
                    itemMultiply={ticket.itemMultiply}
                    itemPrice={ticket.itemPrice}
                  ></BasketItem>
                );
              })}
          </article>

          <article className="flex flex-col gap-2 my-6">
            <p className=" small py-1 border-b-[1px] border-tertiary border-solid font-semibold w-max">
              Camp
            </p>

            <h4>
              Selected camp:{" "}
              <span className="font-normal">
                {chosenCamp}{" "}
                {chosenCamp === "" && (
                  <p className=" small text-feedback-error ">
                    {" "}
                    Please choose a camp
                  </p>
                )}
              </span>
            </h4>
            {campInfo
              .filter((camp) => camp.itemMultiply > 0)
              .map((camp, index) => {
                return (
                  <BasketItem
                    key={index}
                    itemTitle={camp.itemTitle}
                    itemMultiply={camp.itemMultiply}
                    itemPrice={camp.itemPrice}
                  ></BasketItem>
                );
              })}
            {greenCamping === true && (
              <BasketItem
                itemTitle="Green camping"
                itemMultiply="1"
                itemPrice="249"
              ></BasketItem>
            )}
          </article>

          <article className="font-rethink text-main-1 border-b-2 border-b-tertiary border-b-solid pb-2 my-1 mb-4 flex justify-between">
            <h4>Reservation fee</h4>
            <h4 className="">99,-</h4>
          </article>
        </div>
        <footer className="font-rethink text-main-1">
          <span className="font-rethink text-main-1 flex justify-between mb-2">
            <span>TOTAL</span>
            <span className="font-bold text-4xl my-2">{totalPrice},-</span>
          </span>
          {reservationId !== "" ? (
            <p className="small text-feedback-disabled-2">
              ReservationID: {reservationId}
            </p>
          ) : (
            ""
          )}
          <div className="font-rethink text-xs text-feedback-error text-end">
            {errorCamp && "Please choose a camp to continue"}
            {errorTents &&
              "You can only buy tents based on the amount of tickets "}
          </div>
          <button onClick={handleOpenBasket} className="button lg:hidden">
            {openBasket ? "close " : "open "}
            cart
          </button>
        </footer>
      </section>
    </div>
  );
}

export default Basket;

export function BasketItem({ itemTitle, itemMultiply, itemPrice }) {
  return (
    <div className="border-b-2 border-b-tertiary border-b-solid my-1 pb-2 flex justify-between">
      <div className="flex justify-between place-items-center">
        <h4 className={`${itemMultiply === 0 ? "hidden" : ""} font-bold`}>
          {itemMultiply}
        </h4>
        <RiAddLine className="origin-center rotate-45" />
        <h4 className="uppercase ">{itemTitle}</h4>
      </div>
      <h4>
        {itemPrice}
        {itemPrice === "" ? "" : ",-"}
      </h4>
    </div>
  );
}
