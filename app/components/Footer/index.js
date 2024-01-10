import React from "react";


const products = [
  {
    title: "Pompe à chaleur 1",
    powerRange: {
      min: 1000,
      max: 4999,
    },
    price: 3456,
    image: "",
    pacType: "Air/Eau",
    gasType: "R330",
    warranty: 2,
    isPacSystemModule: true,
  },
  {
    title: "Pompe à chaleur 2",
    powerRange: {
      min: 5000,
      max: 10000,
    },
    price: 5678,
    image: "",
    pacType: "Air/Air",
    gasType: "R430",
    warranty: 3,
    isPacSystemModule: true,
  },
  {
    title: "Pompe à chaleur 3",
    powerRange: {
      min: 10000,
      max: 15000,
    },
    price: 7890,
    image: "",
    pacType: "Air/Eau",
    gasType: "R380",
    warranty: 4,
    isPacSystemModule: true,
  },
  {
    title: "Pompe à chaleur 4",
    powerRange: {
      min: 15000,
      max: 30000,
    },
    price: 1234,
    image: "",
    pacType: "Air/Air",
    gasType: "R380",
    warranty: 5,
    isPacSystemModule: true,
  },
];

const NbStep = products.length + 1;

export const Footer = ({ currentStep,setCurrentStep }) => {
  // const [currentStep, setCurrentStep] = React.useState(0);

  console.log("currentStep:", currentStep);

  const nextStep = () => {
    if (currentStep < NbStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const showProduct = () => {
    // Afficher les détails du produit ou effectuer d'autres actions
    console.log(products[currentStep - 1]);
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
        <button
          onClick={showProduct}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Voir le produit
        </button>
      )}
    </div>
  );
};
