
// UID
import { v4 as uuidv4 } from "uuid";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { forwardRef } from "react";

const skillsInfo = [
  {
    id: uuidv4(),
    title: "HTML",
    grow: 90,
  },
  {
    id: uuidv4(),
    title: "CSS",
    grow: 80,
  },
  {
    id: uuidv4(),
    title: "JS",
    grow: 70,
  },
  {
    id: uuidv4(),
    title: "Tailwind",
    grow: 85,
  },
  {
    id: uuidv4(),
    title: "React JS",
    grow: 40,
  },
  {
    id: uuidv4(),
    title: "C++",
    grow: 70,
  },
  {
    id: uuidv4(),
    title: "Problem Solving",
    grow: 50,
  },
  {
    id: uuidv4(),
    title: "Git & GitHub",
    grow: 90,
  },
  {
    id: uuidv4(),
    title: "Figma",
    grow: 100,
  },
];

 const Skills = forwardRef((props,ref) => {
  return (
    <section className="skills py-20" ref={ref}>
      <h2 className="header-section">Skills</h2>

      <div className="container">
        <div className="skills-boxs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsInfo.map((skill, index) => {
            return (
              <div key={index} className="skill-box p-2.5 rounded-md bg-(--bg)
               
              ">
                <h3 className="title-skill text-3xl mb-3 text-(--text)">{skill.title}</h3>

                <div className="paresent-cover w-full h-1.5 bg-white mb-2.5">
                  <motion.div
                    initial={{ opacity: 0, width: 0 }} 
                    whileInView={{ opacity: 1, width: `${skill.grow}%` }} 
                    viewport={{  amount: 0.5 }} 
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="child-peresent h-full bg-(--secondary) text-white"
                  ></motion.div>
                </div>

                <div className="grow-skill text-end text-2xl text-(--text-muted)">{skill.grow}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
})

export default Skills;