import { useEffect, useState } from "react";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/Hero";
import Skills from "./components/3-skills/Skills"
import Main from "./components/4-main/Main";
import About from "./components/5-about/About";
import Services from "./components/6-services/Services";
import Contact from "./components/7-contact/Contact";
import Footer from "./components/8-footer/Footer";


function App() {
  const [showScrollUpIcon, setShowScrollUpIcon] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      scrollY > 300 ? setShowScrollUpIcon(true) : setShowScrollUpIcon(false);
    });
  }, []);
  return (
    <div>
      <div className="first-view-screen" id="up">
        <Header />
        <Hero />
      </div>
      <div className="divider" />
      <Skills/>
      <div className="divider" />
      <Main />
      <div className="divider" />
      <About/>
      <div className="divider" />
      <Services/>
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        href="#up"
        style={{ opacity: showScrollUpIcon ? 1 : 0, transition: "3s" }}
      >
        <i class="fa-solid fa-chevron-up scrollToUp"></i>
      </a>
    </div>
  );
}

export default App;
