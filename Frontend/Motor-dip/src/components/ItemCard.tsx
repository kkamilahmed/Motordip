import { ChevronDown } from "lucide-react";
import { useState } from "react";


interface itemCardP {
  title: string;
  desc: string;
  itemsB?:  string[];
  itemsI: string[];
  price: string;
  img : string
}

export function ItemCard({ title, desc, itemsB, itemsI, price,img}: itemCardP) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex flex-col justify-between items-start w-90 p-5 overflow-hidden  shadow-lg"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      {/* Card Content */}
      <div className="relative z-10 w-full">
        <div className="text-7xl font-Bebas flex items-center justify-between w-full text-white">
          <span>{title}</span>
          <div
            className="cursor-pointer p-3 transition-transform duration-500 ease-in-out"
            onClick={() => setOpen(!open)}
          >
            <ChevronDown
              className={`transition-transform duration-500 ease-in-out ${
                open ? "rotate-180 scale-110" : "rotate-0 scale-100"
              }`}
            />
          </div>
        </div>

        <div className="font-BeVietnam text-xs text-gray-200">{desc}</div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="font-BeVietnam text-xs pt-2 text-gray-100">
            <p>Includes:</p>
            <ul className="list-disc ml-5">
              {itemsI.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p>Benefit:</p>
            <ul className="list-disc ml-5">
              {itemsB?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Price section */}
      <div className="relative z-10 mt-4 text-white text-3xl font-Bebas self-end">
        {price}
      </div>
    </div>
  );
}
