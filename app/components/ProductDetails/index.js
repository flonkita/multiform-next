import React from "react";

export const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={product.image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
      </div>
      <div className="pl-6 pt-4 pb-2">
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.gasType}
        </span>
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.pacType}
        </span>
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
