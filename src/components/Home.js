import React from "react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-20 py-20 gap-12">
        {/* TEXT AREA */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Hello, I'm <span className="text-sky-500">Orel Cohen</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
            A passionate Computer Science student and software developer who
            loves building web apps, solving problems, and learning new
            technologies.
          </p>
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            View My Projects
          </a>
        </div>
<div className="flex-1">
  <img
    src="/computer.svg"
    alt="Coding illustration"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
  />
</div>

      </section>

    </>
  );
}
