import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePageClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div onClick={handlePageClick} className="relative overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="bg-[#f9fafb] text-gray-900 px-6 md:px-20 py-10 space-y-24">
         <Home />
        <ProjectsSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
