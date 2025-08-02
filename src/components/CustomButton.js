// src/components/CustomButton.js
import React from "react";

export default function CustomButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-3 bg-green-500 text-white font-semibold rounded-lg
        transition-transform transition-shadow duration-200 ease-in-out
        hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300
      "
    >
      {children}
    </button>
  );
}
