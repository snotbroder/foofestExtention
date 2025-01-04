"use client";
import { useState } from "react";
import useSWR from "swr";
import ScheduleBox from "./ScheduleBox";
import ScheduleFilter from "./ScheduleFilter";
import { api } from "../api";
const fetcher = (url) => fetch(url).then((res) => res.json());

function Schedule() {
  const {
    data: scheduleData,
    error,
    isLoading,
  } = useSWR(`${api}/Schedule`, fetcher);

  const [pickedDay, setPickedDay] = useState("mon");
  const [pickedStage, setPickedStage] = useState("Midgard");

  if (error) return <div>Error loading schedule: {error.message}</div>;
  if (isLoading) return <div>Loading schedule...</div>;

  const schedule = scheduleData?.[pickedStage]?.[pickedDay] || [];

  return (
    <article className=" flex flex-col justify-center gap-4 ">
      <ScheduleFilter
        setPickedDay={setPickedDay}
        setPickedStage={setPickedStage}
        pickedDay={pickedDay}
        pickedStage={pickedStage}
      />
      <div className="mt-8 -mx-mobile sm:mx-0">
        {schedule.map((event, index) => {
          return (
            <div key={index}>
              <ScheduleBox
                artist={event.act}
                startTime={event.start}
                endTime={event.end}
                stage={pickedStage}
              />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Schedule;
