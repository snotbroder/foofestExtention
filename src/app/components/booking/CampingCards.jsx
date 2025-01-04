"use client";
import CampingCard from "./CampingCard";

import useSWR from "swr";
import { api } from "../../api";

const fetcher = (url) => fetch(url).then((res) => res.json());
function CampingCards() {
  const {
    data: fetchSpotsData,
    error,
    isLoading,
  } = useSWR(`${api}/available-spots`, fetcher);
  if (error) return <div>Error loading available spots: {error.message}</div>;
  if (isLoading) return <div>Loading spots...</div>;
  const fetchSpots = fetchSpotsData;

  return (
    <section>
      <div className="flex flex-col mb-6 place-items-center md:justify-center lg:justify-normal gap-2 lg:flex-row lg:flex-wrap ">
        {fetchSpots.map((spot) => {
          return (
            <CampingCard
              key={spot.area}
              area={spot.area}
              space={spot.available}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CampingCards;
