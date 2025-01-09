"use client";
import { useBasketStore } from "@/stores/basket-stores";

import BookingSteps from "../components/booking/BookingSteps";
import Basket from "../components/booking/Basket";
import TicketSelectParent from "../components/booking/TicketSelectParent";
import CampingCards from "../components/booking/CampingCards";
import CampingExtra from "../components/booking/CampingExtras";
import ContactPage from "../components/booking/ContactPage";
import PaymentInfo from "../components/booking/PaymentInfo";
import { useBasketFunctionality } from "@/stores/basket-functionality";
import OverviewPage from "../components/booking/OverviewPage";
import CtaButton from "../components/CtaButton";
import Accordion from "../components/Accordion";
import Image from "next/image";
import { motion } from "motion/react";
export default function BookingPage() {
  const fullBasket = useBasketStore((state) => state);
  const step = useBasketFunctionality((step) => step.bookingStep);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  return (
    <>
      <h1 className="  mb-3">
        {step === 0 && "Select Ticket Type"}
        {step === 1 && "Select Camp"}
        {step === 2 && "Guest Information"}
        {step === 3 && "Payment Information"}
        {step === 4 && "Booking Overview"}
      </h1>
      {step < 5 && <BookingSteps></BookingSteps>}

      <section className="lg:grid grid-cols-[2fr_1fr] grid-rows-1 gap-4 ">
        {step === 0 && (
          <article>
            <TicketSelectParent></TicketSelectParent>
          </article>
        )}
        {step === 1 && (
          <article>
            <section className="lg:grid grid-cols-2">
              <CampingCards />
              <CampingExtra></CampingExtra>
            </section>
          </article>
        )}
        {step === 2 && (
          <article>
            <ContactPage></ContactPage>
          </article>
        )}
        {step === 3 && (
          <article className="bg-primary rounded-rounded-reg p-10">
            <PaymentInfo />
          </article>
        )}
        {step === 4 && (
          <article className="-order-1">
            <OverviewPage></OverviewPage>
          </article>
        )}
        {step === 5 && (
          <article className="col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr]">
              <div>
                <h1>Booking completed</h1>
                <h2 className="mb-6">Thank you for your order, we will see you in the summer!</h2>
                <CtaButton href={"/"} text="Back to home"></CtaButton>
              </div>
              <motion.div
                whileInView={{ scale: 1.3, rotate: 360 }}
                initial={{ scale: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="place-self-center hidden sm:block"
              >
                <Image src="/illustrations/svg/spiralPink.svg" width={200} height={200} alt="pink spiral" />
              </motion.div>
            </div>
            <section className="mt-16 pt-6 border-t-2 border-tertiary">
              <Accordion></Accordion>
            </section>
          </article>
        )}
        {step < 5 ? <Basket></Basket> : ""}
      </section>
    </>
  );
}
