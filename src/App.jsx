import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


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
