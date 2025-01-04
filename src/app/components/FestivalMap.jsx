import Image from "next/image";
import { FaSpa, FaPaintBrush } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

const IconMarker = ({ icon, bgColor = "#333" }) => {
  return (
    <div
      className="flex items-center justify-center rounded-full text-main-2 group-hover:scale-110 transition-transform  w-[40px] h-[40px] text-md md:text-2xl"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {icon}
    </div>
  );
};

function FestivalMap() {
  const markers = [
    {
      name: "Alfheim",
      top: "34%",
      left: "30%",
      description:
        "Perfect for families, with a calm and family-friendly environment.",
    },
    {
      name: "Nilheim",
      top: "23%",
      left: "60%",
      description:
        "A raw and edgy vibe for those who crave a bold and energetic atmosphere. Currently full.",
    },
    {
      name: "Muspelheim",
      top: "10%",
      right: "2%",
      description: "A wheelchair-accessible camp close to facilities.",
    },
    {
      name: "Svartheim",
      top: "75%",
      left: "10%",
      description:
        "Enjoy a peaceful escape surrounded by the beauty of the forest.",
    },
    {
      name: "Midgård",
      top: "17%",
      left: "77%",
      description: "Foo Festivals biggest stage",
    },
    {
      name: "Jotunheim",
      top: "37%",
      left: "80%",
      description: "Foo Festivals alternative stage",
    },
    {
      name: "Vanaheim",
      top: "72%",
      left: "63%",
      description: "Foo Festivals most beautiful stage",
    },
    {
      icon: <FaSpa />,
      bgColor: "#77B09F",
      top: "11%",
      left: "56%",
      description: "Relaxing spa area to unwind and recharge.",
    },
    {
      icon: <MdFamilyRestroom />,
      bgColor: "#FFB347",
      top: "35%",
      left: "44%",
      description: "Family-friendly facilities available.",
    },
    {
      icon: <FaPaintBrush />,
      bgColor: "#FFD700",
      top: "40%",
      left: "55%",
      description: "Artistic corner for creative minds.",
    },
  ];

  function Mapmark({ name, position, description, icon, bgColor }) {
    return (
      <div
        className="absolute flex flex-col items-center group"
        style={{
          top: position.top,
          left: position.left,
          right: position.right,
        }}
      >
        {icon && <IconMarker icon={icon} bgColor={bgColor || "#333"} />}

        {name && (
          <h5 className="uppercase group-hover:scale-110 transition-transform text-sm mt-1">
            {name}
          </h5>
        )}

        <div
          className="hidden group-hover:flex bg-main-2 text-main-1 p-4 rounded-sm shadow-lg absolute z-50 w-[150px] md:w-[200px]"
          style={{ top: "110%", left: "50%", transform: "translateX(-50%)" }}
        >
          <p className="text-xs">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full lg:max-w-[1200px] mx-auto border-2 border-main-1 rounded-rounded-reg">
      <Image
        src="/img/map.webp"
        width={1200}
        height={1200}
        objectFit="contain"
        alt="Festival Map"
      />
      {markers.map((marker, index) => (
        <Mapmark
          key={index}
          name={marker.name}
          position={{
            top: marker.top,
            left: marker.left,
            right: marker.right,
          }}
          description={marker.description}
          icon={marker.icon}
          bgColor={marker.bgColor}
          iconColor={marker.iconColor}
        />
      ))}
    </div>
  );
}

export default FestivalMap;
