// Images
import mainphoto from "/mainphoto.webp";
import html from "/html.webp";
import css from "/css-3.webp";
import js from "/js.webp";
import figma from "/figma.webp";
// Animation
import { Player } from "@lottiefiles/react-lottie-player";
import animationDeveloper from "/public/animation/Developer.json";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  return (
    <section className="hero" ref={ref}>
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-screen">
        <div className="left-section lg:w-[60%] text-center lg:text-start">
          <div className="parent-avatare relative  w-87 mt-8 min-h-60 mx-auto lg:mx-0">
            <img
              src={mainphoto}
              alt="main-photo"
              className="rounded-full w-full "
            />
            <motion.img
              initial={{ x: -10 }}
              animate={{ x: 10 }}
              transition={{
                repeatType: "reverse",
                duration: 1,
                repeat: Infinity,
              }}
              src={html}
              className="absolute w-16 top-2.5 left-0"
              alt="html-photo"
            />
            <motion.img
              initial={{ x: -10 }}
              animate={{ x: 10 }}
              transition={{
                repeatType: "reverse",
                duration: 1,
                repeat: Infinity,
              }}
              src={css}
              className="absolute w-16 top-0 right-0.5"
              alt="css-photo"
            />
            <motion.img
              initial={{ x: -10 }}
              animate={{ x: 10 }}
              transition={{
                repeatType: "reverse",
                duration: 1,
                repeat: Infinity,
              }}
              src={js}
              className="absolute w-16 bottom-0 left-2.5"
              alt="js-photo"
            />
            <motion.img
              initial={{ x: -10 }}
              animate={{ x: 10 }}
              transition={{
                repeatType: "reverse",
                duration: 1,
                repeat: Infinity,
              }}
              src={figma}
              className="absolute w-16 bottom-2.5 right-2.5"
              alt="figma-phtoto"
            />
          </div>

          <h1 className="font-semibold text-5xl mt-8 text-(--text)">
            Ahmed Mohamed
          </h1>
          <h2 className="font-medium mt-1 mb-5 text-3xl text-(--secondary)">
            Front-end Developer
          </h2>
          <p className="text-xl mb-10 leading-8 text-(--text-muted) lg:w-[70%]">
            Ahmed, passionate about the world of programming, working on
            developing my skills and building projects that help me grow in the
            tech field.
          </p>

          <div className="social-madia flex gap-5 w-fit mx-auto lg:mx-0 text-(--text-muted)">
            <a href="#" target="_blanck">
              <i className="fa-brands fa-facebook icon-social text-4xl opacity-60 transition-all duration-300 hover:opacity-100 scale-90"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-mohamed-b54bb336a/"
              target="_blanck"
            >
              <i className="fa-brands fa-linkedin-in icon-social text-4xl opacity-60 transition-all duration-300 hover:opacity-100 scale-90"></i>
            </a>
            <a href="https://github.com/ahmedcoderex" target="_blanck">
              <i className="fa-brands fa-github icon-social text-4xl opacity-60 transition-all duration-300 hover:opacity-100 scale-90"></i>
            </a>
            <a href="#" target="_blanck">
              <i className="fa-brands fa-instagram icon-social text-4xl opacity-60 transition-all duration-300 hover:opacity-100 scale-90"></i>
            </a>
          </div>
        </div>

        <div className="right-section hidden lg:block">
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
});

export default Hero;
