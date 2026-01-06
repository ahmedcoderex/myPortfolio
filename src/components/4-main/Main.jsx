// React
import { useEffect, useState } from "react";

// CSS Style
import "./main.css";

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
    <main>
      <h2 className="header-section">Projects</h2>

      <div className="container">
        {/* LEFT MENU */}
        <section className="laft-section">
          <button
            onClick={() => setCurrentActive("all")}
            className={currentActive === "all" ? "active" : ""}
          >
            all projects
          </button>
          <button
            onClick={() => setCurrentActive("css")}
            className={currentActive === "css" ? "active" : ""}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => setCurrentActive("js")}
            className={currentActive === "js" ? "active" : ""}
          >
            JS
          </button>
          <button
            onClick={() => setCurrentActive("react")}
            className={currentActive === "react" ? "active" : ""}
          >
            React JS
          </button>
          <button
            onClick={() => setCurrentActive("tailwend")}
            className={currentActive === "tailwend" ? "active" : ""}
          >
            Tailwend
          </button>
        </section>

        {/* RIGHT SECTION */}
        <section className="right-section">
          <div className="cards">
            <AnimatePresence>
              {myProjects.map((item) => (
                <motion.article
                  layout
                  key={item.id}
                  className="card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.image} alt={item.title} />

                  <div className="box">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>

                    <div className="footer-card">
                      <div style={{ display: "flex", gap: "10px" }}>
                        <i className="fa-solid fa-link icon"></i>
                        <i className="fa-brands fa-github icon"></i>
                      </div>

                      <a href="#" className="more">
                        More
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
