import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  gh_pages_link,
}) => {
  return (
    <div className="flex lg:flex-row flex-col bg-black-100 rounded-xl shadow-xl md:max-w-[550px] md:min-w-[550px] lg:min-w-[70%] xl:min-w-[90%]lg:min-h-[400px] lg:flex lg:flex-row-reverse">
      <Tilt
        options={{
          reverse: true,
          max: 190,
          scale: 1,
          speed: 450,
        }}
        className="flex items-center flex-3"
      >
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl overflow-hidden "
        >
          <img
            src={image}
            alt={name}
            className="w-full  object-contain border border-gradient-black border-[20px] bg-secondary rounded-xl-secondary"
          />
        </motion.div>
      </Tilt>

      <div className="items-center flex flex-2 lg:max-w-[30%]">
        <div className="bg-secondary bg-opacity-50 m-5 rounded-xl p-3 flex flex-col items-center">
          <div>
            <div className="mt-5">
              <h3 className="text-white-100 font-bold text-[24px]">{name}</h3>

              <p className="text-primary text-[14px] mt-4">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`{text-[14px]} ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
            >
              <img
                src={github}
                alt={github}
                className="hover:opacity-40 active:opacity-30 transition-opacity duration-150"
              />
            </div>

            <div
              onClick={() => window.open(gh_pages_link, "_blank")}
              className="flex flex-row justify-space-between mt-4 items-center cursor-pointer hover:opacity-40 active:opacity-30 transition-opacity duration-150 text-white-100  "
            >
              <p className="flex mr-2">Live Demo</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work.</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills, it reflects my ability to
          work with different technologies and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col items-center gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
