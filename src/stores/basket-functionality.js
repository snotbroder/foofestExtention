"use client";
import { create } from "zustand";

export const useBasketFunctionality = create((set) => ({
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
}));
