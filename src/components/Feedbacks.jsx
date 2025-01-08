import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants"; // You'll need to create this

// Simple trophy icon component
const TrophyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-yellow-500"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const AchievementCard = ({
  index,
  title,
  description,
  date,
  category,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="flex items-center gap-4">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-12 h-12 rounded-lg object-cover"
        />
      ) : (
        <TrophyIcon />
      )}
      <p className="text-white font-black text-[24px] flex-1">{title}</p>
    </div>

    <div className="mt-4">
      <p className="text-white tracking-wider text-[16px]">{description}</p>

      <div className="mt-7 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-white font-medium text-[14px]">
            <span className="blue-text-gradient">Date:</span> {date}
          </p>
          <span className="px-3 py-1 bg-tertiary rounded-full text-[12px] text-white">
            {category}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Accomplishments and Activities</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "");