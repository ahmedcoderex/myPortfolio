// React
import { useEffect, useState, forwardRef } from "react";

// All Projects
import { allProjects } from "./allProjects";
// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import CardInfoProject from "../CustomComponents/CardInfoProject";

const Main = forwardRef((props, ref) => {
  const [currentActive, setCurrentActive] = useState("all");
  const [myProjects, setMyProjects] = useState(allProjects);

  const handleClicked = (category) => {
    const newArray = allProjects.filter((item) =>
      item.category.includes(category),
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
    <main className="py-20" ref={ref}>
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
            } text-xl transform-cpu bg-(--bg) text-(--text) w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            all projects
          </button>
          <button
            onClick={() => setCurrentActive("css")}
            className={`${
              currentActive === "css"
                ? " font-bold opacity-100 border-2 border-white scale-110"
                : ""
            } text-xl transform-cpu bg-(--bg) text-(--text) w-36 lg:w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => setCurrentActive("js")}
            className={`${
              currentActive === "js"
                ? " font-bold opacity-100 border-2 border-white scale-110"
                : ""
            } text-xl transform-cpu bg-(--bg) text-(--text) w-36 lg:w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            JS
          </button>
          <button
            onClick={() => setCurrentActive("react")}
            className={`${
              currentActive === "react"
                ? " font-bold opacity-100 border-2 border-white scale-110"
                : ""
            } text-xl transform-cpu bg-(--bg) text-(--text) w-36 lg:w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            React JS
          </button>
          <button
            onClick={() => setCurrentActive("tailwind")}
            className={`${
              currentActive === "tailwind"
                ? "f ont-bold opacity-100 border-2 border-white scale-110"
                : ""
            } text-xl transform-cpu bg-(--bg) text-(--text) w-36 lg:w-44 py-2 lg:py-4 lg:px-6  rounded-md opacity-80 cursor-pointer transition-all duration-300 hover:opacity-100 hover:scale-110`}
          >
            Tailwend
          </button>
        </section>

        {/* RIGHT SECTION */}
        <section className="right-section flex-1">
          <div className="cards grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <AnimatePresence>
              {myProjects.map((item) => (
                <CardInfoProject title={item.title} image={item.image} body={item.body} link={item.link}/>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </main>
  );
});

export default Main;
