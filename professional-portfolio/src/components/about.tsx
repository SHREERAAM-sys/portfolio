"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
//import { useSectionInView } from "@/lib/hooks";

export default function About() {
  //const { ref } = useSectionInView("About");

  return (
    <motion.section
      //ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Shreeraam Ramachandran, an Information Systems graduate student at
        Northeastern University with two years of experience as a software
        developer . I have been an essential part of designing and architecting
        cloud products, developing efficiency-boosting frameworks, and possess
        expertise in system design, cloud computing, database management, and
        secure software development
      </p>
    </motion.section>
  );
}
