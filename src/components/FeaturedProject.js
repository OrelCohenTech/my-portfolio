// src/components/FeaturedProject.jsx
import React from "react";

export default function FeaturedProject() {
  return (
    <section id="featured" className="py-16 bg-white rounded-xl shadow-lg max-w-5xl mx-auto">
      <div className="md:flex md:items-center">
        {/* תמונת הפרויקט */}
        <div className="md:w-1/2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/RMS_Titanic_3.jpg"
            alt="Titanic Survival Prediction"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>

        {/* תיאור וטכנולוגיות */}
        <div className="mt-8 md:mt-0 md:ml-12 md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Titanic Survival Prediction
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Machine learning project that predicts Titanic passenger survival using logistic regression,
            decision trees and ensemble methods. Includes data preprocessing, feature engineering,
            model evaluation (accuracy, precision, recall) and interactive visualizations.
          </p>

          {/* רשימת טכנולוגיות */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Tech Stack:</h3>
            <ul className="flex flex-wrap gap-3">
              {["Python", "Pandas", "scikit‑learn", "Matplotlib", "Seaborn"].map((tech) => (
                <li
                  key={tech}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* כפתורים */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/OrelCohen/titanic-predictor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              View Code
            </a>
            <a
              href="https://your-live-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
