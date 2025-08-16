import { useEffect, useState } from "react";
import axios from "axios";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function Calender() {

  function converter(timeStr : string) {
  const hour = parseInt(timeStr, 10)+7;
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12; 
  return `${hour12} ${period}`;
}

  const [selected, setSelected] = useState<Date>();
  const [times,setTimes] = useState([])

  
  
useEffect(() => {
  if (!selected) return;
  const fetchData = async () => {
    try {
      const date = selected.toLocaleDateString("en-CA");
      console.log(date); // 2025-08-07

      console.log(selected);
      console.log(date);
      const res = await axios.get(`http://localhost:3000/events?date=${date}`);
      const data = res.data;
      setTimes(
        data.filter((x: { summary: string }) => x.summary === "Booking")
      );
      console.log(times);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    
  };

  fetchData();
}, [selected]);

  return (
    <div className="flex flex-col justify-center items-center">
      <DayPicker
        animate
        mode="single"
        selected={selected}
        onSelect={setSelected}
        classNames={{
          today: "border border-red-500",
          selected: `bg-red-400 border-red-500 text-black`,
          chevron: "",
          day: "p-2 text-m hover:bg-red-100 ",
        }}
        ///footer={selected? `Selected: ${selected.toLocaleDateString()}`: "Pick a day."}
      />

      <div className="flex flex-wrap gap-2 pl-16 pt-2">
        {times.map((x: any, index) => (
          <div
            key={index}
            className="bg-red-300 p-2 w-23 flex justify-center items-center font-BeVietnam cursor-pointer"
          >
            {converter(x.start.split("T")[1].split(":")[0])}
          </div>
        ))}
      </div>
    </div>
  );
}
