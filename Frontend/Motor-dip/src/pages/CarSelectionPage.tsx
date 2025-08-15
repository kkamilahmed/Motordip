import { Footer } from "../components/Footer";
import redLogoSrc from "../assets/redLogo.png";

export function CarSelectionPage(){
    return (
      <div>
        <img src={redLogoSrc} className="w-30 pl-6 py-5" />
        <div className="font-Bebas text-7xl text-red-600 flex justify-center items-center ">
          Select Your Car
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
}