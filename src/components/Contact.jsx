
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

// الحل الصحيح لاستيراد Lottie في React + Vite
import DoneAnimation from "/public/animation/Done.json";        // ضع الملفات داخل src
import EmailAnimation from "/public/animation/Email.json";      // وليس في public!

export default function Contact() {
  const [state, handleSubmit] = useForm("xeoylgad");

  return (
    <section className="contact py-20">
      {/* Header مع أنيميشن */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        
        transition={{ duration: 0.8 }}
        className="header-section"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        Contact <span>Us</span>
      </motion.h2>

      <div className="container flex flex-col lg:flex-row  items-center lg:justify-between">
        {/* النموذج */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="p-5 backdrop-blur-2xl rounded-md w-full lg:w-1/2"
        >
          <div className="input-group mb-5 ">
            <label htmlFor="email" className="block text-2xl mr-4 w-40">Email:</label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full py-4 px-2 border-b-2 border-white rounded-md mt-3 outline-none "
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="input-group mb-5">
            <label htmlFor="message" className="block text-2xl mr-4 w-40">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="Message"
              className="w-full py-4 px-2 border-b-2 border-white rounded-md mt-3 outline-none "
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting} className="submit bg-indigo-800 w-full py-3 px-2 rounded-md text-2xl cursor-pointer hover:scale-105 transition-all duration-300">
            {state.submitting ? "Waiting..." : "Send"}
          </button>

          {/* رسالة النجاح مع أنيميشن أنيقة */}
          {state.succeeded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginTop: "20px",
                padding: "20px",
                background: "#d4edda",
                borderRadius: "12px",
                color: "#155724"
              }}
            >
              <Player
                autoplay
                loop={false}
                keepLastFrame={true}
                src={DoneAnimation}
                style={{ height: "70px", width: "70px" }}
              />
              <h3 style={{ margin: 0, fontSize: "1.4rem" }}>
                تم إرسال الرسالة بنجاح!
              </h3>
            </motion.div>
          )}
        </motion.form>

        {/* الأنيميشن الجانبية (الإيميل) */}
        <motion.div
          className="animation-icon-contact"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Player
            autoplay
            loop
            src={EmailAnimation}
            style={{ height: "32rem", maxWidth: "100%" }}
          />
        </motion.div>
      </div>
    </section>
  );
}