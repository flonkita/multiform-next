'use client'
import React from "react";
import { useAppContext } from "../app-context";


export default function Summary() {
  const { formState } = useAppContext();
  const { choices, selectedProduct } = formState;

  console.log("Choices:", choices);

  // Extrait les choix de l'objet contextuel
  const { building, heat, type, consommation } = choices || {};

  console.log("Building:", building);
  console.log("Heat:", heat);
  console.log("Type:", type);
  console.log("Consommation:", consommation);

  return (
    <div>
      <h1>Votre kit pompe à chaleur est prêt !</h1>
      {type}
      <p>
        Vous avez une {`${building}`} que vous chauffez à {`${heat}`} à
        {`${type}`}. Vous consommez {`${consommation}`} kwh/an. Nous avons
        selectionné pour vous la {selectedProduct?.title}
      </p>
    </div>
  );
}
