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
  setReservedData: (selectedArea, ticketAmount) =>
    set(() => ({
      reservedData: { selectedArea, ticketAmount },
    })),
  //holding area
  reservedData: {
    selectedArea: "",
    ticketAmount: 0,
  },

  reserveSpotHandler: async function () {
    try {
      const { selectedArea, ticketAmount } = get().reservedData; // Access reservedData
      const data = await reserveSpot(selectedArea, ticketAmount);
      const setReserveId = useBasketStore.getState().setReserveId;
      setReserveId(data["id"]);
      console.log("data med id", data["id"]);
    } catch (error) {
      console.error("fejl", error);
    }
  },
}));
