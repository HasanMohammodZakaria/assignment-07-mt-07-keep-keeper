import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimeLinesContext } from "../../context/TimeLinesContext";

const Stats = () => {
  const { timeLines } = useContext(TimeLinesContext);

 
  const data = [
    {
      name: "Text",
      value: timeLines?.filter((t) => t.type === "text")?.length || 0,
      fill: " #244d3f",
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
    <div className="w-full flex flex-col items-center justify-center mt-15">

     
      <div className="w-full max-w-125 sm:max-w-150">

     
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>

      </div>

    </div>
  );
};

export default Stats;


