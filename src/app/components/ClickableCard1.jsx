import Image from "next/image";

function ClickableCard1({ header, text, src, alt }) {
  return (
    <div className="w-72 shadow-custom h-auto bg-tertiary p-4 flex flex-col gap-1">
      <div className="relative w-full h-64">
        <Image fill src={src} alt={alt} className="object-cover"></Image>
      </div>
      <div>
        <h3>{header}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
}

export default ClickableCard1;
