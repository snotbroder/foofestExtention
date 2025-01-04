"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenuIcon from "./BurgerMenuIcon";
import CtaButton from "../CtaButton";

function BurgerMenu() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  function handleOpenBurgerMenu() {
    setOpenBurgerMenu((prevState) => !prevState);
  }

  return (
    <div className="bg-primary relative  py-6 placeholder-main-1 px-8 lg:px-0 mb-16 z-[100] border-y-2 border-tertiary bg-[url('/img/filterbg.webp')] bg-no-repeat bg-cover">
      <div className="lg:mx-desktop  flex justify-between place-items-center">
        <Link href="/" className="w-16 md:w-fit">
          <Image
            objectFit="cover"
            src="/illustrations/svg/logo.svg"
            width={90}
            height={90}
            alt="Foo Festival logo"
          ></Image>
        </Link>

        <section className="flex justify-end gap-6 place-items-center">
          <div onClick={() => setOpenBurgerMenu(false)}>
            <CtaButton href="/tickets" text="Buy ticket" />
          </div>

          <div onClick={handleOpenBurgerMenu} className="">
            <BurgerMenuIcon openBurgerMenu={openBurgerMenu}></BurgerMenuIcon>
          </div>
        </section>
      </div>

      {openBurgerMenu ? (
        <nav className=" inset-0 relative h-full -z-10">
          <ul className="-mx-mobile  lg:mx-0 font-rethink font-bold text-3xl flex flex-col items-end text-main-1 gap-10 py-8 px-8 absolute lg:px-32 bg-primary  bg-[url('/img/filterbg.webp')] bg-no-repeat bg-cover w-screen  ">
            <li className="hover:underline" onClick={openBurgerMenu}>
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline" onClick={openBurgerMenu}>
              <Link href="/lineup">Lineup</Link>
            </li>
            <li className="hover:underline" onClick={openBurgerMenu}>
              <Link href="/schedule">Schedule</Link>
            </li>
            <li className="hover:underline" onClick={openBurgerMenu}>
              <Link href="/map">Festival Map</Link>
            </li>
            <li className="hover:underline" onClick={openBurgerMenu}>
              <Link href="/volunteer">Become a Volunteer</Link>
            </li>
            <div className="absolute left-20 bottom-12 opacity-20">
              <Image
                src="/illustrations/svg/flowerPurple.svg"
                width={200}
                height={200}
                alt="Purple Flower"
              ></Image>
            </div>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
}

export default BurgerMenu;
