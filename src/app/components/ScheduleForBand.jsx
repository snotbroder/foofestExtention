function ScheduleForBand({ schedule, bandName, band, logoCredits }) {
  const scheduleItems = [];
  for (const [stage, days] of Object.entries(schedule)) {
    for (const [day, events] of Object.entries(days)) {
      for (const [index, event] of events.entries()) {
        if (event.act === bandName) {
          scheduleItems.push({
            stage,
            day,
            start: event.start,
            end: event.start,
          });
        }
      }
    }
  }

  return (
    <div className=" flex flex-col gap-8 ">
      <div className="flex flex-col gap-2">
        <h3>Schedule</h3>
        {scheduleItems.length > 0 ? (
          scheduleItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 ">
              <p className="font-semibold">
                Day:
                <span className="font-normal capitalize"> {item.day}</span>
              </p>
              <p>
                <span className="font-semibold">Where: </span>
                {item.stage}
              </p>
              <p>
                <span className="font-semibold">When: </span>
                {item.end} - {item.start}
              </p>
            </div>
          ))
        ) : (
          <p>No schedule available for this band</p>
        )}
      </div>
      <div className=" relative before:absolute before:content-[''] before:h-[1px] before:bg-primary before:w-full before:-top-4">
        <h3>Band members</h3>
        <p>{band.members.join(", ")}</p>
      </div>
      {band.logoCredits ? (
        <div className=" relative before:absolute before:content-[''] before:h-[1px] before:bg-primary before:w-full before:-top-4">
          <h3>Image credits</h3>
          <p className="small">{band.logoCredits}</p>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ScheduleForBand;
