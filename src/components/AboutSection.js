// src/components/AboutSection.js
export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-6 bg-white rounded-2xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">About Me</h2>
      <p className="text-lg text-gray-700 text-center mb-4">
        👨‍💻 Computer Science Student | Passionate About Software Development, AI & Cybersecurity
      </p>
      <p className="text-md text-gray-600 leading-relaxed text-justify">
        I'm a second-year B.Sc. Computer Science student at HIT Holon, with strong foundations in programming (Python, Java, C++, C) 
        and hands-on experience in software development and databases.
        I enjoy building real-world projects, solving problems, and continuously expanding my skill set. I'm highly interested in entering 
        the fields of AI and Cybersecurity and I'm actively learning and working on personal projects to gain practical experience.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">🛠️ Technical Skills:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Python, Java, C++, C</li>
          <li>SQL, MongoDB</li>
          <li>Git, Docker, Linux</li>
          <li>React, Node.js</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">🎯 Fields of Interest:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Artificial Intelligence</li>
          <li>Cybersecurity</li>
          <li>Software Engineering</li>
          <li>DevOps</li>
        </ul>
      </div>
    </section>
  );
}
