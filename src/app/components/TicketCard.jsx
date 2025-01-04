function TicketCard({
  design,
  title,
  ticketType,
  text,
  price,
  labelText,
  label,
}) {
  return (
    <div>
      <div
        className={`${design} bg-primary flex flex-col gap-4 pt-6 p-6  w-56 h-72 ${ticketType} `}
      >
        <div className="flex items-center gap-3">
          <h2 className="m-0">{title}</h2>
          <div
            className={`bg-secondary text-main-2 font-rethink rounded-rounded-reg px-2 ${label}`}
          >
            {labelText}
          </div>
        </div>
        <h3 className="  text-2xl">{price}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TicketCard;
