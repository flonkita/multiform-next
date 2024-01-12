import React from "react";
import { AppContextProvider } from "@/app/app-context";
import SummaryComponent from "../summary"; // Assurez-vous que le chemin est correct

function Summary() {
  return (
    <AppContextProvider>
      <SummaryComponent />
    </AppContextProvider>
  );
}

export default Summary;
