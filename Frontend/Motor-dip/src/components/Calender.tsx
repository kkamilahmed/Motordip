import { useEffect, useState } from "react";
import axios from "axios";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

type CalenderProps = {
  setObject?: (time: any) => void;
};



export function Calender({setObject} : CalenderProps) {
  function converter(timeStr: string) {
    const hour = parseInt(timeStr, 10) + 7;
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${hour12} ${period}`;
  }

  const [selected, setSelected] = useState<Date>();
  const [times, setTimes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetch] = useState(false);;

  useEffect(() => {
    if (!selected) return;

    const fetchData = async () => {
      try {
        setLoading(true); // start loader
        const date = selected.toLocaleDateString("en-CA");
        const res = await axios.get(
          `http://localhost:3000/events?date=${date}`
        );
        const data = res.data;
        console.log(data)
        setTimes(
          data.filter((x: { summary: string }) => x.summary === "Booking")
        );
      } catch (err) {
        console.error("Error fetching data:", err);
        setTimes([]); // reset to empty if error
      } finally {
        setLoading(false); // stop loader
        setFetch(true)
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
          selected: "bg-red-400 border-red-500 text-black",
          chevron: "",
          day: "p-1 text-m hover:bg-red-100 ",
        }}
      />

      {/* Loader */}
      {loading && (
        <div className="font-BeVietnam text-gray-600 pt-2 animate-pulse">
          Loading available times...
        </div>
      )}

      {/* Times list */}
      {!loading && times.length > 0 && (
        <div className="flex flex-wrap gap-2 pl-16 pt-2">
          {times.map((x: any, index) => (
            <div
              key={index}
              className="bg-red-300 p-2 w-23 flex justify-center items-center font-BeVietnam cursor-pointer" onClick={()=>{
                if (setObject) setObject(x);
                console.log(x)
              }}
            >
              {converter(x.start.split("T")[1].split(":")[0])}
            </div>
          ))}
        </div>
      )}

      {/* No bookings */}
      {fetched &&!loading && times.length === 0 && selected != null && (
        <div className="font-BeVietnam">No Bookings Available</div>
      )}
    </div>
  );
}
