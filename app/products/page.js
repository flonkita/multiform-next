"use client";

import React, { useState, useContext } from "react";
import { useAppContext } from "../app-context";
import { Card, Footer, Header, ProgressBar, HeatSlider, PowerSlider, ProductDetails} from "../components";

export default () => {
  const { products, card1, card2 } = useAppContext();

  const [currentStep, setCurrentStep] = useState(1);

  const NbStep = products.length + 1;

  const [selections, setSelections] = React.useState(Array(NbStep).fill(null));

  const [choice, setChoice] = useState({});

  const handleSelection = (step, selectedValue) => {

    setChoice((prevChoice) => ({
      ...prevChoice,
      [step]: selectedValue,
    }));

    console.log("Choices so far:", choice);


    const updatedSelections = [...selections];
    updatedSelections[step - 1] = selectedValue;
    setSelections(updatedSelections);
  };

  const filteredProducts = products.filter((product) => {
    // Comparez les propriétés du produit avec les choix correspondants
    return (
      product.powerRange.min <= choice[4] &&
      product.powerRange.max >= choice[4]
    );
  });

  const selectedProduct = filteredProducts[0];

  console.log(selectedProduct);

  return (
    <section className="flex flex-col items-center w-full ">
      <Header />
      <ProgressBar currentStep={currentStep} finalStep={NbStep} />
      <div className="w-3/4 h-4/5 p-4 rounded-md ">
        <>
          {currentStep === 1 && (
            <div className="flex flex-col w-full mb-4">
              <h1 className=" text-3xl size-2/5 text-center font-bold m-16">
                Quel type de bâtiment souhaitez vous équiper ?
              </h1>
              <div className=" flex flex-row justify-evenly ">
                {card1 &&
                  card1.map((card) => (
                    <Card
                      key={card.title}
                      title={card.title}
                      imageUrl={card.imageUrl}
                      onClick={() => handleSelection(currentStep, card.title)}
                      isSelected={selections[currentStep - 1] === card.title}
                    />
                  ))}
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <div className="flex flex-col w-full mb-4">
                <h1 className=" text-5xl size-2/5 text-center font-bold m-20">
                  A quelle température chauffez vous en moyenne cette surface ?
                </h1>
                <HeatSlider
                  value={selections[currentStep - 1]}
                  onSelection={(value) => handleSelection(currentStep, value)}
                  isSelected={selections[currentStep - 1] === HeatSlider.value}
                />
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <div className="flex flex-col w-full mb-4">
                <h1 className=" text-5xl  size-2/5 text-center font-bold my-10">
                  Quel est votre type de chauffage principal ?
                </h1>
                <div className=" flex flex-col md:flex-row justify-evenly my-10 ">
                  {card2 && card2.map((card) => (
                      <Card
                        key={card.title}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        onClick={() => handleSelection(currentStep, card.title)}
                        isSelected={selections[currentStep - 1] === card.title}
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
                <PowerSlider
                  value={selections[currentStep - 1]}
                  onSelection={(value) => handleSelection(currentStep, value)}
                  isSelected={selections[currentStep - 1] === PowerSlider.value}
                />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <div className="flex flex-col items-center md:flex-row w-full mb-4">
                <h1 className=" text-5xl size-2/5 text-left font-bold m-20">
                  Merci pour ces informations !<br />
                  Nous avons choisi cette pompe à chaleur pour vous
                </h1>
                <ProductDetails product={selectedProduct} />
              </div>
            </div>
          )}
        </>
      </div>
      <Footer
        NbStep={NbStep}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        selections={choice}
        isSelected
      />
    </section>
  );
};
