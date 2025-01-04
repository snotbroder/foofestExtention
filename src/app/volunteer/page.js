"use client";
import Benefits from "../components/Benefits";
import ClickableCard1 from "../components/ClickableCard1";
import VolunteerForm from "../components/VoluenteerForm";
import { useRef } from "react";
import Image from "next/image";
function voluenteer() {
  const formRef = useRef(null);
  const scrollToElement = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Bruger useRef-hook til at pege på volunterform og funktionen scrollToElement trigger en scroll-animation til det element formRef peger på (voluenteer form).
  return (
    <article className="flex flex-col gap-32 ">
      <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <h1>BECOME A VOLUENTEER</h1>
          <h2>Do you want to become a part of foofest team 2025?</h2>
          <p>
            Join the Team Behind "CampEase" in Camping Area Helheim and Bring
            Comfort to the Festival life.
          </p>
          <button
            onClick={scrollToElement}
            className="button grid place-self-start my-6"
          >
            Apply now
          </button>
        </div>
        <div className="justify-self-center self-center hidden md:block">
          <Image
            src="/illustrations/flower2Green.svg"
            width={220}
            height={220}
            alt="green flower"
          />
        </div>
      </section>
      <section>
        <Benefits />
      </section>
      <div className="flex flex-col gap-6">
        <h2>Learn more about the jobs</h2>
        <div className="flex flex-wrap items-center justify-center md:justify-between xl:justify-between  gap-10 ">
          <ClickableCard1
            src="/img/tshirt.webp"
            header="Safe Person"
            alt="img"
          />
          <ClickableCard1
            src="/img/tshirt.webp"
            header="Supervisor"
            alt="img"
          />
          <ClickableCard1
            src="/img/tshirt.webp"
            header="Tent installer"
            alt="img"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:items-center">
        <h2 className="text-center" ref={formRef}>
          Send application today!
        </h2>
        <VolunteerForm />
      </div>
    </article>
  );
}

export default voluenteer;
