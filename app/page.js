"use client";

import React, { useState } from "react";
import MultistepForm from "./components/MultistepForm";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const NbStep = 5;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      {currentStep === 0 ? (
        <Home goToStep={goToStep} />
      ) : (
        <MultistepForm currentStep={currentStep} NbStep={NbStep} />
      )}
    </div>
  );
};

const Home = ({ goToStep }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-56">
      <h1 className="mb-3 text-5xl font-semibold items-center">
        Composez votre kit <br></br>
        <span className="text-yellow-400"> pompe à chaleur</span>
      </h1>
      <p>
        Vous souhaitez installer une PAC chez vous ? Composez le PAC idéal pour
        votre maison grâce à notre configurateur en ligne et gratuit.
      </p>
      <a
        onClick={() => goToStep(1)} // Aller à l'étape 1 (MultistepForm)
        className="rounded-md px-3.5 py-2.5 bg-orange-300 cursor-pointer hover:bg-yellow-400"
      >
        Commencer
      </a>
    </main>
  );
};

export default App;
