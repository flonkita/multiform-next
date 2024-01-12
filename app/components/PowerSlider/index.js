import React, { useState } from "react";

export const PowerSlider = ({ PowerValue, onSelection }) => {
  const [displayValue, setDisplayValue] = useState(`${PowerValue} KWh`);

  const updateRangeValue = (event) => {
    const newRangeValue = event.target.value;
    setDisplayValue(`${newRangeValue} KWh`);
    onSelection(newRangeValue);
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
      <p className="ml-4 text-gray-700" htmlFor="PowerRange" id="rangeValue">
        {displayValue}
      </p>
    </div>
  );
};
