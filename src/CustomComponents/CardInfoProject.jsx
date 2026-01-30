import { motion } from "framer-motion";

export default function CardInfoProject({ image, title, body, link }) {
  return (
    <motion.article
      layout
      className=" rounded-md overflow-hidden transition-all duration-300 hover:scale-105 bg-(--bg)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full" loading="lazy" />

      <div className="box p-4">
        <h3 className="mb-3 text-2xl text-(--text)">{title}</h3>
        <p className="mb-5 text-(--text-muted)">{body}</p>

        <div className="footer-card flex justify-end items-cente">
          <a
            href={link}
            className="more flex items-center bg-(--bg-light) py-1 px-3 rounded-md text-(--text) text-xl gap-0.5 transition-all duration-300 hover:translate-x-1"
          >
            <span>Live </span>
            <i className="fa-solid fa-arrow-right icon-arrow"></i>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
