"use client";
import { ChartData } from "chart.js";
import ChartPizzaDashboard from "./components/chartPizzaDashboard";
import TableDashboard from "./components/table";
import { useContext, useEffect, useState } from "react";
import { API_getAllParticipats } from "../api/dashboard";
import { DashboardContext } from "./context/dashboardContext";
import LoadingSignage from "./components/loadingSignage";

interface PropsDashboardPage {
  dataToChart: ChartData<"doughnut">;
}

export default function DeashboardPage({ dataToChart }: PropsDashboardPage) {
  const {  stateChangeDashboard } = useContext(DashboardContext);
  const [participations, setParticipations] = useState<
    TypeParticipation[] | null
  >(null);

  useEffect(() => {
    (async () => {
      await API_getAllParticipats()
        .then(({ data }) => setParticipations(data))
        .catch((err) => console.error(err));
    })();
  }, [stateChangeDashboard]);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-3">
        <h1 className="font-bold">Data</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      <div className="flex justify-around items-start p-20">
        <span className="flex-1">
          <TableDashboard listTable={participations} />
        </span>

        <span className="flex flex-1 justify-center items-center">
          {participations ? (
            <ChartPizzaDashboard participations={participations} />
          ) : (
            <LoadingSignage />
          )}
        </span>
      </div>
    </>
  );
}
