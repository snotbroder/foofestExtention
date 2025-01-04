import Image from "next/image";
import BandCard from "@/app/components/BandCard";
import ScheduleForBand from "@/app/components/ScheduleForBand";
import { api } from "../../api";

async function Band({ params }) {
  const { slug } = await params;
  const BASE_URL = `${api}/logos/`;

  const response = await fetch(`${api}/bands/${slug}`);
  const band = await response.json();

  const responseBands = await fetch(`${api}/bands`);
  const allBands = await responseBands.json();

  //filtrerer bands efter samje genre
  let similarBands = allBands.filter(
    (b) =>
      b.genre.toLowerCase().trim() === band.genre.toLowerCase().trim() && //tjekker om genren er ebs
      b.slug !== band.slug //sørger for at det samme band ikke bliver vist
  );
  //betingelse som tjekker om antallet af bands i sammme genre er mindre end
  if (similarBands.length < 4) {
    const remainingCount = 4 - similarBands.length; //regner ud hvor mange der mangler for at få et array mmed fire

    // laver en liste som bruges til at vælge tilfældige bands
    const availableBands = allBands.filter((b) => !similarBands.includes(b) && b.slug !== band.slug);
    //for hver band der mangler for at få fire vælges bands fra availableBands listen
    for (let i = 0; i < remainingCount; i++) {
      const randomBand = availableBands[Math.floor(Math.random() * availableBands.length)];
      similarBands.push(randomBand); //de forksellige bands bliver tilføjet til similarBands
      availableBands.splice(availableBands.indexOf(randomBand), 1);
    }
  }

  const scheduleResponse = await fetch(`${api}/schedule`);
  const schedule = await scheduleResponse.json();

  //få fat i alle billederne, hvis de mangler http bliver det tilføjet
  const logo = band.logo.startsWith("http") ? band.logo : `${BASE_URL}${band.logo}`;

  return (
    <section className="flex flex-col gap-20 lg:gap-32 -mt-16">
      <div className="w-screen lg:-mx-desktop -mx-mobile h-[50vh] relative flex flex-col justify-end items-center border-b-2 border-tertiary ">
        <div className="z-20 text-main-2  pb-6 ">
          <h1 className="text-main-1 bg-primary px-2 rounded-rounded-reg">{band.name}</h1>
        </div>
        <Image src={logo} alt={`Logo of ${band.name}`} fill className="absolute inset-0 object-cover" />
      </div>
      <div className=" lg:gap-11 flex flex-col gap-8  lg:grid lg:grid-cols-[3fr_2fr] relative">
        <div className="absolute bottom-40 rotate-12 opacity-60 right-0">
          <Image src="/illustrations/svg/note1Pink.svg" width={70} height={70} objectFit="cover" alt="Pink note big"></Image>
        </div>
        <div className="absolute bottom-40 md:bottom-60 rotate-12 opacity-60 right-40">
          <Image src="/illustrations/svg/note2Pink.svg" width={30} height={30} objectFit="cover" alt="Pink note small"></Image>
        </div>
        <div className="absolute -bottom-16 rotate-12 opacity-60 right-0">
          <Image src="/illustrations/svg/note2Pink.svg" width={30} height={30} objectFit="cover" alt="Pink note small"></Image>
        </div>
        <div className=" bg-secondary grid-cols-[3fr_2fr] -mx-mobile md:mx-0 p-10 rounded-md  text-main-1 flex flex-col gap-4 ">
          <h3>About</h3>
          <p className="text-base">{band.bio}</p>
        </div>

        <ScheduleForBand logoCredits={band.logoCredits} schedule={schedule} bandName={band.name} band={band} />
      </div>
      <div className="flex flex-col gap-6 border-t-2 py-6 border-primary">
        <h3 className=" text-center">You might also like</h3>
        <div className="flex flex-wrap relative justify-center md:justify-between gap-3 ">
          {similarBands.length > 0 ? (
            similarBands.slice(0, 4).map((similarBand) => {
              const logo = similarBand.logo.startsWith("http") ? similarBand.logo : `${BASE_URL}${similarBand.logo}`;

              return <BandCard alt={`Logo of ${similarBand.name}`} key={similarBand.slug} imgSrc={logo} name={similarBand.name} genre={similarBand.genre} slug={similarBand.slug} />;
            })
          ) : (
            <p>No similar bands found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Band;
