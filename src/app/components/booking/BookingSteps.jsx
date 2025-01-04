"use client";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useBasketFunctionality } from "@/stores/basket-functionality";

function BookingSteps() {
  const stepNames = ["Choose tickets", "Choose camp", "Contact info", "Payment info", "Overview"];
  const step = useBasketFunctionality((step) => step.bookingStep);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  return (
    <>
      <ul className="flex flex-col gap-2 lg:flex-row lg:justify-between font-rethink my-6 py-4 border-t-[1px] border-b-[1px] border-tertiary border-solid">
        {stepNames.map((stepName, index) => (
          <li
            key={index}
            onClick={() => {
              if (index <= step) {
                setNewStep(index);
              }
            }}
            className={`cursor-pointer ${step === index ? "text-main-2 font-semibold bg-secondary rounded-rounded-reg px-3" : step > index ? "italic text-secondary hover:underline hover:not-italic" : "text-feedback-disabled-1 cursor-not-allowed"}`}
          >
            {stepName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookingSteps;
