export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-10 tracking-tight">
          Education
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-12 text-left transition transform hover:scale-[1.01] duration-300">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            HIT – Holon Institute of Technology
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-1">
            B.Sc. in Computer Science – <span className="font-semibold text-blue-600">Second-year student</span>
          </p>
          <p className="text-gray-500 text-base md:text-lg">2022 – 2026 (Expected)</p>
        </div>
      </div>
    </section>
  );
}
