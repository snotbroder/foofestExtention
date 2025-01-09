import AmountBtn from "../AmountBtn";
import { useBasketStore } from "@/stores/basket-stores";
import { useBasketFunctionality } from "@/stores/basket-functionality";

function CampingExtra() {
  //hent state data fra store
  const ticketInfo = useBasketStore((state) => state.ticketInfo);
  const campInfo = useBasketStore((state) => state.campInfo);
  const chosenCamp = useBasketStore((state) => state.chosenCamp);
  const updateTentMultiply = useBasketStore((state) => state.updateTentMultiply);

  const toggleGreenCamping = useBasketStore((state) => state.toggleGreenCamping);

  //beregn totaler, men først når de kaldes (inden i handle update)
  const calculateTotalTickets = (tickets) => tickets.reduce((total, ticket) => total + ticket.itemMultiply, 0);
  const calculateTotalTents = (tents) => tents.reduce((total, tent) => total + tent.itemMultiply, 0);

  //totals der kaldes i handleUpdate, og send dynamisk data fra basket store med
  const totalTicketsInOrder = calculateTotalTickets(ticketInfo);
  const totalTentsAllocated = calculateTotalTents(campInfo);

  //finder data for nuværende antal telte i store
  const twoPersonTent = campInfo.find((tent) => tent.itemTitle === "two person tent")?.itemMultiply || 0;
  const threePersonTent = campInfo.find((tent) => tent.itemTitle === "three person tent")?.itemMultiply || 0;
  //beregner max værdi til AmountBtn, så den kan give feedback til brugeren hvis aktiveret
  const sharedMaxAmount = totalTicketsInOrder - totalTentsAllocated;

  //håndteres når der ændres i AmountBtn
  const handleUpdate = (tentType, newAmount) => {
    //beregn hvor mange telte er valgt i store
    const currentTentAmount = campInfo.find((tent) => tent.itemTitle === tentType)?.itemMultiply || 0;
    const proposedTotal = totalTentsAllocated - currentTentAmount + newAmount;

    //Hvis der er flere ønskede antal telte er højere end billetter i ordren
    if (proposedTotal > totalTicketsInOrder) {
      return; // returner absolut ingenting øvvvvv prøv igen
    }

    // Opdatér de tilvalgte telte i store
    updateTentMultiply(tentType, newAmount);
  };
  //next step logic
  const reservationId = useBasketStore((state) => state.reservationId);
  const step = useBasketFunctionality((state) => state.bookingStep);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);

  const reserveSpotHandler = useBasketFunctionality((state) => state.reserveSpotHandler);

  const twoTentStored = useBasketStore((state) => {
    const twoTentStored = state.campInfo.find((item) => item.itemTitle === "two person tent");
    return twoTentStored.itemMultiply;
  });

  const threeTentStored = useBasketStore((state) => {
    const threeTentStored = state.campInfo.find((item) => item.itemTitle === "three person tent");
    return threeTentStored.itemMultiply;
  });

  return (
    <section>
      <h3>
        Add extras <span className="font-normal italic">(optional)</span>
      </h3>
      <article className="bg-main-2 border-solid border-2 border-main-1 rounded-rounded-reg max-h-max p-8 flex flex-col gap-2">
        <form className="flex gap-6 font-rethink text-main-1">
          <input className="w-10 h-auto" id="green-camping" type="checkbox" onChange={toggleGreenCamping || false} />
          <div className="flex flex-col gap-1">
            <label className="font-bold" htmlFor="green-camping">
              Green Camping +249,-
            </label>
            <label htmlFor="green-camping" className="text-xs">
              When you buy green camping, please note only available on site.
            </label>
          </div>
        </form>
        <section>
          <div className="font-rethink text-main-1 border-b-2 border-b-tertiary border-b-solid my-1 pb-2 flex justify-between">
            <h3>Tents</h3>
          </div>
          <p className=" small italic mt-2 mb-4">Festival staff will set the tent up for you</p>
          <section className="flex flex-col gap-6">
            <div className="flex justify-between place-items-center gap-2">
              <h4>2 person tent +299,-</h4>
              <AmountBtn storedValue={twoTentStored} maxAmount={sharedMaxAmount + twoPersonTent} onAmountChange={(amount) => handleUpdate("two person tent", amount)}></AmountBtn>
            </div>
            <div className="flex justify-between place-items-center gap-2">
              <h4>3 person tent +399,-</h4>
              <AmountBtn storedValue={threeTentStored} maxAmount={sharedMaxAmount + threePersonTent} onAmountChange={(amount) => handleUpdate("three person tent", amount)}></AmountBtn>
            </div>
          </section>
        </section>
      </article>
      <button
        onClick={() => {
          if (chosenCamp === "") {
          } else {
            reserveSpotHandler();
            setNewStep(step + 1);
          }
        }}
        className={`button mt-6 grid place-self-center lg:place-self-end ${chosenCamp === "" ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        Next step
      </button>
    </section>
  );
}
export default CampingExtra;
