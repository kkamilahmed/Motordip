import { Footer } from "../components/Footer";
import redLogoSrc from "../assets/redLogo.png";
import { Calender } from "../components/Calender";
import { TextBox } from "../components/TextBox";
import { Phone, Mail , User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function DetailsPage() {
    const navigate = useNavigate();
    const [selectedTime, setSelectedTime] = useState<any>(null);

  return (
    <div>
      <div
        onClick={() => {
          navigate(`/`);
        }}
      >
        <img src={redLogoSrc} className="w-30 pl-6 py-5 cursor-pointer" />
      </div>

      <div className="font-Bebas text-5xl text-red-600 flex justify-center items-center ">
        Select Date and Time
      </div>
      <div className="flex justify-center items-center py-5">
        <Calender setObject={setSelectedTime}></Calender>
      </div>
      <div className="font-Bebas text-5xl text-red-600 flex justify-center items-center p-5 ">
        Contact Information
      </div>
      <div className="flex flex-wrap gap-5 justify-center pb-10">
        <TextBox placeholder="First Name" icon={User}></TextBox>
        <TextBox placeholder="Last Name" icon={User}></TextBox>
        <TextBox placeholder="Phone Number " icon={Phone}></TextBox>
        <TextBox placeholder="Email" icon={Mail}></TextBox>
      </div>
      <Footer></Footer>
    </div>
  );
}
