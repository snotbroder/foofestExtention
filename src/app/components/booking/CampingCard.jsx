"use client";

import { reserveSpot } from "@/app/api";
import { useBasketFunctionality } from "@/stores/basket-functionality";

import { useBasketStore } from "@/stores/basket-stores";

function CampingCard({ area, space, info }) {
  const chosenCamp = useBasketStore((state) => state.chosenCamp);
  const setChosenCamp = useBasketStore((state) => state.setChosenCamp);
  const setReserveId = useBasketStore((state) => state.setReserveId);
  const totalTickets = useBasketStore((state) => state.totalTickets());
  const startCountDown = useBasketFunctionality(
    (state) => state.startCountDown
  );

  //hent reservationsID
  const reservationId = useBasketStore((state) => state.reservationId);

  async function reserveSpotHandler(selectedArea, ticketAmount) {
    try {
      const data = await reserveSpot(selectedArea, ticketAmount);
      setReserveId(data["id"]);
    } catch (error) {}
  }

  return (
    <div
      onClick={() => {
        if (totalTickets > space) {
          alert("Too many tickets in order than space in desired camp");
          // consol logger at error ikke er defineret, men ellers aktiverer selected stylingen :(
          setChosenCamp(error);
          reserveSpotHandler(error);
        }
        if (space === 0) {
          alert("There is no availability at desired camp");
          setChosenCamp(error);
          reserveSpotHandler(error);
        }
        if (area === chosenCamp) {
          alert("already have a spot in this camp");
        } else {
          setChosenCamp(area);
          reserveSpotHandler(area, totalTickets);
        }
      }}
      className={` ${
        chosenCamp === area
          ? "bg-main-2 border-solid border-main-1 border-2 after:bg-transparent"
          : "bg-primary"
      } flex flex-col p-6 w-48 h-36 cursor-pointer after:bg-main-1 relative after:absolute after:top-0 after:left-0 after:-z-10 after:content-[''] after:w-full after:h-full after:ml-1 after:mt-1 hover:after:mt-0 hover:after:ml-0 after:transition-all after:duration-75 hover:outline-1 hover:outline-main-1 hover:text-main-1 hover:transition-all `}
    >
      <h3>{area}</h3>
      <p>{info}</p>
      <h4
        className={`font-rethink  ${
          space === 0 ? "text-feedback-error" : "text-main-1"
        }`}
      >
        {space} spaces available
      </h4>
      {totalTickets > space && (
        <p className="small text-feedback-error">
          Your order has too many tickets
        </p>
      )}
    </div>
  );
}

export default CampingCard;
