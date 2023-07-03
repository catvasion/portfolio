import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { StargateCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        `${import.meta.env.VITE_EMAILJS_SERVICE_TOKEN}`,
        `${import.meta.env.VITE_TEMPLATE_TOKEN}`,
        {
          from_name: form.name,
          to_name: "Emily",
          from_email: form.email,
          to_email: `${import.meta.env.VITE_EMAIL_ADDRESS}`,
          message: form.message,
        },
        `${import.meta.env.VITE_EMAILJS_PUBLIC_TOKEN}`
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-1 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-0.75 bg-primary p-10 rounded-2xl border-black"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-black-100`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-black-300 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white-100 py-4 px-6 placeholder:text-gray text-black-300 rounded-lg outline-none border border-black-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-black-300 font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-white-100 py-4 px-6 placeholder:text-gray text-black-300 rounded-lg outline-none border border-black-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-black-300 font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-white-100 py-4 px-6 placeholder:text-gray text-black-300 rounded-lg outline-none border border-black-300 font-medium h-[136px]"
            />
          </label>
          <button
            type="submit"
            className="bg-white-100 py-3 px-8 outline-none border-black-300 border w-fit text-black-300 shadow-sm shadow-black-300 rounded-md"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[250px] h-[250px] "
      >
        <StargateCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
