import React from "react";

const projects = [
  {
    title: "Titanic Survival Prediction",
    description:
      "Machine learning project that predicts Titanic passenger survival using logistic regression and decision trees. Includes feature engineering and evaluation metrics.",
    github: "https://github.com/OrelCohenTech/titanic-ml-assignment",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/RMS_Titanic_3.jpg",
  },
  {
    title: "Pacman Game",
    description:
      "A fun Pacman game clone made with JavaScript and HTML5 Canvas. Includes ghost AI and player scoring.",
    github: "https://github.com/OrelCohenTech/Create_Pacman",
    image: "https://upload.wikimedia.org/wikipedia/he/5/59/Pac-man.png",
  },
];

export default function ProjectsSection() {
  return (

    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
