import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { technologies } from "../../constants";
import { fadeIn, textVariant } from "./../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { download } from "../../assets";

const ServiceCard = ({ index, name, icon }) => {
  return (
    <Tilt className="w-auto">
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[10px] xs:py-5 xs:px-6 py-2 px-4 min-h-[80px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={name} className="xs:w-16 xs:h-16 w-10 h-10 object-contain" />
          <h3 className="text-white xs:text-[20px] text-[12px] mt-1 font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={`${styles.sectionHeadText} flex items-center justify-between`}>Overview 
                        <button
                onClick={() =>
                (window.location.href =
                  "https://drive.google.com/uc?export=download&id=1arx3nQWpi_gtpvX-nwVMlPxs1GtFk_wq")
              }
                className={`cursor-hover xs:py-3 xs:px-4 py-2 px-2 xs:text-[12px] text-[10px] outline-none w-fit text-white rounded-xl font-bold send-btn bg-[#4215C5] d-flex justify-between items-center whitespace-nowrap`} 
              ><img src={download} alt="Resume" className="inline xs:w-5 xs:h-5 h-4 w-4 object-contain cursor-hover mr-2" />Resume</button>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a Web Developer, I excel in TypeScript and JavaScript,
        working extensively with Angular, React, and Vue. By
        leveraging the power of these JS frameworks, I craft efficient and visually
        appealing web applications, ensuring seamless performance and user
        satisfaction.
      </motion.p>

      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider mt-8 font-semibold">Tech Stack 💻</p>
        <div className="xs:mt-10 mt-6 flex flex-wrap justify-center align-center xs:gap-10 gap-4">
          {technologies.map((service, index) => (
            <ServiceCard key={service.name} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
