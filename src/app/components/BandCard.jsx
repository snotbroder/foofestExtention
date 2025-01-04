import Image from "next/image";
import Link from "next/link";

export default function BandCard({ genre, imgSrc, alt, name, slug }) {
  return (
    <div className=" w-52 xl:w-64 flex flex-col shadow-custom ">
      <Link href={`/bands/${slug}`}>
        <div className="relative h-[130px] xl:h-[200px]   ">
          <div className="absolute  right-0 top-5 rounded-rounded-reg mr-1  bg-tertiary uppercase py-0.5 px-5 z-10  ">
            <p className="small  text-main-2">{genre}</p>
          </div>
          <div className="h-full w-full absolute object-cover">
            <Image
              className="fill"
              src={imgSrc}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="bg-primary h-16 flex justify-center items-center w-full   ">
          <h3 className="uppercase  text-center  py-5">{name}</h3>
        </div>
      </Link>
    </div>
  );
}
