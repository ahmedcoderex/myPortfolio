// CSS Style
import "./hero.css";

// Images
import mainphoto from "/mainphoto.webp";
import html from "/html.webp";
import css from "/css-3.webp";
import js from "/js.webp";
import figma from "/figma.webp";
// Animation
import { Player } from "@lottiefiles/react-lottie-player";
import animationDeveloper from "/public/animation/Developer.json";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="left-section">
          <div className="parent-avatare">
            <img src={mainphoto} alt="main-photo" />
            <img src={html} className="html" alt="html-photo" />
            <img src={css} className="css" alt="css-photo" />
            <img src={js} className="js" alt="js-photo" />
            <img src={figma} className="figma" alt="figma-phtoto" />
          </div>

          <h1>Ahmed Mohamed</h1>
          <h2>Front-end Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            porro quasi consequatur. Omnis quas corrupti, quis eum earum
            praesentium, debitis necessitatibus, sapiente quibusdam harum
            tempore laborum deleniti amet optio voluptatum?
          </p>

          <div className="social-madia">
            <a href="#">
              <i class="fa-brands fa-facebook icon-social"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin-in icon-social"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-github icon-social"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram icon-social"></i>
            </a>
          </div>
        </div>

        <div className="right-section">
          <Player
            autoplay
            loop
            src={animationDeveloper}
            style={{ height: "25rem" }}
            className="devAnimation"
          />
        </div>
      </div>
    </section>
  );
}
