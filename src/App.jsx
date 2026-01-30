import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

function App() {
  const mainRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  // دالة برمجية للتحريك عند الضغط
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [showScrollUpIcon, setShowScrollUpIcon] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      scrollY > 300 ? setShowScrollUpIcon(true) : setShowScrollUpIcon(false);
    });
  }, []);
  return (
    <div>
      <div className="first-view-screen" id="up">
        <Header
          onProjectsClick={() => scrollToSection(mainRef)}
          onSkillsClick={() => scrollToSection(skillsRef)}
          onAboutClick={() => scrollToSection(aboutRef)}
          onHomeClick={() => scrollToSection(homeRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />
        <Hero ref={homeRef} />
      </div>
      <div className="divider" />
      <Skills ref={skillsRef} />
      <div className="divider" />
      <Main ref={mainRef} />
      <div className="divider" />
      <About ref={aboutRef} />
      <div className="divider" />
      <Certificates />
      <div className="divider" />
      <Contact ref={contactRef} />
      <div className="divider" />
      <Footer />

      <a
        href="#up"
        style={{ opacity: showScrollUpIcon ? 1 : 0, transition: "3s" }}
      >
        <i className="fa-solid fa-chevron-up scrollToUp"></i>
      </a>
    </div>
  );
}

export default App;
