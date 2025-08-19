import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import redLogoSrc from "../assets/redLogo.png";
import { ItemCard } from "../components/ItemCard";
import headlight from "../assets/headlight.png";
import tint from "../assets/tinting.png"

export function AddOnsPage() {
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
          Addons
        </div>

        <div className="flex flex-col justify-center items-center gap-5 py-6">
          <div>
            <ItemCard
              img={headlight}
              title="Headlight "
              desc="Headlights can become cloudy and yellowed over time due to UV rays, dirt, and oxidation. This not only makes your vehicle look older but also reduces visibility and safety at night. Our professional headlight restoration service carefully cleans, polishes, and protects your headlights to restore crystal clarity. The result is improved brightness, enhanced safety, and a refreshed appearance—without the high cost of replacement."
              itemsB={[
                "Improved night-time visibility and safety",
                "Restored clear, like-new headlight appearance",
                "Enhanced overall vehicle look and value",
                "Cost-effective alternative to headlight replacement",
              ]}
              itemsI={[
                "Thorough cleaning of headlight lenses",
                "Removal of oxidation and yellowing",
                "Polishing to restore clarity",
                "Application of UV protective coating",
              ]}
              price="$100"
            ></ItemCard>
          </div>
          <div>
            <ItemCard
              img={tint}
              title="Window Tinting"
              desc="Window tinting not only gives your vehicle a sleek, stylish look but also provides practical benefits. Tinted windows help block harmful UV rays, reduce glare, and keep your car cooler by cutting down heat from the sun. They also add privacy and protect your interior from fading and cracking."
              itemsB={[
                "Keeps your car cooler by reducing heat buildup",
                "Blocks up to 99% of harmful UV rays",
                "Reduces glare for safer driving",
                "Enhances privacy and security",
                "Protects interior from fading and cracking",
                "Gives your vehicle a sleek, stylish look",
              ]}
              itemsI={[
                "Professional installation of premium window films",
                "Choice of tint shades to match your preference",
                "Precision cutting for a seamless fit",
                "UV protection and heat-reduction coating",
              ]} price="$50"
            ></ItemCard>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}