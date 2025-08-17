import { Footer } from "../components/Footer";
import videoSrc from "../assets/index.mp4";
import redLogoSrc from "../assets/redLogo.png";
import black from "../assets/blackcar.png";
import white from "../assets/whitecar.png";
import blue from "../assets/blue.png";
import { useNavigate } from "react-router-dom";

import {
  BeforeAfterSliderE,
  BeforeAfterSliderW,
} from "../components/BeforeAfterSlider";
import { Gallery } from "../components/Gallery";
import { Button } from "../components/Button";

const images = [
  {
    src: white,
    width: 3,
    height: 174,
  },
  {
    src: black,
    width: 320,
    height: 50,
  },
  {
    src: blue,
    width: 320,
    height: 174,
  },
  {
    src: blue,
    width: 320,
    height: 1,
  },
  {
    src: black,
    width: 320,
    height: 1,
  },

  // add more images here
];


export function HomePage() {
    const navigate = useNavigate();

  return (
    <div>
      <div className="relative w-full h-[550px] overflow-hidden">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover z-0 will-change-transform transform-gpu"
        ></video>

        <div className="absolute inset-0 bg-black opacity-70 z-10 will-change-transform transform-gpu"></div>

        <div className="absolute inset-0 flex flex-col pt-5 pl-6 font-Bebas text-white z-20">
          <img src={redLogoSrc} className="w-30 mb" />
          <div className="pt-10">
            <div className="text-9xl">PREMIUM</div>
            <div className="text-9xl">CAR CARE</div>
            <Button on={() => navigate("/car")} text="Book Now"></Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-16 m-5">
        <div className="font-Bebas flex flex-col items-center gap-0  ">
          <div className="text-9xl text-red-600 ">5</div>
          <div className="text-2xl -mt-4 ">Years of Service</div>
        </div>
        <div className="font-Bebas flex flex-col items-center gap-0  ">
          <div className="text-9xl  text-red-600">5</div>
          <div className="text-2xl -mt-4 ">Years of Service</div>
        </div>
        <div className="font-Bebas flex flex-col items-center gap-0  ">
          <div className="text-9xl  text-red-600">5</div>
          <div className="text-2xl -mt-4 ">Years of Service</div>
        </div>
      </div>
      <div className="font-Bebas text-7xl text-red-600 flex justify-center items-center p-5">
        Services Offered
      </div>

      <div className="py-7 flex flex-col items-center justify-center gap-2">
        <BeforeAfterSliderE></BeforeAfterSliderE>
        <div className="bg-red-600 text-white font-Bebas w-137.5 h-13 text-5xl flex justify-center items-center p-9">
          Exterior Detailing
        </div>
      </div>
      <div className="py-7 flex flex-col items-center justify-center gap-2">
        <BeforeAfterSliderW></BeforeAfterSliderW>
        <div className="bg-red-600 text-white font-Bebas w-137.5 h-13 text-5xl flex justify-center items-center p-9">
          interior Detailing
        </div>
      </div>

      <div className="py-7 flex flex-col items-center justify-center gap-2">
        <BeforeAfterSliderE></BeforeAfterSliderE>
        <div className="bg-red-600 text-white font-Bebas w-137.5 h-13 text-5xl flex justify-center items-center p-9">
          Exterior Detailing
        </div>
      </div>
      <div className="py-7 flex flex-col items-center justify-center gap-2">
        <BeforeAfterSliderW></BeforeAfterSliderW>
        <div className="bg-red-600 text-white font-Bebas w-137.5 h-13 text-5xl flex justify-center items-center p-9">
          interior Detailing
        </div>
      </div>
      <div className="font-Bebas text-7xl text-red-600 flex justify-center items-center ">
        Photo Gallery
      </div>
      <div className="p-8">
        <Gallery images={images} />
      </div>
      <div className="font-Bebas text-7xl text-red-600 flex justify-center items-center ">
        Location
      </div>
      <div className="flex items-center justify-center p-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2333033401674!2d-79.45319517975935!3d43.70570040746625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33c1812985c7%3A0x5b9136c5ca16a4be!2s2806%20Dufferin%20St%2C%20North%20York%2C%20ON%20M6B%203R7%2C%20Canada!5e0!3m2!1sen!2ssa!4v1755267288145!5m2!1sen!2ssa"
          width={550}
          height={300}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>

      <Footer></Footer>
    </div>
  );
}
