function ScheduleBox({ endTime, startTime, artist, logo, stage }) {
  return (
    <div className="flex flex-col  relative">
      <span className="bg-tertiary lg:rounded-rounded-reg text-main-2 px-2 py-0.5   flex justify-between ">
        <div>Time</div>
        <div>Band</div>
        <div>Stage</div>
      </span>
      <div className="flex text-center py-3 uppercase list-none justify-between items-center">
        <li>
          {startTime} - {endTime}
        </li>
        <li>{artist}</li>
        <li>{stage}</li>
      </div>
    </div>
  );
}

export default ScheduleBox;
