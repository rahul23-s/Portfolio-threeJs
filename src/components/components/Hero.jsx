import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "./canvas";
import { reactIcon, vueIcon, angularIcon } from "../../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7410F8]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="select-none">
          <h1 className={`${styles.heroHeadText}`}>
            Hey! I'm <span className="text-[#7410F8]">Rahul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            As a Web Developer well-versed in <br className="sm:block hidden" />
            <span>
              React
              <img
                src={reactIcon}
                alt="React"
                className='w-5 h-5 inline object-contain scale-200 ml-2 mr-2 "'
              />
            </span>
            ,{" "}
            <span>
              Angular
              <img
                src={angularIcon}
                alt="Angular"
                className='w-5 h-5 inline object-contain scale-150 ml-2 mr-2 "'
              />
            </span>
            ,{" "}
            <span>
              Vue
              <img
                src={vueIcon}
                alt="Vue"
                className='w-5 h-5 inline object-contain scale-200 ml-2 mr-2 "'
              />
            </span>
            <br /> I create immersive Web experiences.
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-5 bottom-34 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[54px] rounded-3xl border-2 border-secondary flex justify-center items-startp-2 ">
            <motion.dev
              animate={{ y: [0, 25, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mt-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
