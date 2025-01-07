"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import BandCard from "./BandCard";
import { IoMdArrowDropdown } from "react-icons/io";
import { api } from "../api";
import { Input } from "@/components/ui/input";

const fetcher = (url) => fetch(url).then((res) => res.json());

function LineUpComponent() {
  const BASE_URL = `${api}/logos/`;
  const BANDS_URL = `${api}/bands`;
  let [isListAscending, setIsListAscending] = useState(false);
  let [dataThatIsMapping, setDataThatIsMapping] = useState([]);
  let [pickedGenre, setPickedGenre] = useState("");

  let { data, error, isLoading } = useSWR(BANDS_URL, fetcher);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    if (!isLoading) {
      setDataThatIsMapping(data);
    }
  }, [data]);

  function handleAscending() {
    let sortedBands = [];
    if (isListAscending === true) {
      sortedBands = data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      sortedBands = data.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    setDataThatIsMapping(sortedBands);
    setIsListAscending(!isListAscending);
  }
  const currentData = dataThatIsMapping.length > 0 ? dataThatIsMapping : data;

  if (error) return <div>Error loading schedule: {error.message}</div>;
  if (isLoading) return <div>Loading schedule...</div>;

  let genres = [...new Set(data.map((band) => band.genre))];

  return (
    <article>
      <section className="border-main-1 border-solid border-2 p-6 rounded-rounded-reg">
        <div className="flex justify-between gap-16 mb-4">
          <div className="flex flex-col">
            <label className="text-xl sm:text-xl font-rethink text-main-1" htmlFor="select-genre">
              Sort by genre
            </label>
            <select className="bg-accent-1 text-xl sm:text-md font-rethink text-main-1" name="genres" id="select-genre" onChange={(e) => setPickedGenre(e.target.value)}>
              <option value="">Show all results</option>
              {genres.map((genre, index) => {
                return (
                  <option value={genre} key={index}>
                    {genre}
                  </option>
                );
              })}
            </select>
          </div>

          <button className="text-main-1 bg-accent-1 text-xl sm:text-md font-rethink" onClick={handleAscending}>
            {isListAscending ? "Z-A" : "A-Z"}
          </button>
        </div>
        <Input onChange={(e) => setSearch(e.target.value)} type="bandsearch" placeholder="search" />
      </section>
      <div className="bg-[url('/illustrations/svg/circle.svg')] bg-contain bg-repeat-y bg-no-repeat-x  -mx-mobile lg:-mx-desktop py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center place-items-center gap-10 mx-mobile pb-16 lg:mx-desktop">
          {currentData
            .filter((band) => {
              return search.toLowerCase() === "" ? band : band.name.toLowerCase().includes(search);
            })
            .map((band) => {
              const logo = band.logo.startsWith("http") ? band.logo : `${BASE_URL}${band.logo}`;
              return (!pickedGenre || band.genre === pickedGenre) && <BandCard alt={`Logo of ${band.name}`} key={band.name} imgSrc={logo} name={band.name} genre={band.genre} slug={band.slug} />;
            })}
        </div>
      </div>
    </article>
  );
}

export default LineUpComponent;
