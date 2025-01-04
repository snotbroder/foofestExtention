import TicketCards from "../components/TicketCards";
import Image from "next/image";

function ticketsPage() {
  return (
    <article className="relative">
      <div className=" hidden sm:block absolute right-20 top-0">
        <Image
          src="/illustrations/svg/flower2Pink.svg"
          width={100}
          height={100}
          alt="Pink flower"
        ></Image>
      </div>
      <div className="absolute  right-0 rotate-[20deg]">
        <Image
          src="/illustrations/svg/note1.svg"
          width={60}
          height={60}
          alt="Note"
        ></Image>
      </div>

      <div className="relative">
        <h1>Tickets</h1>
        <TicketCards />
      </div>
    </article>
  );
}

export default ticketsPage;
