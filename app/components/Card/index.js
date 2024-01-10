import { React } from "react";

export const Card = ({ title, imageUrl, onClick, isSelected }) => {
  return (
    <div
      className={`max-w-xs mx-auto overflow-hidden border p-5 bg-white rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out transform ${
        isSelected ? "border-yellow-500" : "border-gray-200"
      }`}
      onClick={onClick}
    >
      <div class="relative">
        <img class="w-full h-64 object-cover" src={imageUrl} alt="{imageUrl}" />
      </div>
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{title}</h3>
      </div>
    </div>
  );
};
