import React from "react";

import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { cert } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, name, image, source_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[365px] w-full"
      >
        <div className="relative w-full h-[340px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={cert}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificate = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Certificate.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following certificate showcases my skills and experiences
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={`certificates-${index}`}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificate, "certificate");
