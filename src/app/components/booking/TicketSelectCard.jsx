"use client";
import { useState } from "react";
import AmountBtn from "../AmountBtn";

function TicketSelectCard({ variant, ticketName, price, subText, onAmountChange, variantImage, storedValue }) {
  const [amount, setAmount] = useState(0);

  function handleAmountChange(newAmount) {
    setAmount(newAmount);
    onAmountChange(newAmount);
  }

  return (
    <article className={` ${variant} ${variantImage} bg-no-repeat bg-right-top bg-contain data-[variant=type1]:bg-tertiary data-[variant=type2]:bg-primary rounded-rounded-reg p-8 flex flex-col gap-3 place-items-center lg:flex-row lg:justify-between lg:place-items-center lg:p-10 mb-6`}>
      <div>
        <header className="flex gap-3 place-items-center">
          <h3 className="font-bold">{ticketName}</h3>
          <h4 className="bg-secondary px-2 font-rethink text-main-2 rounded-rounded-reg font-semibold">{subText}</h4>
        </header>
        <h3>{price},-</h3>
      </div>
      <AmountBtn storedValue={storedValue} maxAmount={10} onAmountChange={handleAmountChange} />
    </article>
  );
}

export default TicketSelectCard;
