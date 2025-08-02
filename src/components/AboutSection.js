// src/components/AboutSection.js
import { FaPython, FaJava, FaReact, FaDocker, FaGitAlt, FaLinux, FaNodeJs } from 'react-icons/fa';
import { SiCplusplus, SiC, SiMongodb, SiMysql } from 'react-icons/si';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-6 bg-white rounded-2xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">About Me</h2>
    
      <p className="text-md text-gray-600 leading-relaxed text-justify">
        I'm a second-year B.Sc. Computer Science student at HIT Holon, with strong foundations in programming (Python, Java, C++, C) 
        and hands-on experience in software development and databases.
      </p>

      {/* Skills with icons */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">🛠️ Technical Skills:</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
          {/* Programming Languages */}
          <div>
            <h4 className="font-medium mb-1">Languages</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2"><FaPython color="#3776AB" /> Python</li>
              <li className="flex items-center gap-2"><FaJava color="#f89820" /> Java</li>
              <li className="flex items-center gap-2"><SiCplusplus color="#00599C" /> C++</li>
              <li className="flex items-center gap-2"><SiC color="#A8B9CC" /> C</li>
            </ul>
          </div>

          {/* Databases */}
          <div>
            <h4 className="font-medium mb-1">Databases</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2"><SiMysql color="#00758F" /> SQL</li>
              <li className="flex items-center gap-2"><SiMongodb color="#47A248" /> MongoDB</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-medium mb-1">Tools & Platforms</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2"><FaGitAlt color="#F05032" /> Git</li>
              <li className="flex items-center gap-2"><FaDocker color="#2496ED" /> Docker</li>
              <li className="flex items-center gap-2"><FaLinux color="#FCC624" /> Linux</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <h4 className="font-medium mb-1">Frameworks</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2"><FaReact color="#61DBFB" /> React</li>
              <li className="flex items-center gap-2"><FaNodeJs color="#3C873A" /> Node.js</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fields of interest */}
      <div className="mt-6">
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
