"use client";
import { useContext, useEffect, useState } from "react";
import "./table.style.css";
import { API_getAllParticipats } from "@/app/api/dashboard";
import { DashboardContext } from "../../context/dashboardContext";

interface PropsTableDashboard {
  listTable: TypeParticipation[] | null;
}

export default function TableDashboard({ listTable }: PropsTableDashboard) {


  return (
    <section>
      <table className="w-full bg-white">
        <tr className="table__row">
          <th className="table__cell">&nbsp;</th>
          <th className="table__cell  table__cellHeader">First name</th>
          <th className="table__cell  table__cellHeader">Last name</th>
          <th className="table__cell  table__cellHeader">Paticipation</th>
        </tr>

        {listTable ? (
          listTable.map(({ firstName, lastName, participation }, index) => (
            <tr className="table__row" key={index}>
              <td className="table__cell text-center">{index + 1}</td>
              <td className="table__cell">{firstName}</td>
              <td className="table__cell">{lastName}</td>
              <td className="table__cell text-center">{participation}%</td>
            </tr>
          ))
        ) : (
          <tr>
            <th className="table__cell">&nbsp;</th>
            <th className="table__cell">&nbsp;</th>
            <th className="table__cell">&nbsp;</th>
            <th className="table__cell">&nbsp;</th>
          </tr>
        )}
      </table>
    </section>
  );
}
