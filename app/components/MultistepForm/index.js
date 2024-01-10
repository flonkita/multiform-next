"use client";
import React from "react";
import Image from "next/image";
import { ProgressBar } from "../ProgressBar";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { HeatSlider } from "../HeatSlider";
import { Card } from "../Card";
import { PowerSlider } from "../PowerSlider";
import { ProductDetails } from "../ProductDetails";

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

const card1 = [
  {
    title: "Maison",
    imageUrl: "/maison.jpg",
  },
  {
    title: "Immeuble",
    imageUrl: "/immeuble.jpg",
  },
  {
    title: "Bureaux",
    imageUrl: "/bureaux.jpg",
  },
];
const card2 = [
  {
    title: "Électricité",
    imageUrl: "/electricite.jpg",
  },
  {
    title: "Gaz",
    imageUrl: "/gaz.jpg",
  },
  {
    title: "Bois",
    imageUrl: "/bois.jpg",
  },
];

const [selections, setSelections] = React.useState(Array(NbStep).fill(null));

const handleSelection = (step, selectedValue) => {
  const updatedSelections = [...selections];
  updatedSelections[step - 1] = selectedValue;
  setSelections(updatedSelections);
};


const NbStep = products.length + 1;

const MultistepForm = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <div className="flex flex-col items-center w-full ">
      <Header />

      <ProgressBar currentStep={currentStep} finalStep={NbStep} />

      <div className="w-3/4 h-4/5 p-4 rounded-md ">
        {currentStep !== NbStep + 1 ? (
          <>
            {currentStep === 1 && (
              <div class="flex flex-col w-full mb-4">
                <h1 class=" text-3xl size-2/5 text-center font-bold m-16">
                  Quel type de bâtiment souhaitez vous équiper ?
                </h1>
                <div className=" flex flex-row justify-evenly ">
                  {card1.map((card) => (
                    <Card
                      key={card.title}
                      title={card.title}
                      imageUrl={card.imageUrl}
                      onClick={() => handleSelection(currentStep, card.title)}
                    />
                  ))}
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <div class="flex flex-col w-full mb-4">
                  <h1 class=" text-5xl size-2/5 text-center font-bold m-20">
                    A quelle température chauffez vous en moyenne cette surface
                    ?
                  </h1>
                  <HeatSlider value={22} />
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <div class="flex flex-col w-full mb-4">
                  <h1 class=" text-5xl size-2/5 text-center font-bold my-10">
                    Quel est votre type de chauffage principal ?
                  </h1>
                  <div className=" flex flex-col md:flex-row justify-evenly my-10 ">
                    {card2.map((card) => (
                      <Card
                        key={card.title}
                        title={card.title}
                        imageUrl={card.imageUrl}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div>
                <div class="flex flex-col w-full mb-4">
                  <h1 class=" text-5xl size-2/5 text-center font-bold m-20">
                    Quelle est votre consommation en kWh chaque année ?
                  </h1>
                  <PowerSlider value={5000} />
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <div class="flex flex-col md:flex-row w-full mb-4">
                  <h1 class=" text-5xl size-2/5 text-left font-bold m-20">
                    Merci pour ces informations !<br />
                    Nous avons choisi cette pompe à chaleur pour vous
                  </h1>
                  <ProductDetails product={products[currentStep - 2]} />
                </div>
              </div>
            )}

            <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
          </>
        ) : (
          <>
            <ProductDetails product={products[currentStep - 2]} />
          </>
        )}
      </div>
    </div>
  );
};

export default MultistepForm;
