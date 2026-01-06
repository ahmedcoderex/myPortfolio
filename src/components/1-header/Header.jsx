// Material Ui Liberary
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

// React Liberary
import { useEffect, useState } from "react";

// CSS Style
import "./header.css";

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
        background: changeBgHeader ? "#00000038" : "transparent",
        backdropFilter: changeBgHeader ? "blur(20px)" : "",
      }}
      
    >
      <div className="container">
        <h4 className="logo">CodeOver</h4>

        {/* NAV */}
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        {/*==== NAV ====*/}

        {/* MODAL */}
        {showModal && (
          <nav className="modal">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Articals</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Speaking</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>

              <div
                className="close-menu"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <CloseIcon className="close-menu-icon" />
              </div>
            </ul>
          </nav>
        )}
        {/*==== MODAL ====*/}

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
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
            className="menu"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <i class="fa-solid fa-bars menu-icon"></i>
          </div>
          {/*==== MENU ====*/}
        </div>
      </div>
    </header>
    //==== HEADER ====
  );
}
