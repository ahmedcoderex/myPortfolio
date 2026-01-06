// React
import { useEffect, useState } from "react";


// All Projects
import { allProjects } from "./allProjects";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [myProjects, setMyProjects] = useState(allProjects);

  const handleClicked = (category) => {
    const newArray = allProjects.filter((item) =>
      item.category.includes(category)
    );
    setMyProjects(newArray);
  };

  function handleTypeProjects() {
    if (currentActive === "all") {
      setMyProjects(allProjects);
    } else {
      handleClicked(currentActive);
    }
  }

  useEffect(() => {
    handleTypeProjects();
  }, [currentActive]);

  return (
    <main className="py-20">
      <h2 className="header-section">Projects</h2>

      <div className="container flex flex-col justify-center gap-8">
        {/* LEFT MENU */}
        <section className="laft-section flex flex-wrap justify-center gap-5">
          <button
            onClick={() => setCurrentActive("all")}
            className={`${
              currentActive === "all"
                ? "font-bold opacity-100 border-2 border-white scale-110"
                : ""
            } text-xl transform-cpu backdrop-blur-2xl w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            all projects
          </button>
          <button
            onClick={() => setCurrentActive("css")}
            className={`${
              currentActive === "css"
                ? " font-bold opacity-100 border-2 border-white scale-110"
                : ""
            } text-xl transform-cpu backdrop-blur-2xl w-36 lg:w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => setCurrentActive("js")}
            className={`${
              currentActive === "js"
                ? " font-bold opacity-100 border-2 border-white scale-110"
                : ""
            } text-xl transform-cpu backdrop-blur-2xl w-36 lg:w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            JS
          </button>
          <button
            onClick={() => setCurrentActive("react")}
            className={`${
              currentActive === "react"
                ? " font-bold opacity-100 border-2 border-white scale-110"
                : ""
            } text-xl transform-cpu backdrop-blur-2xl w-36 lg:w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            React JS
          </button>
          <button
            onClick={() => setCurrentActive("tailwend")}
            className={`${
              currentActive === "tailwend"
                ? "f ont-bold opacity-100 border-2 border-white scale-110"
                : ""
            } text-xl transform-cpu backdrop-blur-2xl w-36 lg:w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            Tailwend
          </button>
        </section>

        {/* RIGHT SECTION */}
        <section className="right-section flex-1">
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatePresence>
              {myProjects.map((item) => (
                <motion.article
                  layout
                  key={item.id}
                  className="card rounded-md overflow-hidden transition-all duration-300 hover:rotate-1 hover:scale-105 "
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.image} alt={item.title} className="w-full" />

                  <div className="box p-4">
                    <h3 className="mb-3 text-2xl">{item.title}</h3>
                    <p className="mb-3">{item.body}</p>

                    <div className="footer-card flex justify-between items-center">
                      <div
                        style={{ display: "flex", gap: "10px" }}
                        className="text-4xl"
                      >
                        <i className="fa-solid fa-link icon"></i>
                        <i className="fa-brands fa-github icon"></i>
                      </div>

                      <a href="#" className="more flex items-center gap-0.5">
                        <span>More </span>
                        <i className="fa-solid fa-arrow-right icon-arrow"></i>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </main>
  );
}
