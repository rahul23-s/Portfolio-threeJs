import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ijvauyn",
        "template_gztbddt",
        {
          from_name: form.name,
          to_name: "Rahul S",
          from_email: form.email,
          to_email: "rahul23shrm@gmail.com",
          message: form.message,
        },
        "FuqHwY2hiHj8l2h4o"
      )
      .then(
        () => {
          setLoading(false);
          setEmailSent(true);
        },
        (err) => {
          setLoading(false);
          console.log(err);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10">
      {emailSent ? (
        <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl uniform-success-shadow"
        >
          <h3 className="text-white font-black md:text-[40px] sm:text-[30px] xs:text-[24px] text-[25px] mb-5 text-center">
            Message Sent Successfully!
          </h3>
          <p className="sm:text-[18px] text-[14px] px-8 text-secondary tracking-wider text-center">
            I must have recieved your message and will get back to you as soon
            as possible!
          </p>
        </motion.div>
      ) : (
        <motion.div
          variants={slideIn("left", "spring", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl uniform-neon-shadow"
        >
          <p className={styles.sectionSubText}>
            Want to get in touch? Send me a message
          </p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's Your Name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium input-shadow-hover-and-active cursor-pointer"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's Your Email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium input-shadow-hover-and-active cursor-pointer"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                name="messgae"
                id="message"
                cols="30"
                rows="2"
                value={form.message}
                onChange={handleChange}
                placeholder="Write Your Message Here"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium input-shadow-hover-and-active cursor-pointer resize-none"
              ></textarea>
            </label>

            <button
              type="submit"
              className="py-3 px-8 outline-none w-fit text-white rounded-xl font-bold send-btn bg-[#4215C5]"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      )}

      <motion.div
        variants={slideIn("right", "spring", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[250px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
