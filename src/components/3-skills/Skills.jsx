import "./skills.css";
// UID
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

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

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="header-section">Skills</h2>

      <div className="container">
        <div className="skills-boxs">
          {skillsInfo.map((skill, index) => {
            return (
              <div key={index} className="skill-box">
                <h3 className="title-skill">{skill.title}</h3>

                <div className="paresent-cover">
                  <motion.div
                    initial={{ opacity: 0, width: 0 }} // الحالة الأولية (مخفي ومنخفض)
                    whileInView={{ opacity: 1, width: `${skill.grow}%` }} // عندما يظهر في الشاشة
                    viewport={{  amount: 0.5 }} // يشتغل مرة واحدة، عند ظهور 30%
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="child-peresent"
                  ></motion.div>
                </div>

                <div className="grow-skill">{skill.grow}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
