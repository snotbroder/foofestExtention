import CtaButton from "../components/CtaButton";
import FestivalMap from "../components/FestivalMap";
import { IoIosWater } from "react-icons/io";
import Image from "next/image";
import { PiFirstAidFill } from "react-icons/pi";
import { FaRecycle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import Accordion from "../components/Accordion";
function map() {
  return (
    <div className="flex flex-col">
      <div className="">
        <div className="absolute -bottom-40 left-0 -z-10 opacity-60 w-40 lg:w-fit">
          <Image
            src="illustrations/svg/spiralPurple.svg"
            width={240}
            height={240}
            alt="Purple spiral"
          ></Image>
        </div>
        <div className="absolute top-0 right-0 -z-10 opacity-60 w-48 lg:w-fit">
          <Image
            src="illustrations/svg/spiralPink.svg"
            width={330}
            height={330}
            alt="Pink spiral"
          ></Image>
        </div>
        <h1>Festival Map</h1>
      </div>

      <section className="flex flex-col gap-10  mb-32 ">
        <div className="flex flex-col ">
          <h2>Explore the festival grounds with ease!</h2>
          <p>
            Use the map to find your favorite stages, locate food stalls, water
            stations, and other facilities to make the most of your experience.
          </p>
        </div>
        <FestivalMap></FestivalMap>
        <div className="flex flex-col items-start gap-6">
          <p className="text-pretty ">
            Plan Your Experience Use the map to locate your favorite stage or
            find a relaxing spot. Don't forget to check out the full festival
            schedule and discover all the amazing artists performing this year!
          </p>
          <CtaButton href="/tickets" text="Buy ticket"></CtaButton>
        </div>
      </section>
      <section className="flex flex-col bg-secondary -mx-mobile text-main-2 lg:-mx-desktop gap-16 py-24 font-rethink">
        <h2 className="text-center font-bold text-main-2">Good to know</h2>
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 text-center mx-mobile lg:mx-desktop">
          <div className="flex flex-col items-center ">
            <IoIosWater className="text-4xl" />
            <p className="w-44  text-main-2 text-pretty">
              Stay hydrated! Water stations and toilets are conveniently
              located.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <FaInfoCircle className="text-4xl" />
            <p className="w-44  text-main-2 ">
              Visit info points for assistance, directions, or general festival
              information.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <BsLightningChargeFill className="text-4xl" />
            <p className="w-44  text-main-2 ">
              Charge your devices at designated charging stations.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <PiFirstAidFill className="text-4xl" />
            <p className="w-44  text-main-2 ">
              Be safe! First aid stations are clearly marked for any
              emergencies.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <FaRecycle className="text-4xl" />
            <p className="w-44  text-main-2 ">
              Keep the festival green by using designated recycling stations.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col max-w-xl items-center mx-auto mt-32 gap-10 relative">
        <div className="absolute -left-40 -z-10">
          <Image
            src="illustrations/svg/flower2Orange.svg"
            width={200}
            height={200}
            alt="Large orange flower"
          ></Image>
        </div>
        <div className="absolute -top-28 left-0 -z-10">
          <Image
            src="illustrations/svg/flower2Orange.svg"
            width={100}
            height={100}
            alt="Small orange flower"
          ></Image>
        </div>
        <div className="absolute -bottom-20 right-0 -z-10">
          <Image
            src="illustrations/svg/flower2Orange.svg"
            width={130}
            height={130}
            alt="Medium orange Flower"
          ></Image>
        </div>
        <Accordion></Accordion>
      </section>
    </div>
  );
}

export default map;
