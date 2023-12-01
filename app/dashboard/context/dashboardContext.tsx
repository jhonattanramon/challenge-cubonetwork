import { API_addParticipation } from "@/app/api/dashboard";
import React, { ReactNode, createContext, useState } from "react";

interface PropsDashboardProvider {
  children: ReactNode;
}

interface DataParticipant {
  firstName: string;
  lastName: string;
  participation: number;
}

interface TypeDashboardContext {
  handleSend: () => Promise<void>;
  handleChangeStateDashboard: () => void;
  participant: DataParticipant;
  stateChangeDashboard: number;
}

async function handleSend() {
  const isNumberRegex = /\d+/;
  if (
    participant.firstName === "" ||
    isNumberRegex.test(participant.firstName) ||
    isNumberRegex.test(participant.lastName) ||
    participant.lastName === "" ||
    participant.participation <= 0 ||
    participant.participation > 100
  ) {
    throw "Preencha os campos corretamente";
  }
  return await API_addParticipation(participant);
}

const participant: DataParticipant = {
  firstName: "",
  lastName: "",
  participation: 0,
};

export const DashboardContext = createContext({} as TypeDashboardContext);

export default function DashboardProvider({
  children,
}: PropsDashboardProvider) {
  const [stateChangeDashboard, setStateChangeDashboard] = useState<number>(0);

  function handleChangeStateDashboard() {
    setStateChangeDashboard((prevState: number) => prevState + 1);
  }
  return (
    <DashboardContext.Provider
      value={{
        handleSend,
        handleChangeStateDashboard,
        participant,
        stateChangeDashboard,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
