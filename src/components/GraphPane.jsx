import React, { useState, useMemo } from "react";
import { FaTemperatureLow } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { IoRainyOutline } from "react-icons/io5";
import CanvasJSReact from "@canvasjs/react-charts";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Card = ({ title, value, icon }) => {
  return (
    <div className="shadow-lg p-4 rounded-lg flex flex-col gap-4 bg-neutral-200 md:min-w-[200px]">
      <div className="text-xl text-neutral-600">{title}</div>
      <div className="text-4xl flex gap-4 items-center">
        <div className="text-3xl text-[#00d4ad]">{icon}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};

const GraphPane = () => {
  const [avgTemp, setAvgTemp] = useState(25.6);
  const [avgRainfall, setAvgRainfall] = useState(2213.4);
  const [avgHumidity, setAvgHumidity] = useState(60);
  const [currentTemp, setCurrentTemp] = useState(31.4);

  const prevWeekTemp = [25, 27, 30, 24, 28, 25, 29];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const options = {
    animationEnabled: true,
    theme: "light2",
    backgroundColor: "#e5e5e5",
    dataPointMaxWidth: window.innerWidth > 600 ? 60 : 10,
    toolTip: {
      cornerRadius: 5,
    },
    title: {
      text: "Temperature (Past Week)",
    },
    axisX: {
      title: "Days",
    },
    axisY: {
      title: "Temperature",
      includeZero: true,
      valueFormatString: "## °C",
    },
    data: [
      {
        type: "column",
        indexLabel: "{label[0]}{label[1]}{label[2]}: {y}",
        indexLabelPlacement: "outside",
        yValueFormatString: "##°C",
        dataPoints: [
          { label: days[0], y: prevWeekTemp[0], color: "#00d4ad" },
          { label: days[1], y: prevWeekTemp[1], color: "#00d4ad" },
          { label: days[2], y: prevWeekTemp[2], color: "#00d4ad" },
          { label: days[3], y: prevWeekTemp[3], color: "#00d4ad" },
          { label: days[4], y: prevWeekTemp[4], color: "#00d4ad" },
          { label: days[5], y: prevWeekTemp[5], color: "#00d4ad" },
          { label: days[6], y: prevWeekTemp[6], color: "#00d4ad" },
        ],
      },
    ],
  };

  return (
    <div className="w-[80vw] flex flex-col max-md:mb-10 max-md:w-[90vw]">
      <div className="flex gap-12  mt-10 ml-10 mr-10 max-md:flex-col max-md:mr-0 max-md:w-full max-md:ml-5 max-md:gap-5">
        <Card
          title="Avg. Temperature"
          value={`${avgTemp} °C`}
          icon={<FaTemperatureLow />}
        />
        <Card
          title="Avg. Humidity"
          value={`${avgHumidity}%`}
          icon={<FaDroplet />}
        />
        <Card
          title="Avg. Rainfall"
          value={`${avgRainfall}mm`}
          icon={<IoRainyOutline />}
        />
        <Card
          title="Current Temperature"
          value={`${currentTemp} °C`}
          icon={<FaTemperatureLow />}
        />
      </div>
      <div className="mx-10 max-md:ml-5 mt-10 max-md:mt-5 bg-neutral-200 p-4 rounded-lg shadow-lg max-md:w-full">
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
};

export default GraphPane;
