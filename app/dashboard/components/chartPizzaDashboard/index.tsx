"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./chartPizza.style.css";
import { handleDataToChart } from "../../utils";

interface PropsPizzaChart {
  participations: TypeParticipation[];
}

const PizzaChart = ({ participations }: PropsPizzaChart) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = handleDataToChart({ pacipations: participations });

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1">
        <Doughnut data={data} />
      </div>

      <div className="flex flex-col gap-3 flex-wrap  h-full">
        {data.datasets
          .flatMap(({ backgroundColor }, index) => backgroundColor)
          .map((color, index) =>{
            return  (
            <div key={index} className="flex gap-2 items-center">
              <span style={{
                width: 35,
                height:35,
                backgroundColor: `${color}`,
                borderRadius: 5
              }}></span>
              <span className="font-medium text-sm capitalize" style={{
                color: `${color}`
              }}>{`${participations[index].firstName} ${participations[index].lastName}`}</span>
            </div>
          )})}
      </div>
    </div>
  );
};

export default PizzaChart;
