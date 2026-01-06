// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { forwardRef } from "react";

// أنيميشن الأطفال (الـ boxes هتظهر واحدة ورا التانية)
const boxVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
   
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const About = forwardRef((props, ref) => {
  return (
    <section className="about py-20" ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="header-section a"
      >
        About <span>Me</span>
      </motion.h2>

      <div className="container flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-7">
        <section className="left-section text-center lg:w-1/2">
          <motion.h3
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{  amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl mb-3 text-(--text)"
          >
            Front-End Developer
          </motion.h3>

          <motion.p
          className="text-xl mb-5 leading-8 text-(--text-muted)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{  amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            I’m currently focusing on developing my skills in Front-End using
            HTML, CSS, JavaScript, along with React.js and Tailwind CSS. I build
            fast, responsive websites optimized for search engines (SEO) and
            apply what I learn in small projects to strengthen my practical
            experience.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{  }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="rounded-md text-(--text) bg-(--bg) py-2 px-6 cursor-pointer transition-all duration-300 hover:scale-105"
          >
            Download CV
          </motion.button>
        </section>

      
        <motion.section 
          className="right-section lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3  
              }
            }
          }}
        >
          <motion.div variants={boxVariants} className="box backdrop-blur-2xl mb-5 p-2.5 flex gap-5 rounded-md ">
            <div className="icon text-2xl bg-(--bg)  w-10 h-10 flex justify-center items-center rounded-full p-5">
              <i className="fa-solid fa-code text-(--text)"></i>
            </div>
            <div>
              <h4 className="text-2xl mb-3 text-(--text)">Web Development</h4>
              <p className="text-xl leading-8 text-(--text-muted)">I learn to design and develop interactive and modern web interfaces...</p>
            </div>
          </motion.div>

          <motion.div variants={boxVariants} className="box backdrop-blur-2xl mb-5 p-2.5 flex gap-5 rounded-md ">
            <div className="icon text-2xl bg-(--bg)  w-10 h-10 flex justify-center items-center rounded-full p-5">
              <i className="fa-regular fa-user text-(--text)"></i>
            </div>
            <div>
              <h4 className="text-2xl mb-3 text-(--text)">UI/UX Design</h4>
              <p className="text-xl leading-8 text-(--text-muted)">I explore ways to enhance user interfaces with CSS and Tailwind CSS...</p>
            </div>
          </motion.div>

          <motion.div variants={boxVariants} className="box backdrop-blur-2xl  p-2.5 flex gap-5 rounded-md ">
            <div className="icon text-2xl bg-(--bg)  w-10 h-10 flex justify-center items-center rounded-full p-5">
              <i className="fa-solid fa-chalkboard text-(--text)"></i>
            </div>
            <div>
              <h4 className="text-2xl mb-3 text-(--text)">Hands-On Learning</h4>
              <p className="text-xl leading-8 text-(--text-muted)">I apply my skills daily in small projects...</p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
})

export default About;