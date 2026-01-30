// React Liberary
import { useEffect, useState } from "react";

export default function Header({
  onSkillsClick,
  onProjectsClick,
  onAboutClick,
  onHomeClick,
  onContactClick,
}) {
  const [showModal, setShowModal] = useState(false);
  const [changeBgHeader, setChangeBgHeader] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("theme") ?? "dark");
  const [anyButtomActive, setAnyButtomActive] = useState("Home") 

  addEventListener("scroll", () => {
    scrollY > 400 ? setChangeBgHeader(true) : setChangeBgHeader(false);
  });

  function handleModeClick() {
    document.body.classList.remove(mode);
    mode === "dark" ? setMode("light") : setMode("dark");
  }

  useEffect(() => {
    document.body.classList.add(mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    // HEADER
    <header
      style={{
        // background: changeBgHeader ? "#00000038" : "transparent",
        backdropFilter: changeBgHeader ? "blur(20px)" : "",
      }}
      className="fixed left-0 right-0 top-0 z-50 py-5 rounded-b-md text-(--text) bg-(--bg)"
    >
      <div className="container flex justify-between items-center h-12">
        <h4 className="logo text-4xl font-semibold cursor-pointer">CodeOver</h4>

        {/* NAV */}
        <nav
          className={`${
            showModal
              ? " absolute left-0 right-0 top-full bg-(--bg) flex flex-col  rounded-md animate-[]"
              : "hidden"
          } lg:flex lg:relative lg:flex-row lg:top-0 gap-3 py-3 px-6 rounded-md`}
        >
          <button
            className={`${anyButtomActive == "Home" ? "bg-white text-black font-bold":""} hover:bg-white hover:text-black hover:font-bold rounded-md py-3 px-4  text-xl transition-all duration-300`}
            onClick={() => {
              onHomeClick();
              setShowModal(false);
              setAnyButtomActive("Home")
            }}
          >
            Home
          </button>

          <button
            className={`${anyButtomActive == "Skills" ? "bg-white text-black font-bold":""} hover:bg-white hover:text-black hover:font-bold rounded-md py-3 px-4  text-xl transition-all duration-300`}
            onClick={() => {
              onSkillsClick();
              setShowModal(false);
              setAnyButtomActive("Skills")
            }}
          >
            Skills
          </button>

          <button
            className={`${anyButtomActive == "Projects" ? "bg-white text-black font-bold":""} hover:bg-white hover:text-black hover:font-bold rounded-md py-3 px-4 text-xl transition-all duration-300`}
            onClick={() => {
              onProjectsClick();
              setShowModal(false);
              setAnyButtomActive("Projects")
            }}
          >
            Projects
          </button>

          <button
            className={`${anyButtomActive == "About" ? "bg-white text-black font-bold":""} hover:bg-white hover:text-black hover:font-bold rounded-md py-3 px-4 text-xl transition-all duration-300`}
            onClick={() => {
              onAboutClick();
              setShowModal(false);
              setAnyButtomActive("About")
            }}
          >
            About Me
          </button>

          <button
            className={` ${anyButtomActive == "Contact" ? "bg-white text-black font-bold":""} hover:bg-white hover:text-black hover:font-bold rounded-md py-3 px-4 text-xl transition-all duration-300`}
            onClick={() => {
              onContactClick();
              setShowModal(false);
              setAnyButtomActive("Contact")
            }}
          >
            Contact Us
          </button>
        </nav>
        {/*==== NAV ====*/}

        <div className="flex gap-4 cursor-pointer">
          {/* MODE */}
          <div className="mode" onClick={handleModeClick}>
            {mode === "dark" ? (
              <i className="fa-regular fa-moon moon-icon"></i>
            ) : (
              <i className="fa-solid fa-sun sun-icon"></i>
            )}
          </div>
          {/*==== MODE ====*/}
          {/* MENU */}
          <div
            className="menu block lg:hidden cursor-pointer"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            <i className="fa-solid fa-bars menu-icon "></i>
          </div>
          {/*==== MENU ====*/}
        </div>
      </div>
    </header>
    //==== HEADER ====
  );
}
