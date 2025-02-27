"use client";
import React from "react";
import { motion } from "framer-motion";
export const textVariant = (delay?: number) => {
  return {
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
        delay: delay,
      },
    },
  };
};

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center text-white`}>
          Skills In Action
        </p>
        <h2 className={`text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
          Professional Experience
        </h2>
      </motion.div>
    </div>
  );
};

export default Experience;
