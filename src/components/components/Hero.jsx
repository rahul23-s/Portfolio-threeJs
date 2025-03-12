import { styles } from "../../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center overflow-x-hidden items-center">
      <div
        className={`${styles.paddingX} flex flex-row justify-center items-center gap-5 `}
      >
        <div className="select-none flex flex-col justify-center items-center gap-5 sm:mt-[20%] ">
          <h1
            className={`font-black text-white lg:text-[30px] sm:text-[25px] xs:text-[20px] text-[20px] lg:leading-[98px] mt-2`}
          >
            Hey! I'm <br />
            <span
              className={`ml-5 font-black name text-white lg:text-[120px] sm:text-[80px] xs:text-[60px] text-[45px] lg:leading-[98px] mt-2 text-center`}
            >
              Rahul Sharma
            </span>
          </h1>
          <p className={`${styles.sectionSubText} text-white-100 text-center`}>
            I create immersive Web experiences
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center items-center">
        {/* <a href="#about">
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
        </a> */}
        <a href="#About" className="arrow-container cursor-hover">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
