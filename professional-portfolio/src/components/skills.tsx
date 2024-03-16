"use client";

import React, { use } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import {
  skillsDataFrontEnd,
  skillsDataBackend,
  skillsDataCloud,
} from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-20 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg text-gray-800">
        <div>
          <h5 className="text-2xl font-medium capitaulize mb-8 text-center">
            Front End
          </h5>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsDataFrontEnd.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-2xl font-medium capitalize mb-8 text-center">
            Backend
          </h5>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsDataBackend.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-2xl font-medium capitalize mb-8 text-center">
            Cloud Technology
          </h5>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsDataCloud.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
