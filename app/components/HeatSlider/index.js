import React from "react";

export const HeatSlider = ({ HeatValue }) => {
  const updateRangeValue = (event) => {
    const newRangeValue = event.target.value;
    // Mettez à jour directement la sortie ici
    document.querySelector("#rangeValue").textContent = newRangeValue;
  };

  return (
    <div className="flex items-center">
      <input
        type="range"
        className="w-full"
        min="14"
        max="38"
        step="1"
        value={HeatValue}
        onChange={updateRangeValue}
        id="HeatRange"
      />
      <output className="ml-4 text-gray-700" htmlFor="HeatRange" id="rangeValue">
        {HeatValue}
      </output>
    </div>
  );
};




