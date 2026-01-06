import "./about.css";
import { motion } from "framer-motion";

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

export default function About() {
  return (
    <section className="about">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="header-section a"
      >
        About <span>Me</span>
      </motion.h2>

      <div className="container">
        <section className="left-section">
          <motion.h3
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{  amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Front-End Developer
          </motion.h3>

          <motion.p
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
          >
            Download CV
          </motion.button>
        </section>

        {/* هنا السحر: كل الـ boxes جوا motion.div واحدة مع staggerChildren */}
        <motion.section 
          className="right-section"
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3   // كل صندوق يتأخر 0.3 ثانية عن اللي قبله
              }
            }
          }}
        >
          <motion.div variants={boxVariants} className="box">
            <div className="icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <div>
              <h4>Web Development</h4>
              <p>I learn to design and develop interactive and modern web interfaces...</p>
            </div>
          </motion.div>

          <motion.div variants={boxVariants} className="box">
            <div className="icon">
              <i className="fa-regular fa-user"></i>
            </div>
            <div>
              <h4>UI/UX Design</h4>
              <p>I explore ways to enhance user interfaces with CSS and Tailwind CSS...</p>
            </div>
          </motion.div>

          <motion.div variants={boxVariants} className="box">
            <div className="icon">
              <i className="fa-solid fa-chalkboard"></i>
            </div>
            <div>
              <h4>Hands-On Learning</h4>
              <p>I apply my skills daily in small projects...</p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}