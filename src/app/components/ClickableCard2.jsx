import Link from "next/link";

function ClickableCard2({ headline, text, href }) {
  return (
    <Link href={href}>
      <div className=" vintage-filter bg-tertiary w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] px-8 pt-9 flex flex-col shadow-custom items-center justify-start">
        <h2>{headline}</h2>
        <p className="">{text}</p>
      </div>
    </Link>
  );
}

export default ClickableCard2;
