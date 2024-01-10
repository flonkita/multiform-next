import React from "react";

export const ProgressBar = ({ currentStep, finalStep }) => {

  const progressWidth = ((currentStep - 1) / (finalStep - 1)) * 100 + "%";

  return (
    <div className="w-full bg-gray-200 h-5 rounded-md mb-4">
      <div
        className=" w-full h-full bg-yellow-500 rounded-md"
        style={{ width: progressWidth, transition: "width 0.3s ease-in-out" }}
      ></div>
    </div>
  );
};
