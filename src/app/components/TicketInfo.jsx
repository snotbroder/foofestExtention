import CtaButton from "./CtaButton";

function TicketInfo({ ticketType, pText }) {
  return (
    <div className="border-2 border-main-1 inline-flex h-fit p-6 max-w-2xl flex-col gap-5 items-center justify-start rounded-rounded-reg">
      <h3>{ticketType} </h3>
      <p>{pText}</p>
      <CtaButton href="/booking" text="go to booking" target="blank" />
    </div>
  );
}

export default TicketInfo;
