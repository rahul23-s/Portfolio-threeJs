import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { astroLoader } from "../assets";

const ScreenLoader = () => {
  const slideOutVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <motion.div
        className="screen-loader"
        initial="initial"
        animate="exit"
        exit="exit"
        variants={slideOutVariants}
        transition={{ type: "spring", ease: "ease-in", delay: 2, duration: 4 }}
      >
        <Player
          src={astroLoader}
          loop
          autoplay
          className="player"
          style={{
            height: "150px",
            width: "150px",
          }}
        />
      </motion.div>
    </>
  );
};

export default ScreenLoader;
