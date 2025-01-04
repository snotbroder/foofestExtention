import ClickableCard2 from "../app/components/ClickableCard2";
import BandCard from "../app/components/BandCard";
import Accordion from "../app/components/Accordion";
import CtaButton from "../app/components/CtaButton";
import Link from "next/link";
import Image from "next/image";
import Hero from "../app/components/Hero";
import { api } from "./api";
async function Home() {
  const BASE_URL = api;
  const response = await fetch(`${api}/bands`, {
    method: "GET",
  });
  const bands = await response.json();

  return (
    <section className="flex flex-col gap-24 md:32  ">
      <Hero />

      <section className="flex flex-col items-center gap-20">
        <div className="flex flex-wrap justify-center gap-4 items-center relative md:gap-10 ">
          <div className="absolute -z-10 left-0 top-9 lg:bottom-30 -mx-mobile opacity-60 lg:-left-28">
            <Image
              src="illustrations/svg/flower2Pink.svg"
              width={250}
              height={250}
              objectFit="cover"
              alt="Pink Flower"
            ></Image>
          </div>
          <div className="absolute left-0  top-72 -z-10  opacity-60 ">
            <Image
              src="illustrations/svg/flower2Pink.svg"
              width={150}
              height={150}
              objectFit="cover"
              alt="Small Pink Flower"
            ></Image>
          </div>
          <ClickableCard2
            headline="Schedule"
            text=" Check out the full schedule and don't miss any moment of the festival"
            href="/schedule"
          ></ClickableCard2>
          <ClickableCard2
            headline="Map"
            text=" Find your way around the Foo Festival with our easy-to-follow map."
            href="/map"
          ></ClickableCard2>
          <ClickableCard2
            headline="Lineup"
            text=" Check out our amazing lineup of bands and performers, and don't miss your favourite artists "
            href="/lineup"
          ></ClickableCard2>
        </div>
        <div>
          <CtaButton href="/tickets" text="Buy Ticket"></CtaButton>
        </div>
      </section>
      <section className="relative flex flex-col border-t-[1px] border-tertiary">
        <div className=" pt-6 flex flex-col ">
          <h2 className=" text-center lg:text-start">Lineup 2025</h2>
          <div className="flex flex-wrap justify-center lg:justify-between gap-6 ">
            {bands.length > 0 &&
              bands.slice(0, 4).map((band) => {
                const logo = band.logo.startsWith("http")
                  ? band.logo
                  : `${BASE_URL}/logos/${band.logo}`;
                return (
                  <BandCard
                    alt={`Logo of ${band.name}`}
                    key={band.name}
                    imgSrc={logo}
                    name={band.name}
                    genre={band.genre}
                    slug={band.slug}
                  />
                );
              })}
          </div>
        </div>
        <div className="mt-20 place-self-center ">
          <CtaButton href="/lineup" text="See full lineup"></CtaButton>
        </div>
      </section>
      <section
        className="flex flex-col items-center py-6
  bg-[url('/img/filterbg.webp'),url('/illustrations/svg/circle.svg')] 
  bg-repeat 
  bg-[top_center] bg-[contain]
  lg:-mx-desktop -mx-mobile border-t-2 border-b-2 border-tertiary"
      >
        <div className="mx-auto lg:w-full max-w-[700px] px-4 md:px-0">
          <h2 className="text-center md:text-left">News</h2>

          <div className="flex flex-col gap-12 items-center lg:items-start">
            <article className="bg-tertiary shadow-custom flex flex-col items-start gap-3 text-pretty w-[15rem] p-3 lg:w-[44rem]">
              <Image
                className="h-2/3"
                src="/img/tshirt.webp"
                width={700}
                height={700}
                objectFit="cover"
                alt="Foo Festival T-shirt"
              ></Image>
              <h3 className="">Buy the t-shirt of this year’s festival</h3>
              <p>
                Get your official Foo Festival T-shirt and keep the peace, love,
                and music alive wherever you go
              </p>
            </article>
            <div className="flex flex-col md:flex-row gap-16 mb-9">
              <article className="bg-tertiary p-3 shadow-custom flex  text-pretty flex-col gap-3   w-[15rem] lg:w-[20rem]">
                <Image
                  src="/img/quiz.webp"
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="Quiz poster"
                ></Image>
                <h3>Join the quiz and win a free ticket</h3>
                <p>
                  Think you know your music trivia? Test your knowledge in our
                  quiz for a chance to win a ticket to Foo Festival 2024!
                </p>
              </article>
              <Link href="/volunteer">
                <article className="bg-tertiary p-3 shadow-custom flex flex-col text-pretty gap-3 w-[15rem] lg:w-[20rem] h-full ">
                  <Image
                    src="/img/volunteer.webp"
                    width={300}
                    height={300}
                    objectFit="cover"
                    alt="Volunteer poster"
                  ></Image>
                  <h3>Become a volunteer</h3>
                  <p>
                    Volunteer with us! Enjoy free entry, merch, and
                    unforgettable experiences while helping the festival run
                    smoothly.
                  </p>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Accordion />
    </section>
  );
}

export default Home;
