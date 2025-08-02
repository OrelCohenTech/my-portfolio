// src/components/ProjectCard.js
import React from "react";

export default function ProjectCard({ title, description, link, image }) {
  return (
    <div
      className="
        bg-white rounded-2xl overflow-hidden border border-gray-200
        transform transition-transform duration-300 ease-out
        hover:scale-105 hover:shadow-2xl
      "
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-4 py-2 rounded-lg font-medium
            bg-blue-500 text-white transition-shadow transition-transform duration-300
            hover:scale-105 hover:shadow-lg
          "
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
