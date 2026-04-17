import React, { useContext, useState } from "react";
import { TimeLinesContext } from "../../context/TimeLinesContext";
import { PiChatCircleTextFill } from "react-icons/pi";
import { IoCall, IoChevronDown } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";

const TimeLine = () => {
  const { timeLines } = useContext(TimeLinesContext);

  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);

  
  const filteredData = (timeLines || []).filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const iconGet = (type) => {
    if (type === "call") {
      return <IoCall className="text-[26px] sm:text-[32px] md:text-[40px]" />;
    } 
    else if (type === "text") {
      return (
        <PiChatCircleTextFill className="text-[26px] sm:text-[32px] md:text-[40px]" />
      );
    } 
    else if (type === "video") {
      return <FaVideo className="text-[26px] sm:text-[32px] md:text-[40px]" />;
    }
  };

  return (
    <div className="max-w-full md:max-w-285 px-4 mx-auto mt-10">

      <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#1F2937] mb-3 sm:mb-4">
        Timeline
      </h2>

    
      <div className="relative inline-block mb-5 sm:mb-6">
        <button
          onClick={() => setOpen(!open)}
          className="px-3 sm:px-4 py-2 bg-gray-200 rounded flex items-center gap-2 text-[14px] sm:text-[16px]"
        >
          {filter === "all" && "Filter Timeline"}
          {filter === "text" && "Text"}
          {filter === "call" && "Call"}
          {filter === "video" && "Video"}

          <IoChevronDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute left-0 mt-2 w-36 sm:w-40 bg-white shadow-md rounded z-10">
            <ul className="flex flex-col text-[14px] sm:text-[16px]">

              <li
                onClick={() => {
                  setFilter("all");
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                All
              </li>

              <li
                onClick={() => {
                  setFilter("text");
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Text
              </li>

              <li
                onClick={() => {
                  setFilter("call");
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Call
              </li>

              <li
                onClick={() => {
                  setFilter("video");
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Video
              </li>

            </ul>
          </div>
        )}
      </div>

     
      {filteredData.length === 0 ? (
        <h2 className="text-2xl font-bold text-black">No Friends Data Found!</h2>
      ) : (
        filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-md flex gap-3 sm:gap-4 items-center px-4 sm:px-5 py-4 sm:py-7 rounded-lg mb-4 sm:mb-5"
          >
            <div>{iconGet(item.type)}</div>

            <div className="flex flex-col gap-1 sm:gap-2">
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px]">
                <span className="font-medium text-[#244D3F] mr-1">
                  {item.type?.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
                <span className="text-[#64748B]">with {item.name}</span>
              </h3>

              <p className="text-[12px] sm:text-[14px] text-[#64748B]">
                {item.date}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TimeLine;
