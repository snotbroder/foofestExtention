"use client";

import TicketSelectCard from "./TicketSelectCard";
import { useBasketStore } from "@/stores/basket-stores";
import { useBasketFunctionality } from "@/stores/basket-functionality";
import { useState } from "react";

function TicketSelectParent() {
  //Multiply funktion i store som sørger for at opdatere dataen korrekt/de rigtige steder i arrayet
  const updateTicketMultiply = useBasketStore(
    (state) => state.updateTicketMultiply
  );

  const handleUpdate = (ticketType, newAmount) => {
    // opdater ticketAmount i basket store baseret på den ticketType følger med
    updateTicketMultiply(ticketType, newAmount);
  };

  //benyt funktionen i store, som koger begge billettyper ned til én værdi
  const totalTickets = useBasketStore((state) => state.totalTickets());
  const step = useBasketFunctionality((step) => step.bookingStep);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);

  const vipTicket = useBasketStore((state) => {
    const vipTicket = state.ticketInfo.find(
      (item) => item.itemTitle === "vip ticket"
    );
    return vipTicket.itemMultiply;
  });

  const regularTicket = useBasketStore((state) => {
    const regularTicket = state.ticketInfo.find(
      (item) => item.itemTitle === "regular ticket"
    );
    return regularTicket.itemMultiply;
  });

  return (
    <>
      <TicketSelectCard
        storedValue={vipTicket}
        onAmountChange={(amount) => handleUpdate("vip ticket", amount)}
        ticketName="VIP TICKET"
        variant="vip"
        variantImage="vip-image"
        price="1299"
        subText="Best Offer"
      ></TicketSelectCard>

      <TicketSelectCard
        storedValue={regularTicket}
        onAmountChange={(amount) => handleUpdate("regular ticket", amount)}
        ticketName="REGULAR TICKET"
        variant="regular"
        variantImage="regular-image"
        price="799"
      ></TicketSelectCard>
      <button
        onClick={() => {
          if (totalTickets === 0) {
            return;
          } else setNewStep(step + 1);
        }}
        className={`button  grid place-self-center lg:place-self-end ${
          totalTickets === 0 ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        Next step
      </button>
    </>
  );
}

export default TicketSelectParent;
