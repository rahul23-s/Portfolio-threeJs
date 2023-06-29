import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const openProjectLive = (e, live_link) => {
    e.stopPropagation();
    if (live_link === "scroll-up") {
      window.scrollTo(0, 0);
    } else {
      window.open(live_link, "_blank");
    }
  };

  const openProjectCode = (e, source_code_link) => {
    e.stopPropagation();
    window.open(source_code_link, "_blank");
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.6, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          reset: true,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full project-neon-shadow transition-tilt card-tilt"
      >
        <div
          className="cursor-hover relative w-full h-[230px] open-live-link"
          onClick={(e) => openProjectLive(e, live_link)}
        >
          <img
            src={image}
            alt={name}
            className="cursor-hover w-full h-full object-cover rounded-xl"
          />
          
        </div>

        <div className="mt-5 relative">
          <div className=" absolute inset-0 mt-[-5px] flex justify-end card-img_hover">
            {source_code_link && (
              <div
                onClick={(e) => openProjectCode(e, source_code_link)}
                className="cursor-hover bg-slate-900 rounded-full flex items-center justify-center w-10 h-10 scale-on-hover"
              >
                <img
                  src={github}
                  alt="github"
                  className="cursor-hover w-8 h-8 object-contain rounded-full neon-btn-shadow-only-hover"
                />
              </div>
            )}
          </div>
          <h3 className="text-white font-bold text-[24px]">
            {name} 
          </h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="tech-tag text-[14px] capitalize"
              style={{ boxShadow: `0px 0px 5px 1px ${tag.color}` }}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>A Glimpse into My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]"
        >
          Check out the following projects that exemplify my expertise and
          demonstrate my capabilities in real-world contexts. Each project is
          described briefly and comes with links to the code repositories and
          live hosted versions. Feel free to explore them and give them a try.
        </motion.p>
      </div>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project_${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
