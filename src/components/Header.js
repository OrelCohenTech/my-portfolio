import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaProjectDiagram, FaUserAlt, FaGraduationCap, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="bg-gray-50 text-gray-900 px-6 md:px-20 py-6 relative overflow-x-hidden">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Orel Cohen</h1>

        {/* Hamburger button for mobile */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 items-center text-lg font-medium">
          <li>
            <a href="#projects" className="flex items-center space-x-2 hover:text-blue-600">
              <FaProjectDiagram className="text-blue-500" /> <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center space-x-2 hover:text-green-600">
              <FaUserAlt className="text-green-500" /> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#education" className="flex items-center space-x-2 hover:text-purple-600">
              <FaGraduationCap className="text-purple-500" /> <span>Education</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center space-x-2 hover:text-red-600">
              <FaEnvelope className="text-red-500" /> <span>Contact</span>
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-700"
            >
              <FaFileAlt className="text-gray-600" /> <span>View Resume</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full bg-white w-64 shadow-lg p-8 space-y-6 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col gap-6 text-lg font-medium">
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 hover:text-blue-600">
              <FaProjectDiagram className="text-blue-500" /> <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 hover:text-green-600">
              <FaUserAlt className="text-green-500" /> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 hover:text-purple-600">
              <FaGraduationCap className="text-purple-500" /> <span>Education</span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 hover:text-red-600">
              <FaEnvelope className="text-red-500" /> <span>Contact</span>
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:text-gray-700"
            >
              <FaFileAlt className="text-gray-600" /> <span>View Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

