import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import SendingLottie from "../../assets/loader.json";
import SentEmail from "../../assets/email-sent.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { linkedin, resume } from "../../assets";
import { Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = () => {
    if (loading) return;
    if (valsNotVaild()) return;
    else {
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
    }
  };

  const valsNotVaild = () => {
    if (!form.name) {
      setError("Name is missing!");
      return true;
    } else if (!form.email) {
      setError("Email is missing!");
      return true;
    } else if (!form.message) {
      setError("Message is missing!");
      return true;
    } else if (!isValidEmail(form.email)) {
      setError("Invalid email!");
      return true;
    } else {
      setError("");
      return false;
    }
  };

  const isValidEmail = (email) => {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
          <Player
            src={SentEmail}
            loop
            autoplay
            className="xs:h-[20rem] xs:w-[20rem] player h-40 w-40"
          />
        </motion.div>
      ) : (
        <motion.div
          variants={slideIn("up", "spring", 0.2, 1)}
          className="contact-card flex-[0.75] bg-black-100 xs:p-8 p-6 rounded-2xl uniform-neon-shadow"
        >
          <p className={styles.sectionSubText}>
            Want to get in touch? Send me a message
          </p>
          <div className="flex items-center justify-between">
            <h3 className={styles.sectionHeadText}>Contact</h3>
            <div className="socials flex justify-between xs:gap-4 gap-2 items-end h-[100%]">
              <Tooltip arrow title="Connect with me on Linkedin" TransitionComponent={Zoom} >
               <img src={linkedin} onClick={()=>window.open("https://www.linkedin.com/in/rahul23-s/", "_blank")} alt="LinkedIn" className="linkedin w-8 h-8 object-contain cursor-hover" />
              </Tooltip>
               <Tooltip arrow title="Download My Resume ↴" TransitionComponent={Zoom}  >
                <img src={resume} onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/uc?export=download&id=1arx3nQWpi_gtpvX-nwVMlPxs1GtFk_wq")
                  } alt="Resume" className="download-resume w-8 h-8 object-contain cursor-hover" />
                </Tooltip>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 xs:text-[16px] text-[12px] ">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                disabled={loading}
                onChange={handleChange}
                placeholder="What's Your Name?"
                className="bg-tertiary xs:py-4 xs:px-6 py-3 px-3 xs:text-[16px] text-[12px]  placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium input-shadow-hover-and-active cursor-hover"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 xs:text-[16px] text-[12px] ">Your Email</span>
              <input
                type="text"
                name="email"
                disabled={loading}
                value={form.email}
                onChange={handleChange}
                placeholder="What's Your Email?"
                className="bg-tertiary xs:py-4 xs:px-6 py-3 px-3 xs:text-[16px] text-[12px] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium input-shadow-hover-and-active cursor-hover"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 xs:text-[16px] text-[12px] ">Your Message</span>
              <textarea
                name="message"
                id="message"
                cols="30"
                disabled={loading}
                rows="2"
                value={form.message}
                onChange={handleChange}
                placeholder="Write Your Message Here"
                className="bg-tertiary xs:py-4 xs:px-6 py-3 px-3 xs:text-[16px] text-[12px]  placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium input-shadow-hover-and-active cursor-hover resize-none"
              ></textarea>
            </label>

            <div className="w-full  max-h-[51px]">
              <button
                onClick={handleSubmit}
                className={`cursor-hover py-3 px-8 outline-none w-fit text-white rounded-xl max-h-[51px] font-bold send-btn bg-[#4215C5] ${
                  loading ? "sending-animation" : ""
                }`}
              >
                {loading ? (
                  <Player
                    src={SendingLottie}
                    loop
                    autoplay
                    className="player"
                    style={{
                      height: "40px",
                      width: "40px",
                      transform: "scale(2) translateY(-5px)",
                    }}
                  />
                ) : (
                  "Send"
                )}
              </button>
              {error && <span className="error xs:ml-8 ml-2 xs:text-[12px] text-[8px]">{error}</span>}
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        variants={slideIn("up", "spring", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[250px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
