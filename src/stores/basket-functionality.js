"use client";
import { create } from "zustand";
import { reserveSpot } from "@/app/api";

import { useBasketStore } from "@/stores/basket-stores";

export const useBasketFunctionality = create((set, get) => ({
  bookingStep: 0,

  reservationTime: 5 * 60 * 1000, //reserveringstiden
  startCountdown: (ref, reservationTime) => {
    if (reservationTime <= 0) {
      console.error("Invalid reservationTime: must be greater than 0");
      return;
    }
    ref.current = Date.now(); // Start time is now
    set({}); // Trigger re-render
  },

  setNewStep: (step) => set({ bookingStep: step }),

  //kan slettes
  // setReservedData: (selectedArea, ticketAmount) =>
  //   set(() => ({
  //     reservedData: { selectedArea, ticketAmount },
  //   })),

  // holding area for dataen inden det puttes til api
  // reservedData: {
  //   selectedArea: chosenCamp,
  //   ticketAmount: totalTickets,
  // },

  reserveSpotHandler: async function () {
    try {
      // const { selectedArea, ticketAmount } = get().reservedData; // Hent reservedData
      //Hent de respektive parametre og få deres nuværende og opdaterede state
      const chosenCamp = useBasketStore.getState().chosenCamp;
      const totalTickets = useBasketStore.getState().totalTickets();

      const data = await reserveSpot(chosenCamp, totalTickets);
      const setReserveId = useBasketStore.getState().setReserveId; // Hent state fra andet basket store
      setReserveId(data["id"]);
      console.log("reservationId", data["id"]);
    } catch (error) {
      console.error("fejl", error);
    }
    const setNewStep = useBasketFunctionality.getState().setNewStep;
    const bookingStep = useBasketFunctionality.getState().bookingStep;
    const reservationId = useBasketStore.getState().reservationId;
    if (reservationId === undefined) {
      return alert("Error: reservationId undefined please try another camp");
    } else {
      setNewStep(bookingStep + 1);
    }
  },
}));
