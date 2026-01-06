
// React Liberary
import { useEffect, useState } from "react";


export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [changeBgHeader, setChangeBgHeader] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("theme") ?? "dark");

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
      className="fixed left-0 right-0 top-0 z-50 py-2 rounded-b-md"
    >
      <div className="container flex justify-between items-center h-12">
        <h4 className="logo text-4xl font-semibold cursor-pointer">CodeOver</h4>

        {/* NAV */}
        <nav className={`${showModal? "absolute left-0 right-0 top-full bg-gray-950 flex flex-col  rounded-md" : "hidden"} lg:flex lg:relative lg:flex-row lg:top-0 gap-8 py-3 px-6 rounded-md`}>
          <button className="text-xl transition-all duration-300">Home</button>

          <button className="text-xl transition-all duration-300">
            Skills
          </button>

          <button className="text-xl transition-all duration-300">
            Projects
          </button>

          <button className="text-xl transition-all duration-300">
            About Me
          </button>

          <button className="text-xl transition-all duration-300">
            Contact Us
          </button>
        </nav>
        {/*==== NAV ====*/}

        <div className="flex gap-4 cursor-pointer">
          {/* MODE */}
          <div className="mode" onClick={handleModeClick}>
            {mode === "dark" ? (
              <i class="fa-regular fa-moon moon-icon"></i>
            ) : (
              <i class="fa-solid fa-sun sun-icon"></i>
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
