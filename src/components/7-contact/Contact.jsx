import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

// الحل الصحيح لاستيراد Lottie في React + Vite
import DoneAnimation from "/public/animation/Done.json";        // ضع الملفات داخل src
import EmailAnimation from "/public/animation/Email.json";      // وليس في public!

export default function Contact() {
  const [state, handleSubmit] = useForm("xeoylgad");

  return (
    <section className="contact">
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

      <div className="container">
        {/* النموذج */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              required
              placeholder="you@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="input-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="اكتب رسالتك هنا..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "جاري الإرسال..." : "إرسال الرسالة"}
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