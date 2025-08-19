import { Footer } from "../components/Footer";
import redLogoSrc from "../assets/redLogo.png";
import wheel from "../assets/wheelwash.png";
import front from "../assets/carwashFront.png";
import back from "../assets/carwashback.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { ItemCard } from "../components/ItemCard";
import { useEffect, useState } from "react";

function priceSelector( car : string) {
    if (car == "sedan") return ["$100", "$120", "$130"];
    if (car == "hatchback") return ["$80", "$90", "$150"];
    if (car == "suv") return ["$150", "$200", "$250"];
    if (car == "pickup") return ["$100", "$120", "$130"];
}

export function PackagePage() {
    const location = useLocation();
    const [prices, setPrices] = useState<string[]>([]);
    useEffect( ()=>{ ;
    const data = location.state 
      setPrices(priceSelector(data) ?? []);},[])


        const navigate = useNavigate();
  const deluxeIncludes = [
    "Everything in Premium Wash",
    "Exterior waxing or polish for long-lasting shine and paint protection",
    "Deep interior cleaning: carpets, upholstery, seats, and vents",
    "Engine bay cleaning to remove grime and improve longevity",
    "Stain removal and odor treatment to refresh your cabin",
    "Protective coating for paint, rims, and trim",
  ];

  const deluxeBenefits = [
    "Restores your car’s appearance to near-new condition",
    "Protects surfaces and enhances resale value",
    "Delivers a luxurious feel every time you drive",
  ];

  return (
    <div>
      <div
        onClick={() => {
          navigate(`/`);
        }}
      >
        <img src={redLogoSrc} className="w-30 pl-6 py-5 cursor-pointer" />
      </div>

      <div className="font-Bebas text-6xl text-red-600 flex justify-center items-center ">
        Select Package
      </div>
      <div className="flex flex-col gap-5 justify-center items-center py-5">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate(`/book`, { state: "sedan" });
          }}
        >
          <ItemCard
            price={prices[0]}
            img={wheel}
            title="Basic Wash"
            desc="Keep your car looking its best with a fast and efficient exterior wash. This service is perfect for removing surface dirt, dust, and grime accumulated from daily driving, rain, or dust storms. It’s ideal for car owners who want a clean, presentable vehicle without investing too much time."
            itemsB={deluxeBenefits}
            itemsI={deluxeIncludes}
          ></ItemCard>
        </div>
        <div>
          <ItemCard
            price={prices[1]}
            title="Super Wash"
            img={front}
            desc="A complete wash for drivers who want their car to look fresh inside and out. This service not only cleans the exterior thoroughly but also refreshes the interior, removing dirt, crumbs, and dust from areas often overlooked. Perfect for weekly maintenance or after long trips."
            itemsB={deluxeBenefits}
            itemsI={deluxeIncludes}
          ></ItemCard>
        </div>
        <div>
          <ItemCard
            price={prices[2]}
            img={back}
            title="Deluxe Wash"
            desc="The ultimate pampering package for your vehicle. This tier combines professional-grade exterior detailing, paint protection, and deep interior cleaning. It’s designed for car enthusiasts or anyone wanting a showroom-quality finish. Protects your investment while keeping your car spotless, both inside and out."
            itemsB={deluxeBenefits}
            itemsI={deluxeIncludes}
          ></ItemCard>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
