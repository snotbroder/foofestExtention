"use client";
import Image from "next/image";
import { motion } from "motion/react";
function Hero() {
  return (
    <article className="bg-[url('/img/filterbg.webp')] bg-cover -mt-16 ">
      <section className="bg-[url('/illustrations/patternHero.svg')] bg-cover -mx-mobile lg:-mx-desktop after:content-[''] after:h-1 after:bg-secondary after:w-full after:absolute after:opacity-60 ">
        <div className=" md:pb-2 py-20 md:py-0 mx-mobile lg:mx-desktop relative grid grid-cols-[2fr_1fr_1fr] ">
          <div className="row-start-2 row-end-3 col-span-3 md:col-span-2">
            <h1 className="display">Foo Festival 2025</h1>
            <h2 className="lg:text-2xl text-xl font-normal lg:w-3/4">
              Where Music Meets Peace, Love, and Groovy Vibes&nbsp;
              <time className="font-bold">July 7th - 13th</time>
            </h2>
          </div>
          <motion.div
            whileInView={{ scale: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            initial={{ scale: 0 }}
            className="hidden md:block w-fit row-start-1 row-end-3 col-start-3 col-end-4"
          >
            <Image
              className="justify-self-end"
              src="/illustrations/flower2Green.svg"
              width={300}
              height={300}
              alt="green flower"
            />
          </motion.div>
          <motion.div
            className="hidden md:block w-fit col-start-3 row-start-3 row-end-4 col-end-4"
            whileInView={{ scale: 1, rotate: 380 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            initial={{ scale: 0, rotate: 180 }}
          >
            <Image
              className="justify-self-end"
              src="/illustrations/svg/spiralPink.svg"
              width={200}
              height={200}
              alt="pink flower"
            />
          </motion.div>
          <motion.div
            className="hidden md:block w-fit col-start-2 row-start-3 row-end-4 col-end-3 justify-self-end"
            whileInView={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            initial={{ scale: 0 }}
          >
            <Image
              className="justify-self-center justify-end self-end"
              src="/illustrations/svg/note1.svg"
              width={100}
              height={100}
              alt="note illustration"
            />
          </motion.div>
        </div>
      </section>
    </article>
  );
}

export default Hero;
