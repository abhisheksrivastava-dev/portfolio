import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Abhishek</span>
          </h1>
          <br className="sm:block hidden" />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Senior Software Engineer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js,
            ExpressJS, Hapi and Nest.js. <br className="sm:block hidden" />I
            develop user interfaces and web applications.
            <br className="sm:block hidden" /> I'm a quick learner and
            collaborate closely with clients to create efficient, scalable, and
            user-friendly solutions that solve real-world problems.
            <br className="sm:block hidden" />
            Let's work together to bring your ideas to life!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "home");
