import React from "react";

export const ProductDetails = ({ product }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={product.image} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{product.title}</div>
      </div>
      <div class="pl-6 pt-4 pb-2">
        <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.gasType}
        </span>
        <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.pacType}
        </span>
        <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.warranty} ans
        </span>
        {product.isPacSystemModule && (
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Pac Système Module
          </span>
        )}
      </div>
          <div>
          </div>
    </div>
  );
};
