"use client";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/constants";
import { StaticImageData } from "next/image";

interface Experience {
  title: string;
  company_name: string;
  location: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "black",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#333333",
        color: "#fff",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #666666" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon.src} alt={experience.company_name} className="w-[70%] h-[70%] object-contain" />
        </div>
      }
    >
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
        <div>
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
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
    <div>
      <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ amount: 0.25 }}>
        <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center text-white`}>
          Skills In Action
        </p>

        <h2 className={`text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
          Professional Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#333333" animate>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
