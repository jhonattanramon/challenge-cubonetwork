"use client";
import React, { InputHTMLAttributes } from "react";
import { DashboardContext } from "../../context/dashboardContext";
import "./header.style.css";
import LoadingSignage from "../loadingSignage";

export default function HeaderDashboard() {
  const { handleSend, participant,handleChangeStateDashboard } = React.useContext(DashboardContext);
  const [isDisableButtonSend, setIsDisableButtonSend] = React.useState<boolean>(false);

  function handleSendButtonState(state: boolean) {
    setIsDisableButtonSend(state);
  }

  function cleanInputHeader() {
    participant.firstName = "";
    participant.lastName = "";
    participant.participation = 0;

    document
      .querySelectorAll("[name = headerDashboard__input]")
      .forEach((inputElement: Element) => {
        const input = inputElement as HTMLInputElement;
        input.value = "";
      });
  }

  function handleError(errorMessage: string) {
    const campForErrror = document.getElementById(
      "campForError"
    ) as HTMLElement;
    campForErrror.innerHTML = errorMessage;

    setTimeout(() => (campForErrror.innerHTML = ""), 1500);
  }

  return (
    <>
      <header className="headerDashboard">
        <div className="headerDashboard__divInput">
          <input
            name={"headerDashboard__input"}
            type="text"
            placeholder="First name"
            className="inputHeaderDashboard"
            onChange={({ target }) => (participant.firstName = target.value)}
          />
          <input
            name={"headerDashboard__input"}
            type="text"
            placeholder="Last name"
            className="inputHeaderDashboard"
            onChange={({ target }) => (participant.lastName = target.value)}
          />
          <input
            name={"headerDashboard__input"}
            type="number"
            placeholder="Particiption (1 - 100)"
            className="inputHeaderDashboard"
            onChange={({ target }) =>
              (participant.participation = Number(target.value))
            }
          />
          <button
            disabled={isDisableButtonSend}
            onClick={async () => {
              handleSendButtonState(true);
              await handleSend()
                .then(() => {
                  handleChangeStateDashboard()
                  cleanInputHeader()
                })
                .catch((err) => handleError(err))
                .finally(() => {
                  handleSendButtonState(false);
                });
            }}
            className="buttonSendHeaderDashboard"
          >
            {isDisableButtonSend ? <LoadingSignage /> : null}
            send
          </button>
        </div>
        <div>
          <p id="campForError"></p>
        </div>
      </header>
    </>
  );
}
