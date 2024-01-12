import React, { useState } from "react";

export const HeatSlider = ({ HeatValue, onSelection }) => {
  const [displayValue, setDisplayValue] = useState(`${HeatValue}°C`);

  const updateRangeValue = (event) => {
    const newRangeValue = event.target.value;
    setDisplayValue(`${newRangeValue}°C`);
    // Appeler la fonction de gestion de la sélection avec la nouvelle valeur
    onSelection(newRangeValue);
  };

  return (
    <div className="flex items-center">
      <input
        type="range"
        className="w-full"
        min="14"
        max="38"
        step="1"
        defaultValue={12}
        value={HeatValue}
        onChange={updateRangeValue}
        id="HeatRange"
      />
      <output
        className="ml-4 text-gray-700"
        htmlFor="HeatRange"
        id="rangeValue"
      >
        {displayValue}
      </output>
    </div>
  );
};




