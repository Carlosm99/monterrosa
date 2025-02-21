"use client";

import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const About = () => {
  const variants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
  };

  return (
    <div className="flex flex-col items-center mt-24 md:mt-36">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
      >
        <p className="text-white text-center md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Software Engineer
        </p>
      </motion.div>
      <SocialLinks />

      <motion.p
        className="text-white/60 max-w-3xl px-6 md:px-0 md:text-center leading-[30px] mt-8"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.25 }}
      >
        A skilled software engineer who transforms client needs into efficient, high-quality solutions. I specialize in
        designing, testing, and implementing software to enhance user experience and productivity, delivering timely
        results through innovation and problem-solving.
      </motion.p>
    </div>
  );
};

export default About;