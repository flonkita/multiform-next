"use client";

import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [formState, setFormState] = useState({
    currentStep: 1,
    choices: {
      building: "",
      heat: "",
      type: "",
      consommation: "",
    },
  });

  const [choices, setChoices]  = useState(formState.choices);

  const [products] = useState([
    {
      title: "Pompe à chaleur 1",
      powerRange: {
        min: 1000,
        max: 4999,
      },
      price: 3456,
      image: "/pompe1.jpg",
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
      image: "/pompe2.jpg",
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
      image: "/pompe3.jpg",
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
      image: "/pompe4.jpg",
      pacType: "Air/Air",
      gasType: "R380",
      warranty: 5,
      isPacSystemModule: true,
    },
  ]);

  const [card1] = useState([
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
  ]);

  const [card2] = useState([
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
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const state = {
    formState,
    setFormState,
    products,
    choices,
    setChoices,
    card1,
    card2,
    selectedProduct,
    setSelectedProduct,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
