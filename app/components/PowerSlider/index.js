import React from "react";

export const PowerSlider = ({ PowerValue }) => {
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
        min="1000"
        max="30000"
        step="500"
        value={PowerValue}
        onChange={updateRangeValue}
        id="PowerRange"
      />
      <output
        className="ml-4 text-gray-700"
        htmlFor="PowerRange"
        id="rangeValue"
      >
        {PowerValue}
      </output>
    </div>
  );
};
