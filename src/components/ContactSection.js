import { SiGmail, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-8">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <p className="mb-4 text-gray-700 flex items-center space-x-2">
          <SiGmail className="text-red-600" size={24} />
          <a href="mailto:orelcohen953@gmail.com" className="text-blue-600 hover:underline">orelcohen953@gmail.com</a>
        </p>
        <p className="mb-4 text-gray-700 flex items-center space-x-2">
          <FaLinkedin className="text-blue-700" size={24} />
          <a href="https://www.linkedin.com/in/orel-cohen-expert/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/orel-cohen-expert/</a>
        </p>
        <p className="mb-4 text-gray-700 flex items-center space-x-2">
          <SiGithub className="text-gray-800" size={24} />
          <a href="https://github.com/OrelCohenTech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/OrelCohenTech</a>
        </p>
      </div>
    </section>
  );
}
