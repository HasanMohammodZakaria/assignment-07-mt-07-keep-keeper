import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimeLinesContext } from "../../context/TimeLinesContext";

const Stats = () => {
  const { timeLines } = useContext(TimeLinesContext);

  const data = [
    {
      name: "Text",
      value: timeLines?.filter((t) => t.type === "text")?.length || 0,
      fill: "#244d3f",
    },
    {
      name: "Call",
      value: timeLines?.filter((t) => t.type === "call")?.length || 0,
      fill: "#7f37f5",
    },
    {
      name: "Video",
      value: timeLines?.filter((t) => t.type === "video")?.length || 0,
      fill: "#37a163",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-15 px-4">
     
      <h2
        className="text-[#1F2937] font-bold text-left mb-8 
        text-3xl sm:text-4xl md:text-5xl lg:text-[48px]"
      >
        Friendship Analytics
      </h2>

      
      <div className="w-full bg-white shadow-md rounded-2xl p-4 sm:p-6">
     
        <h3 className="text-left text-lg font-semibold text-gray-700 mb-3">
          By Interaction Type
        </h3>

       
        <div className="flex justify-center items-center">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "320px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
          >
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={110}
              cornerRadius={50}
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />

            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
