// React
import { useEffect, useState, forwardRef } from "react";

// All Projects
import { allProjects } from "./allProjects";
// Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

 const Main = forwardRef((props, ref)=>{
  
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
    <main className="py-20" ref={ref} >
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
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatePresence>
              {myProjects.map((item) => (
                <motion.article
                  layout
                  key={item.id}
                  className="card rounded-md overflow-hidden transition-all duration-300 hover:scale-105 bg-(--bg)"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.image} alt={item.title} className="w-full" />

                  <div className="box p-4">
                    <h3 className="mb-3 text-2xl text-(--text)">{item.title}</h3>
                    <p className="mb-5 text-(--text-muted)">{item.body}</p>

                    <div className="footer-card flex justify-between items-cente">
                      <a href={item.gitHub} target="_blanck">
                        <i className="fa-brands fa-github icon text-3xl hover:cursor-pointer text-(--text) hover:text-(--text-muted) hover:scale-105 transition-all duration-300"></i>
                      </a>

                      <a
                        href={item.link}
                        className="more flex items-center bg-(--bg-light) py-1 px-3 rounded-md text-(--text) text-xl gap-0.5 transition-all duration-300 hover:translate-x-1"
                      >
                        <span>Live </span>
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
)

export default Main;