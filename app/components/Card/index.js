import { React } from "react";

export const Card = ({ title, imageUrl, onClick, selected }) => {
  return (
    <div
      class="max-w-xs mx-auto overflow-hidden border border-gray-200 p-5 bg-white rounded-lg shadow-md"
      onClick={onClick}
      style={
        selected && {
          borderColor: "red",
        }
      }
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
