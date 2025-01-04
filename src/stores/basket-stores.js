"use client";
import { create } from "zustand";

export const useBasketStore = create((set, get) => ({
  ticketInfo: [
    { itemTitle: "regular ticket", itemMultiply: 0, itemPrice: 799 },
    { itemTitle: "vip ticket", itemMultiply: 0, itemPrice: 1299 },
  ],
  chosenCamp: "",
  reservationId: "",
  greenCamping: false,

  campInfo: [
    { itemTitle: "two person tent", itemMultiply: 0, itemPrice: 299 },
    { itemTitle: "three person tent", itemMultiply: 0, itemPrice: 399 },
  ],

  //funktioner der bliver kaldt. De sørger for at opdatere dataen korrekt .
  updateTicketMultiply: (ticketType, multiply) =>
    set((state) => ({
      ticketInfo: state.ticketInfo.map((ticket) => (ticket.itemTitle === ticketType ? { ...ticket, itemMultiply: multiply } : ticket)),
    })),
  updateTentMultiply: (tentType, multiply) =>
    set((state) => ({
      campInfo: state.campInfo.map((tent) => (tent.itemTitle === tentType ? { ...tent, itemMultiply: multiply } : tent)),
    })),

  // jeg bruger reduce for at reducere arrayet til en enkel værdi. 0 er initial value
  totalTickets: () => {
    const { ticketInfo } = get(); // hent nuværende data
    return ticketInfo.reduce((total, ticket) => total + ticket.itemMultiply, 0);
  },
  //opdater valgt camp state
  setChosenCamp: (area) => set({ chosenCamp: area }),
  setReserveId: (id) => set({ reservationId: id }),
  toggleGreenCamping: () => set((state) => ({ greenCamping: !state.greenCamping })),
}));
