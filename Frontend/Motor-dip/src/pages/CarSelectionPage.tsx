import { Footer } from "../components/Footer";
import redLogoSrc from "../assets/redLogo.png";
import hatch from "../assets/hatch.png";
import pickup from "../assets/pickup.png";
import sedan from "../assets/sedan.png";
import suv from "../assets/suv.png";
import { useNavigate } from "react-router-dom";



export function CarSelectionPage(){
  const navigate = useNavigate();
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
          Select Your Car
        </div>
        <div className="flex justify-center  items-center">
          <div className="bg-[#fffff] w-140 h-200 flex flex-col justify-center items-center gap-5">
            <div
              className="w-90 h-40 relative overflow-hidden cursor-pointer"
              onClick={() => {
                navigate(`/choose`, { state: "sedan" });
              }}
            >
              <img src={sedan} className="w-full h-full object-cover " />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="flex justify-center items-center absolute inset-0 font-Bebas text-white text-8xl">
                SEDAN
              </div>
            </div>

            <div
              className="w-90 h-40 relative overflow-hidden cursor-pointer"
              onClick={() => {
                navigate(`/choose`, { state: "hatchback" });
              }}
            >
              <img src={hatch} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="flex justify-center items-center absolute inset-0 font-Bebas text-white text-8xl">
                HATCHBACK
              </div>
            </div>

            <div
              className="w-90 h-40 relative overflow-hidden cursor-pointer"
              onClick={() => {
                navigate(`/choose`, { state: "pickup" });
              }}
            >
              <img src={pickup} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="flex justify-center items-center absolute inset-0 font-Bebas text-white text-8xl">
                PICKUP
              </div>
            </div>

            <div
              className="w-90 h-40 relative overflow-hidden cursor-pointer"
              onClick={() => {
                navigate(`/choose`, { state: "suv" });
              }}
            >
              <img src={suv} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="flex justify-center items-center absolute inset-0 font-Bebas text-white text-8xl">
                SUV
              </div>
            </div>
          </div>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </div>
    );
}