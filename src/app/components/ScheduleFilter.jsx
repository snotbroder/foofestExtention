import Image from "next/image";

function ScheduleFilter({ setPickedDay, setPickedStage, pickedDay, pickedStage }) {
  const stageArray = ["Midgard", "Jotunheim", "Vanaheim"];
  const daysArray = [
    {
      name: "monday",
      short: "mon",
    },
    {
      name: "tuesday",
      short: "tue",
    },
    {
      name: "wednesday",
      short: "wed",
    },
    {
      name: "thursday",
      short: "thu",
    },
    {
      name: "friday",
      short: "fri",
    },
    {
      name: "saturday",
      short: "sat",
    },
    {
      name: "sunday",
      short: "sun",
    },
  ];
  return (
    <article className="lg:px-32  flex flex-col gap-10">
      <div className="flex flex-col gap-5 align-middle sm:justify-center sm:items-center">
        <div className="absolute mx-auto -right-52 hidden -top-24 lg:block opacity-60 ">
          <Image alt="Orange Flower" src="illustrations/svg/flower2Orange.svg" width={180} height={180}></Image>
        </div>
        <div className="absolute mx-auto -right-40 hidden top-20 opacity-60 lg:block">
          <Image alt="Orange Flower" src="illustrations/svg/flower2Orange.svg" width={140} height={140}></Image>
        </div>
        <div className="absolute mx-auto right-0 hidden opacity-60 -top-6 lg:block">
          <Image alt="Orange Flower" src="illustrations/svg/flower2Orange.svg" width={100} height={100}></Image>
        </div>
        <div className="absolute mx-auto -left-60 hidden top-96 opacity-60 lg:block">
          <Image alt="Pink Spiral" src="illustrations/svg/spiralPink.svg" width={210} height={210}></Image>
        </div>
        <h2 className="text-start">Sort by stage and day</h2>
        <div className="list-none text-main-1 flex-wrap  flex gap-4">
          {stageArray.map((stage, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setPickedStage(stage);
                }}
                className={` lg:text-lg cursor-pointer uppercase font-semibold  ${pickedStage === stage ? "text-main-2 font-semibold bg-secondary rounded-rounded-reg px-3" : " text-main-1"}`}
              >
                {stage}
              </li>
            );
          })}
        </div>
        <div className="list-none gap-4 flex-wrap  text-main-1 flex lg:gap-10">
          {daysArray.map((day) => {
            return (
              <li
                key={day.short}
                onClick={() => {
                  setPickedDay(day.short);
                }}
                className={`cursor-pointer uppercase text-main-1 lg:text-lg ${pickedDay === day.short ? "text-main-2 font-semibold bg-secondary rounded-rounded-reg px-3" : ""}`}
              >
                {day.short}
              </li>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default ScheduleFilter;
