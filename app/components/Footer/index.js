'use client';

import React from "react";
import Link from "next/link";
import { useAppContext } from "@/app/app-context";



export const Footer = ({ NbStep, currentStep, setCurrentStep }) => {

const { choices, setChoices } = useAppContext();


  console.log("currentStep:", currentStep);

  const nextStep = () => {
    if (currentStep < NbStep) {
      console.log("current before update:", currentStep);
      setCurrentStep((prevStep) => {
        console.log("current after update:", prevStep + 1);
        return prevStep + 1;
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={prevStep}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Retour
      </button>
      <div className="text-xl">{`${currentStep} / ${NbStep}`}</div>
      {currentStep < NbStep ? (
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Suivant
        </button>
      ) : (
        <Link
          href={{
            pathname: "/summary",
            query: {
              building: choices?.building || "",
              heat: choices?.heat || "",
              type: choices?.type || "",
              consommation: choices?.consommation || "",
            },
          }}
        >
          <div className="rounded-md px-3.5 py-2.5 bg-orange-300 cursor-pointer hover:bg-yellow-400">
            Terminer
          </div>
        </Link>
      )}
    </div>
  );
};
