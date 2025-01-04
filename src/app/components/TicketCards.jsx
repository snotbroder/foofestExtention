import TicketCard from "./TicketCard";
import TicketInfo from "./TicketInfo";

function TicketCards() {
  return (
    <section className="flex items-center flex-col gap-24">
      <div className="flex flex-col items-center justify-center sm:justify-center sm:flex-row gap-10 sm:gap-20 lg:gap-32">
        <TicketCard
          title="VIP"
          price="1299.-"
          text="Luxury Ticket"
          ticketType="vip"
          labelText="Best Offer"
        />
        <TicketInfo
          ticketType="VIP"
          pText="Experience unparalleled luxury with our exclusive VIP ticket. Enjoy premium seating, complimentary refreshments, and early access to the venue."
        />
      </div>
      <div className="flex flex-col items-center justify-between sm:justify-center sm:flex-row gap-10 sm:gap-20 lg:gap-32 ">
        <TicketCard
          title="REGULAR"
          price="799.-"
          text="Standard ticket"
          ticketType="regular"
          design="regular"
        />
        <TicketInfo
          ticketType="REGULAR"
          pText="Join the excitement with our standard regular ticket. Gain general admission access to the event and be part of the incredible atmosphere."
          design="vip"
        />
      </div>
    </section>
  );
}

export default TicketCards;
