"use client";
import { fulfillReservation } from "@/app/api";
import { useBasketStore } from "@/stores/basket-stores";
import { useBasketFunctionality } from "@/stores/basket-functionality";
import CtaButton from "../CtaButton";
function OverviewPage() {
  const reservationId = useBasketStore((state) => state.reservationId);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  const greenCamping = useBasketStore((state) => state.greenCamping);
  const step = useBasketFunctionality((step) => step.bookingStep);

  const ticketInfo = useBasketStore((state) => state.ticketInfo);
  const campInfo = useBasketStore((state) => state.campInfo);

  let greenCampingTrue = 0;
  if (greenCamping === true) {
    greenCampingTrue = 249;
  }
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
  async function fulfillReservationHandler() {
    try {
      const data = await fulfillReservation(reservationId);

      if (data["message"] === "Reservation completed") {
        setNewStep(step + 1);
      }
      if (data["message"] === "ID not found") {
        alert("Session invalid, retry booking");
      }
    } catch (error) {
      alert("Session invalid");
    }
  }

  return (
    <section>
      <article className="flex flex-col gap-6 mb-6">
        <h2 className="m-0">
          You are <span className="underline">almost</span> there!
        </h2>
        <p>Check your order to the right before completing your purchase</p>
        <p>
          Please note, that by clicking the button below, you accept our terms
          and conditions.
        </p>
        <p className="italic small">
          The festival will not be held liable for inclement weather nor
          cancellations.
        </p>
      </article>
      <button
        className={`button my-6 grid place-self-center lg:place-self-start ${
          reservationId === "" ? "opacity-60 cursor-not-allowed" : ""
        }`}
        onClick={fulfillReservationHandler}
      >
        Pay total {totalPrice},-
      </button>

      {reservationId === "" ? (
        <CtaButton href="/booking" text="Retry booking"></CtaButton>
      ) : (
        ""
      )}
    </section>
  );
}

export default OverviewPage;
